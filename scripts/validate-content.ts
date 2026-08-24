/**
 * Content integrity checks.
 *
 * The type system guarantees shape; this guarantees *semantics* —
 * that every exercise is actually answerable. Run with:
 *   npx tsx scripts/validate-content.ts
 * (or via `npm run validate` once tsx is available)
 */
import { lessons, modules, totalExercises } from "../lib/content";
import { countGaps } from "../lib/answer";
import type { Exercise } from "../lib/types";

const problems: string[] = [];
const warnings: string[] = [];

function fail(where: string, msg: string) {
  problems.push(`${where}: ${msg}`);
}
function warn(where: string, msg: string) {
  warnings.push(`${where}: ${msg}`);
}

const seenLessonIds = new Set<string>();

for (const lesson of lessons) {
  const L = `${lesson.id}`;

  if (seenLessonIds.has(lesson.id)) fail(L, "duplicate lesson id");
  seenLessonIds.add(lesson.id);

  if (lesson.blocks.length < 5) warn(L, `only ${lesson.blocks.length} blocks`);
  if (lesson.exercises.length < 6)
    warn(L, `only ${lesson.exercises.length} exercises`);

  const seenExIds = new Set<string>();
  const kinds = new Set<string>();

  for (const ex of lesson.exercises as Exercise[]) {
    const E = `${L}/${ex.id}`;
    if (seenExIds.has(ex.id)) fail(E, "duplicate exercise id");
    seenExIds.add(ex.id);
    kinds.add(ex.kind);

    if (!ex.prompt?.trim()) fail(E, "empty prompt");
    if (!ex.explanation?.trim()) fail(E, "empty explanation");

    switch (ex.kind) {
      case "choice": {
        if (ex.options.length < 2) fail(E, "needs at least 2 options");
        if (ex.answer < 0 || ex.answer >= ex.options.length)
          fail(E, `answer index ${ex.answer} out of range`);
        if (new Set(ex.options).size !== ex.options.length)
          fail(E, "duplicate options");
        break;
      }
      case "fill": {
        const gaps = countGaps(ex.sentence);
        if (gaps === 0) fail(E, "sentence has no ___ gap");
        if (gaps !== ex.answers.length)
          fail(E, `${gaps} gaps but ${ex.answers.length} answer sets`);
        ex.answers.forEach((set, i) => {
          if (!set.length) fail(E, `gap ${i + 1} has no accepted answers`);
          if (set.some((a) => !a.trim()))
            fail(E, `gap ${i + 1} has an empty accepted answer`);
        });
        break;
      }
      case "fix": {
        if (!ex.wrong.trim()) fail(E, "empty `wrong` sentence");
        if (!ex.answers.length) fail(E, "no accepted answers");
        if (ex.answers.some((a) => a.trim() === ex.wrong.trim()))
          fail(E, "an accepted answer equals the wrong sentence");
        break;
      }
      case "translate": {
        if (!ex.pt.trim()) fail(E, "empty pt prompt");
        if (!ex.answers.length) fail(E, "no accepted answers");
        break;
      }
      case "order": {
        if (ex.tokens.length < 3) fail(E, "needs at least 3 tokens");
        const key = (xs: string[]) => [...xs].sort().join("\u0000");
        const tokenKey = key(ex.tokens);
        ex.answers.forEach((ans, i) => {
          if (key(ans) !== tokenKey)
            fail(
              E,
              `answer ${i} is not a permutation of tokens\n    tokens: ${JSON.stringify(ex.tokens)}\n    answer: ${JSON.stringify(ans)}`,
            );
        });
        if (!ex.answers.length) fail(E, "no accepted orderings");
        break;
      }
      case "match": {
        if (ex.pairs.length < 3) fail(E, "needs at least 3 pairs");
        if (ex.pairs.length > 6) warn(E, "more than 6 pairs is hard to use");
        if (new Set(ex.pairs.map((p) => p.right)).size !== ex.pairs.length)
          fail(E, "duplicate right-hand values make matching ambiguous");
        break;
      }
      case "judge": {
        if (!ex.sentence.trim()) fail(E, "empty sentence");
        if (!ex.natural && !ex.correction)
          fail(E, "unnatural sentence needs a `correction`");
        break;
      }
      case "categorize": {
        if (ex.buckets.length < 2) fail(E, "needs at least 2 buckets");
        if (ex.items.length < 3) fail(E, "needs at least 3 items");
        for (const item of ex.items) {
          if (!ex.buckets.includes(item.bucket))
            fail(E, `item "${item.text}" has unknown bucket "${item.bucket}"`);
        }
        for (const b of ex.buckets) {
          if (!ex.items.some((i) => i.bucket === b))
            warn(E, `bucket "${b}" has no items`);
        }
        break;
      }
    }
  }

  if (kinds.size < 3)
    warn(L, `only ${kinds.size} exercise kinds (${[...kinds].join(", ")})`);
}

/* ------------------------------- report ------------------------------- */

const totalBlocks = lessons.reduce((n, l) => n + l.blocks.length, 0);

console.log("Modules:   ", modules.length);
console.log("Lessons:   ", lessons.length);
console.log("Blocks:    ", totalBlocks);
console.log("Exercises: ", totalExercises);
console.log("");

if (warnings.length) {
  console.log(`⚠ ${warnings.length} warning(s):`);
  for (const w of warnings) console.log("  -", w);
  console.log("");
}

if (problems.length) {
  console.log(`✗ ${problems.length} error(s):`);
  for (const p of problems) console.log("  -", p);
  process.exit(1);
}

console.log("✓ content valid");
