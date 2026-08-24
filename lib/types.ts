/* ------------------------------------------------------------------ */
/*  Content model                                                      */
/*                                                                     */
/*  Everything the app renders is plain data. No MDX, no CMS, no DB —  */
/*  the whole course is a typed object graph bundled at build time.    */
/* ------------------------------------------------------------------ */

/** Learning priority, mirrored from the source reference. */
export type Priority = "essential" | "useful" | "later";

/** Register/quality markers used throughout the reference. */
export type Marker =
  /** ❌ wrong, or so unnatural it marks you as a non-native speaker */
  | "bad"
  /** ⚠️ possible but unnatural / correct but risky */
  | "warn"
  /** ✅ natural — what people actually say */
  | "good"
  /** 🗣️ spoken only */
  | "spoken"
  /** ✍️ written / formal */
  | "written"
  /** 🇧🇷 specific interference from Portuguese */
  | "br"
  /** neutral, no judgement */
  | "neutral";

/* ---------------------------- content blocks ---------------------------- */

/**
 * Inline markup accepted inside `text`, `note`, `body`, `explanation`
 * and table cells:
 *   **bold**   *italic*   `code`   [[english sentence]]
 * `[[...]]` renders in the mono "English specimen" style.
 */
export type ContentBlock =
  | { kind: "text"; text: string }
  | { kind: "heading"; text: string; id?: string }
  | {
      kind: "callout";
      tone: "tip" | "warn" | "danger" | "br" | "key";
      title?: string;
      text: string;
    }
  | {
      kind: "rule";
      /** The one-line law to remember. */
      title: string;
      text?: string;
    }
  | {
      kind: "examples";
      title?: string;
      items: ExampleItem[];
    }
  | {
      kind: "table";
      title?: string;
      headers: string[];
      rows: string[][];
      /** Render first column with emphasis (default true for 2-col tables). */
      emphasizeFirst?: boolean;
    }
  | {
      kind: "compare";
      title?: string;
      left: ComparePane;
      right: ComparePane;
    }
  | {
      kind: "pattern";
      title?: string;
      /** Monospace skeleton, e.g. "Subject + have/has + PAST PARTICIPLE" */
      lines: string[];
      caption?: string;
    }
  | {
      kind: "list";
      title?: string;
      ordered?: boolean;
      items: string[];
    }
  | {
      kind: "pairs";
      title?: string;
      /** Two-column glossary: term → meaning. */
      items: { term: string; meaning: string; note?: string }[];
    }
  | {
      kind: "translation";
      /** The Portuguese thought. */
      pt: string;
      /** The literal translation that fails. */
      wrong?: string;
      /** What English actually says. May be several. */
      right: string[];
      note?: string;
    };

export interface ExampleItem {
  marker: Marker;
  /** The English sentence (rendered in mono). */
  text: string;
  /** Optional gloss, usually Portuguese or a short clarification. */
  note?: string;
}

export interface ComparePane {
  title: string;
  /** Short caption under the title. */
  caption?: string;
  items: string[];
  tone?: "good" | "bad" | "neutral" | "brand";
}

/* ------------------------------ exercises ------------------------------- */

export type ExerciseKind =
  | "choice"
  | "fill"
  | "fix"
  | "translate"
  | "order"
  | "match"
  | "judge"
  | "categorize";

interface ExerciseBase {
  /** Unique inside its lesson. Combined with lessonId for storage keys. */
  id: string;
  /** Shown above the interaction. Supports inline markup. */
  prompt: string;
  /** Shown after answering — the "why". Supports inline markup. */
  explanation: string;
  /** Optional nudge available before answering. */
  hint?: string;
  /** Higher = harder. Used to weight XP and review scheduling. 1–3. */
  difficulty?: 1 | 2 | 3;
}

/** Multiple choice, exactly one correct option. */
export interface ChoiceExercise extends ExerciseBase {
  kind: "choice";
  /** Optional sentence with a ___ gap, shown as a specimen above options. */
  sentence?: string;
  options: string[];
  /** Index into `options`. */
  answer: number;
}

/**
 * Type the missing word(s). The sentence must contain `___`.
 * Multiple gaps are supported: each `___` maps to `answers[i]`.
 */
export interface FillExercise extends ExerciseBase {
  kind: "fill";
  sentence: string;
  /** For each gap, the list of accepted spellings (first = canonical). */
  answers: string[][];
}

/** Rewrite a wrong sentence correctly. */
export interface FixExercise extends ExerciseBase {
  kind: "fix";
  /** The broken sentence (shown with an ❌ marker). */
  wrong: string;
  /** Accepted corrections (first = canonical). */
  answers: string[];
}

/** Say it in English. */
export interface TranslateExercise extends ExerciseBase {
  kind: "translate";
  pt: string;
  answers: string[];
}

/** Rebuild the sentence by tapping words in order. */
export interface OrderExercise extends ExerciseBase {
  kind: "order";
  /** Tokens presented shuffled. */
  tokens: string[];
  /** Correct orderings, as arrays of tokens. First = canonical. */
  answers: string[][];
}

/** Connect left items to right items. */
export interface MatchExercise extends ExerciseBase {
  kind: "match";
  pairs: { left: string; right: string }[];
}

/** Is this natural English? Fast intuition training. */
export interface JudgeExercise extends ExerciseBase {
  kind: "judge";
  sentence: string;
  /** true = natural/correct, false = wrong or unnatural. */
  natural: boolean;
  /** When `natural` is false, the fixed version to reveal. */
  correction?: string;
}

/** Drop each item into the right bucket. */
export interface CategorizeExercise extends ExerciseBase {
  kind: "categorize";
  buckets: string[];
  /** `bucket` must be one of `buckets`. */
  items: { text: string; bucket: string }[];
}

export type Exercise =
  | ChoiceExercise
  | FillExercise
  | FixExercise
  | TranslateExercise
  | OrderExercise
  | MatchExercise
  | JudgeExercise
  | CategorizeExercise;

/* ------------------------------- lessons -------------------------------- */

export interface Lesson {
  /** Stable id, e.g. "04-present-perfect". Never change once shipped. */
  id: string;
  /** Section number from the reference, e.g. "4.5". */
  number: string;
  /** English title. */
  title: string;
  /** Portuguese subtitle — the promise of the lesson. */
  titlePt: string;
  priority: Priority;
  /** One-sentence hook, in Portuguese. */
  summary: string;
  /** Search keywords (PT + EN). */
  tags: string[];
  blocks: ContentBlock[];
  exercises: Exercise[];
}

export interface Module {
  id: string;
  title: string;
  titlePt: string;
  /** Short description in Portuguese. */
  description: string;
  /** Lucide-ish icon name resolved by the UI. */
  icon: ModuleIcon;
  lessons: Lesson[];
}

export type ModuleIcon =
  | "foundation"
  | "verbs"
  | "structure"
  | "words"
  | "nuance"
  | "fluency"
  | "professional"
  | "reference";

/* ------------------------------ progress -------------------------------- */

export type LessonStatus = "locked" | "new" | "reading" | "practicing" | "done";

/** Leitner-style spaced repetition box. */
export type ReviewBox = 0 | 1 | 2 | 3 | 4 | 5;

export interface ExerciseRecord {
  /** Times answered correctly on first try. */
  correct: number;
  /** Times answered wrong. */
  wrong: number;
  /** Leitner box — higher means better known, longer interval. */
  box: ReviewBox;
  /** ISO date (yyyy-mm-dd) when it becomes reviewable again. */
  due: string;
  /** Epoch ms of last answer. */
  seen: number;
  /** Result of the most recent attempt. */
  last: "correct" | "wrong";
}

export interface LessonRecord {
  status: LessonStatus;
  /** 0–100, best exercise score achieved. */
  bestScore: number;
  /** Number of full exercise runs completed. */
  runs: number;
  /** Epoch ms. */
  updated: number;
  /** Epoch ms of first completion, if any. */
  completed?: number;
  /** Index of the last content block read (resume position). */
  readProgress?: number;
}

export interface ProgressState {
  version: number;
  xp: number;
  /** yyyy-mm-dd → xp earned that day. */
  daily: Record<string, number>;
  streak: { current: number; longest: number; last: string | null };
  lessons: Record<string, LessonRecord>;
  exercises: Record<string, ExerciseRecord>;
  settings: {
    theme: "dark" | "light";
    dailyGoal: number;
    /** Show Portuguese helper text. */
    showPt: boolean;
    /** Play sound on answer. */
    sound: boolean;
  };
  /** Epoch ms. */
  createdAt: number;
}

/* ------------------------------- results -------------------------------- */

export interface AnswerResult {
  correct: boolean;
  /** Canonical correct answer, for display. */
  expected: string;
  /** What the learner submitted, normalized for display. */
  received?: string;
  /** "Almost" — right words, wrong capitalization/punctuation/typo. */
  nearMiss?: boolean;
}
