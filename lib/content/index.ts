import type { Exercise, Lesson, Module } from "@/lib/types";
import { foundationModule } from "./modules/01-foundation";
import { verbsModule } from "./modules/02-verbs";
import { moodModule } from "./modules/03-mood";
import { structureModule } from "./modules/04-structure";
import { wordsModule } from "./modules/05-words";
import { precisionModule } from "./modules/06-precision";
import { fluencyModule } from "./modules/07-fluency";
import { professionalModule } from "./modules/08-professional";

/* ------------------------------------------------------------------ */
/*  Course registry                                                    */
/*                                                                     */
/*  The ordering here IS the curriculum order — it drives the learning */
/*  path, "next lesson" navigation and progress percentages.           */
/* ------------------------------------------------------------------ */

export const modules: Module[] = [
  foundationModule,
  verbsModule,
  moodModule,
  structureModule,
  wordsModule,
  precisionModule,
  fluencyModule,
  professionalModule,
];

export const lessons: Lesson[] = modules.flatMap((m) => m.lessons);

export const lessonById = new Map(lessons.map((l) => [l.id, l]));

export const moduleByLessonId = new Map(
  modules.flatMap((m) => m.lessons.map((l) => [l.id, m] as const)),
);

export const moduleById = new Map(modules.map((m) => [m.id, m]));

export const lessonOrder: string[] = lessons.map((l) => l.id);

export function getLesson(id: string): Lesson | undefined {
  return lessonById.get(id);
}

export function getNeighbors(id: string): {
  prev: Lesson | null;
  next: Lesson | null;
} {
  const i = lessonOrder.indexOf(id);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? lessons[i - 1] : null,
    next: i < lessons.length - 1 ? lessons[i + 1] : null,
  };
}

export const totalExercises = lessons.reduce(
  (sum, l) => sum + l.exercises.length,
  0,
);

/** Flat index for the review queue: "lessonId::exerciseId" → data. */
export const exerciseIndex = new Map<
  string,
  { lesson: Lesson; exercise: Exercise }
>(
  lessons.flatMap((lesson) =>
    lesson.exercises.map(
      (exercise) =>
        [`${lesson.id}::${exercise.id}`, { lesson, exercise }] as const,
    ),
  ),
);

/* ------------------------------- search ------------------------------- */

export interface SearchHit {
  lesson: Lesson;
  module: Module;
  score: number;
  /** Matched snippet for display. */
  snippet?: string;
}

function fold(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/** Pre-computed haystack per lesson, built once at module load. */
const haystacks = new Map<string, string>(
  lessons.map((l) => {
    const parts: string[] = [l.title, l.titlePt, l.summary, l.number, ...l.tags];
    for (const b of l.blocks) {
      switch (b.kind) {
        case "text":
        case "heading":
          parts.push(b.text);
          break;
        case "callout":
        case "rule":
          parts.push(b.title ?? "", b.text ?? "");
          break;
        case "examples":
          parts.push(...b.items.map((i) => `${i.text} ${i.note ?? ""}`));
          break;
        case "table":
          parts.push(b.title ?? "", ...b.headers, ...b.rows.flat());
          break;
        case "compare":
          parts.push(b.left.title, b.right.title, ...b.left.items, ...b.right.items);
          break;
        case "pattern":
          parts.push(b.title ?? "", ...b.lines);
          break;
        case "list":
          parts.push(b.title ?? "", ...b.items);
          break;
        case "pairs":
          parts.push(...b.items.map((i) => `${i.term} ${i.meaning}`));
          break;
        case "translation":
          parts.push(b.pt, ...b.right);
          break;
      }
    }
    return [l.id, fold(parts.join(" \u00b7 "))];
  }),
);

export function searchLessons(query: string, limit = 12): SearchHit[] {
  const q = fold(query.trim());
  if (q.length < 2) return [];
  const terms = q.split(/\s+/).filter(Boolean);

  const hits: SearchHit[] = [];
  for (const lesson of lessons) {
    const hay = haystacks.get(lesson.id) ?? "";
    let score = 0;

    for (const term of terms) {
      if (!hay.includes(term)) {
        score = -1;
        break;
      }
      // Title / tag matches weigh much more than body matches.
      if (fold(lesson.title).includes(term)) score += 10;
      if (fold(lesson.titlePt).includes(term)) score += 10;
      if (lesson.tags.some((t) => fold(t).includes(term))) score += 6;
      score += 1;
    }

    if (score > 0) {
      const idx = hay.indexOf(terms[0]);
      const snippet =
        idx >= 0
          ? hay.slice(Math.max(0, idx - 40), idx + 80).replace(/\s+/g, " ")
          : undefined;
      hits.push({ lesson, module: moduleByLessonId.get(lesson.id)!, score, snippet });
    }
  }

  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}
