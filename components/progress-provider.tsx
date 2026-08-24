"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { LessonRecord, ProgressState } from "@/lib/types";
import {
  createInitialState,
  grantXp,
  recordAnswer,
  updateLesson,
} from "@/lib/progress";
import {
  getHydrated,
  getHydratedServer,
  getServerSnapshot,
  getSnapshot,
  replaceState,
  subscribe,
  subscribeHydration,
  update,
} from "@/lib/store";

interface ProgressContextValue {
  state: ProgressState;
  /** False during SSR and the hydration render — guard client-only UI with it. */
  ready: boolean;
  addXp: (amount: number) => void;
  answer: (
    lessonId: string,
    exerciseId: string,
    correct: boolean,
    xp?: number,
  ) => void;
  patchLesson: (lessonId: string, patch: Partial<LessonRecord>) => void;
  setSettings: (patch: Partial<ProgressState["settings"]>) => void;
  replace: (next: ProgressState) => void;
  reset: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ready = useSyncExternalStore(
    subscribeHydration,
    getHydrated,
    getHydratedServer,
  );

  // Reflect the theme choice on <html> for the CSS variable swap.
  // This is a genuine external-system sync, which is what effects are for.
  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = state.settings.theme;
  }, [ready, state.settings.theme]);

  const addXp = useCallback((amount: number) => {
    update((s) => grantXp(s, amount));
  }, []);

  const answer = useCallback(
    (lessonId: string, exerciseId: string, correct: boolean, xp = 0) => {
      update((s) => {
        const next = recordAnswer(s, lessonId, exerciseId, correct);
        return xp > 0 ? grantXp(next, xp) : next;
      });
    },
    [],
  );

  const patchLesson = useCallback(
    (lessonId: string, patch: Partial<LessonRecord>) => {
      update((s) => updateLesson(s, lessonId, patch));
    },
    [],
  );

  const setSettings = useCallback(
    (patch: Partial<ProgressState["settings"]>) => {
      update((s) => ({ ...s, settings: { ...s.settings, ...patch } }));
    },
    [],
  );

  const replace = useCallback((next: ProgressState) => replaceState(next), []);

  const reset = useCallback(() => replaceState(createInitialState()), []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      state,
      ready,
      addXp,
      answer,
      patchLesson,
      setSettings,
      replace,
      reset,
    }),
    [state, ready, addXp, answer, patchLesson, setSettings, replace, reset],
  );

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside <ProgressProvider>");
  return ctx;
}
