import type { ProgressState } from "./types";
import { STORAGE_KEY, createInitialState, load, save } from "./progress";

/* ------------------------------------------------------------------ */
/*  External store for progress.                                       */
/*                                                                     */
/*  localStorage is an external system, so React's own primitive for   */
/*  it is `useSyncExternalStore` — not `useState` + `useEffect`. This  */
/*  gives us correct hydration, no cascading renders, and multi-tab    */
/*  sync for free.                                                     */
/* ------------------------------------------------------------------ */

/** Stable object returned during SSR and the hydration render. */
const SERVER_SNAPSHOT: ProgressState = Object.freeze(createInitialState());

let snapshot: ProgressState | null = null;
const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);

  // First subscriber wires up cross-tab sync.
  if (listeners.size === 1 && typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

function onStorage(e: StorageEvent) {
  if (e.key !== STORAGE_KEY) return;
  snapshot = load();
  emit();
}

export function getSnapshot(): ProgressState {
  // Must be referentially stable between renders when nothing changed,
  // otherwise React loops forever.
  if (snapshot === null) snapshot = load();
  return snapshot;
}

export function getServerSnapshot(): ProgressState {
  return SERVER_SNAPSHOT;
}

/** Apply a pure updater, persist, and notify subscribers. */
export function update(fn: (prev: ProgressState) => ProgressState): void {
  const next = fn(getSnapshot());
  if (next === snapshot) return;
  snapshot = next;
  save(next);
  emit();
}

/** Replace the whole state (import / reset). */
export function replaceState(next: ProgressState): void {
  snapshot = next;
  save(next);
  emit();
}

/** True once we're running on the client past hydration. */
export function subscribeHydration(listener: () => void): () => void {
  // Hydration status never changes after mount, so nothing to subscribe to.
  void listener;
  return () => {};
}

export const getHydrated = () => true;
export const getHydratedServer = () => false;
