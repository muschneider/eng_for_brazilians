import type {
  ExerciseRecord,
  LessonRecord,
  LessonStatus,
  ProgressState,
  ReviewBox,
} from "./types";

/* ------------------------------------------------------------------ */
/*  Progress persistence                                               */
/*                                                                     */
/*  Single localStorage key, versioned, defensively parsed. All reads  */
/*  go through `load()` which always returns a complete, valid state   */
/*  even if storage is corrupt, empty, or unavailable (SSR / private   */
/*  browsing).                                                         */
/* ------------------------------------------------------------------ */

export const STORAGE_KEY = "practical-english:v1";
const VERSION = 1;

/** Leitner intervals in days, indexed by box. */
const INTERVALS: Record<ReviewBox, number> = {
  0: 0,
  1: 1,
  2: 2,
  3: 4,
  4: 8,
  5: 16,
};

export const XP_PER_CORRECT = 10;
export const XP_LESSON_READ = 15;
export const XP_LESSON_PERFECT = 40;

export function today(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function addDays(iso: string, days: number): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  const p = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
}

function daysBetween(a: string, b: string): number {
  const [ay, am, ad] = a.split("-").map(Number);
  const [by, bm, bd] = b.split("-").map(Number);
  const ms = Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad);
  return Math.round(ms / 86_400_000);
}

export function createInitialState(): ProgressState {
  return {
    version: VERSION,
    xp: 0,
    daily: {},
    streak: { current: 0, longest: 0, last: null },
    lessons: {},
    exercises: {},
    settings: { theme: "dark", dailyGoal: 60, showPt: true, sound: true },
    createdAt: Date.now(),
  };
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Merge unknown parsed JSON onto a fresh state, keeping only valid shapes. */
function reconcile(raw: unknown): ProgressState {
  const base = createInitialState();
  if (!isRecord(raw)) return base;

  if (typeof raw.xp === "number" && Number.isFinite(raw.xp)) {
    base.xp = Math.max(0, Math.floor(raw.xp));
  }
  if (typeof raw.createdAt === "number") base.createdAt = raw.createdAt;

  if (isRecord(raw.daily)) {
    for (const [k, v] of Object.entries(raw.daily)) {
      if (typeof v === "number" && Number.isFinite(v)) base.daily[k] = v;
    }
  }

  if (isRecord(raw.streak)) {
    const s = raw.streak;
    base.streak = {
      current: typeof s.current === "number" ? s.current : 0,
      longest: typeof s.longest === "number" ? s.longest : 0,
      last: typeof s.last === "string" ? s.last : null,
    };
  }

  if (isRecord(raw.lessons)) {
    for (const [k, v] of Object.entries(raw.lessons)) {
      if (!isRecord(v)) continue;
      base.lessons[k] = {
        status: (typeof v.status === "string" ? v.status : "new") as LessonStatus,
        bestScore: typeof v.bestScore === "number" ? v.bestScore : 0,
        runs: typeof v.runs === "number" ? v.runs : 0,
        updated: typeof v.updated === "number" ? v.updated : Date.now(),
        completed: typeof v.completed === "number" ? v.completed : undefined,
        readProgress:
          typeof v.readProgress === "number" ? v.readProgress : undefined,
      };
    }
  }

  if (isRecord(raw.exercises)) {
    for (const [k, v] of Object.entries(raw.exercises)) {
      if (!isRecord(v)) continue;
      const box = typeof v.box === "number" ? v.box : 0;
      base.exercises[k] = {
        correct: typeof v.correct === "number" ? v.correct : 0,
        wrong: typeof v.wrong === "number" ? v.wrong : 0,
        box: (Math.min(5, Math.max(0, box)) as ReviewBox) ?? 0,
        due: typeof v.due === "string" ? v.due : today(),
        seen: typeof v.seen === "number" ? v.seen : Date.now(),
        last: v.last === "correct" ? "correct" : "wrong",
      };
    }
  }

  if (isRecord(raw.settings)) {
    const s = raw.settings;
    base.settings = {
      theme: s.theme === "light" ? "light" : "dark",
      dailyGoal:
        typeof s.dailyGoal === "number" && s.dailyGoal > 0
          ? Math.min(500, s.dailyGoal)
          : 60,
      showPt: s.showPt !== false,
      sound: s.sound !== false,
    };
  }

  return base;
}

export function load(): ProgressState {
  if (typeof window === "undefined") return createInitialState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState();
    return reconcile(JSON.parse(raw));
  } catch {
    return createInitialState();
  }
}

export function save(state: ProgressState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* quota exceeded or storage disabled — progress is best-effort */
  }
}

/* ---------------------------- mutations --------------------------- */

/** Award XP and roll the streak forward. Pure: returns a new state. */
export function grantXp(state: ProgressState, amount: number): ProgressState {
  if (amount <= 0) return state;
  const day = today();
  const daily = { ...state.daily, [day]: (state.daily[day] ?? 0) + amount };

  let { current, longest, last } = state.streak;
  if (last !== day) {
    const gap = last ? daysBetween(last, day) : Infinity;
    current = gap === 1 ? current + 1 : 1;
    longest = Math.max(longest, current);
    last = day;
  }

  return { ...state, xp: state.xp + amount, daily, streak: { current, longest, last } };
}

export function exerciseKey(lessonId: string, exerciseId: string): string {
  return `${lessonId}::${exerciseId}`;
}

/** Record an exercise attempt and reschedule it in the Leitner ladder. */
export function recordAnswer(
  state: ProgressState,
  lessonId: string,
  exerciseId: string,
  correct: boolean,
): ProgressState {
  const key = exerciseKey(lessonId, exerciseId);
  const prev: ExerciseRecord = state.exercises[key] ?? {
    correct: 0,
    wrong: 0,
    box: 0,
    due: today(),
    seen: 0,
    last: "wrong",
  };

  // Right → move up one box. Wrong → drop two boxes (never below 0).
  const box = (
    correct ? Math.min(5, prev.box + 1) : Math.max(0, prev.box - 2)
  ) as ReviewBox;

  const next: ExerciseRecord = {
    correct: prev.correct + (correct ? 1 : 0),
    wrong: prev.wrong + (correct ? 0 : 1),
    box,
    due: addDays(today(), INTERVALS[box]),
    seen: Date.now(),
    last: correct ? "correct" : "wrong",
  };

  return { ...state, exercises: { ...state.exercises, [key]: next } };
}

export function updateLesson(
  state: ProgressState,
  lessonId: string,
  patch: Partial<LessonRecord>,
): ProgressState {
  const prev: LessonRecord = state.lessons[lessonId] ?? {
    status: "new",
    bestScore: 0,
    runs: 0,
    updated: Date.now(),
  };
  const next: LessonRecord = { ...prev, ...patch, updated: Date.now() };
  return { ...state, lessons: { ...state.lessons, [lessonId]: next } };
}

/** Keys of exercises that are due for review today (weakest first). */
export function dueExerciseKeys(state: ProgressState): string[] {
  const day = today();
  return Object.entries(state.exercises)
    .filter(([, r]) => r.due <= day && r.box < 5)
    .sort((a, b) => {
      const boxDiff = a[1].box - b[1].box;
      if (boxDiff !== 0) return boxDiff;
      return a[1].seen - b[1].seen;
    })
    .map(([k]) => k);
}

/** Exercises answered wrong more often than right. */
export function weakExerciseKeys(state: ProgressState): string[] {
  return Object.entries(state.exercises)
    .filter(([, r]) => r.wrong > 0 && r.last === "wrong")
    .sort((a, b) => b[1].wrong - a[1].wrong)
    .map(([k]) => k);
}

export function levelFromXp(xp: number): {
  level: number;
  into: number;
  need: number;
  label: string;
} {
  // Gentle quadratic curve: level n needs 100 * n XP to clear.
  let level = 1;
  let remaining = xp;
  let need = 100;
  while (remaining >= need) {
    remaining -= need;
    level += 1;
    need = 100 * level;
  }
  const labels = [
    "Iniciante",
    "Explorador",
    "Aprendiz",
    "Praticante",
    "Confiante",
    "Fluente",
    "Afiado",
    "Avançado",
    "Natural",
    "Nativo-ish",
  ];
  return {
    level,
    into: remaining,
    need,
    label: labels[Math.min(labels.length - 1, level - 1)],
  };
}

/** Last 7 calendar days (oldest → newest) with XP earned. */
export function weekActivity(
  state: ProgressState,
): { day: string; xp: number; label: string }[] {
  const labels = ["D", "S", "T", "Q", "Q", "S", "S"];
  const out: { day: string; xp: number; label: string }[] = [];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const p = (n: number) => String(n).padStart(2, "0");
    const iso = `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
    out.push({ day: iso, xp: state.daily[iso] ?? 0, label: labels[d.getDay()] });
  }
  return out;
}

export function exportState(state: ProgressState): string {
  return JSON.stringify(state, null, 2);
}

export function importState(json: string): ProgressState | null {
  try {
    return reconcile(JSON.parse(json));
  } catch {
    return null;
  }
}
