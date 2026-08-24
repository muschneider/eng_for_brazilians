import type { AnswerResult } from "./types";

/* ------------------------------------------------------------------ */
/*  Answer checking                                                    */
/*                                                                     */
/*  Goal: never punish a learner for a curly apostrophe, a missing     */
/*  full stop, or writing "I am" instead of "I'm" — but still catch    */
/*  the mistake the exercise is actually about.                        */
/* ------------------------------------------------------------------ */

/** Contraction ⇄ expansion pairs, applied in both directions. */
const CONTRACTIONS: [RegExp, string][] = [
  [/\bi'm\b/g, "i am"],
  [/\byou're\b/g, "you are"],
  [/\bwe're\b/g, "we are"],
  [/\bthey're\b/g, "they are"],
  [/\bhe's\b/g, "he is"],
  [/\bshe's\b/g, "she is"],
  [/\bit's\b/g, "it is"],
  [/\bthat's\b/g, "that is"],
  [/\bthere's\b/g, "there is"],
  [/\bwho's\b/g, "who is"],
  [/\bwhat's\b/g, "what is"],
  [/\blet's\b/g, "let us"],
  [/\bi've\b/g, "i have"],
  [/\byou've\b/g, "you have"],
  [/\bwe've\b/g, "we have"],
  [/\bthey've\b/g, "they have"],
  [/\bi'll\b/g, "i will"],
  [/\byou'll\b/g, "you will"],
  [/\bhe'll\b/g, "he will"],
  [/\bshe'll\b/g, "she will"],
  [/\bit'll\b/g, "it will"],
  [/\bwe'll\b/g, "we will"],
  [/\bthey'll\b/g, "they will"],
  [/\bi'd\b/g, "i would"],
  [/\byou'd\b/g, "you would"],
  [/\bhe'd\b/g, "he would"],
  [/\bshe'd\b/g, "she would"],
  [/\bwe'd\b/g, "we would"],
  [/\bthey'd\b/g, "they would"],
  [/\bdon't\b/g, "do not"],
  [/\bdoesn't\b/g, "does not"],
  [/\bdidn't\b/g, "did not"],
  [/\bisn't\b/g, "is not"],
  [/\baren't\b/g, "are not"],
  [/\bwasn't\b/g, "was not"],
  [/\bweren't\b/g, "were not"],
  [/\bhaven't\b/g, "have not"],
  [/\bhasn't\b/g, "has not"],
  [/\bhadn't\b/g, "had not"],
  [/\bwon't\b/g, "will not"],
  [/\bwouldn't\b/g, "would not"],
  [/\bcan't\b/g, "cannot"],
  [/\bcannot\b/g, "can not"],
  [/\bcouldn't\b/g, "could not"],
  [/\bshouldn't\b/g, "should not"],
  [/\bmustn't\b/g, "must not"],
  [/\bmightn't\b/g, "might not"],
];

/** Strip accents, unify quotes/dashes, lowercase, collapse space. */
export function normalize(input: string): string {
  return input
    .normalize("NFKC")
    .replace(/[\u2018\u2019\u02BC\u00B4`]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014\u2212]/g, "-")
    .replace(/\u00A0/g, " ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

/** Normalize + drop terminal punctuation and stray spacing around it. */
function core(input: string): string {
  return normalize(input)
    .replace(/\s*([,.;:!?])\s*/g, "$1")
    .replace(/[.!?]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Fully expanded form: contractions opened up, punctuation removed. */
function expanded(input: string): string {
  let s = core(input);
  for (const [re, to] of CONTRACTIONS) s = s.replace(re, to);
  return s.replace(/\s+/g, " ").trim();
}

/** Punctuation-free skeleton — used only for "near miss" detection. */
function skeleton(input: string): string {
  return expanded(input)
    .replace(/[^\p{L}\p{N}\s']/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  let curr = new Array<number>(b.length + 1);

  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    [prev, curr] = [curr, prev];
  }
  return prev[b.length];
}

/**
 * Check a free-text answer against a list of accepted answers.
 * `accepted[0]` is treated as canonical and shown when wrong.
 */
export function checkText(input: string, accepted: string[]): AnswerResult {
  const canonical = accepted[0] ?? "";
  const given = input.trim();

  if (!given) {
    return { correct: false, expected: canonical, received: given };
  }

  const forms = [core(given), expanded(given)];

  for (const candidate of accepted) {
    const targets = [core(candidate), expanded(candidate)];
    if (forms.some((f) => targets.includes(f))) {
      return { correct: true, expected: candidate, received: given };
    }
  }

  // Typo tolerance: same skeleton within a small edit distance counts as
  // correct-but-flagged, so a slip of the finger doesn't break a streak.
  const gs = skeleton(given);
  for (const candidate of accepted) {
    const cs = skeleton(candidate);
    if (!cs) continue;
    const budget = cs.length > 24 ? 2 : cs.length > 10 ? 1 : 0;
    if (budget > 0 && levenshtein(gs, cs) <= budget) {
      return {
        correct: true,
        nearMiss: true,
        expected: candidate,
        received: given,
      };
    }
  }

  return { correct: false, expected: canonical, received: given };
}

/** Split a sentence containing `___` gaps into literal segments. */
export function splitGaps(sentence: string): string[] {
  return sentence.split(/_{2,}/g);
}

export function countGaps(sentence: string): number {
  return Math.max(0, splitGaps(sentence).length - 1);
}

/** Deterministic shuffle so token order is stable across re-renders. */
export function seededShuffle<T>(items: T[], seed: string): T[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rand = () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 100000) / 100000;
  };

  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  // Guard against the shuffle returning the original order.
  if (out.length > 2 && out.every((v, i) => v === items[i])) {
    [out[0], out[out.length - 1]] = [out[out.length - 1], out[0]];
  }
  return out;
}

/** Compare a built token sequence against accepted orderings. */
export function checkOrder(
  built: string[],
  answers: string[][],
): AnswerResult {
  const given = built.join(" ");
  for (const answer of answers) {
    if (core(given) === core(answer.join(" "))) {
      return { correct: true, expected: answer.join(" "), received: given };
    }
  }
  return {
    correct: false,
    expected: (answers[0] ?? []).join(" "),
    received: given,
  };
}
