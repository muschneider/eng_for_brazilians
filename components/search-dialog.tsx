"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { searchLessons } from "@/lib/content";
import { IconArrowRight, IconSearch } from "./icons";

/* ------------------------------------------------------------------ */
/*  Command-palette style search over all lesson content.              */
/*  Pure client-side: the whole index ships in the bundle.             */
/* ------------------------------------------------------------------ */

/** Mounted only while open (see `SiteNav`), so state needs no resetting. */
export function SearchDialog({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [rawCursor, setCursor] = useState(0);

  const hits = useMemo(() => searchLessons(query, 10), [query]);
  // Clamp during render instead of resetting from an effect.
  const cursor = Math.min(rawCursor, Math.max(0, hits.length - 1));

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setCursor((c) => Math.min(c + 1, Math.max(0, hits.length - 1)));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setCursor((c) => Math.max(0, c - 1));
      } else if (e.key === "Enter" && hits[cursor]) {
        e.preventDefault();
        router.push(`/lessons/${hits[cursor].lesson.id}`);
        onClose();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hits, cursor, router, onClose]);

  // Lock background scroll while the palette is up.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[10vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Buscar no curso"
    >
      <button
        type="button"
        aria-label="Fechar busca"
        onClick={onClose}
        className="absolute inset-0 bg-[color-mix(in_oklab,var(--bg-deep)_78%,transparent)] backdrop-blur-sm"
      />

      <div className="surface-card relative w-full max-w-xl animate-[var(--animate-pop)] overflow-hidden">
        <div className="flex items-center gap-3 border-b border-[var(--line-soft)] px-4">
          <IconSearch className="h-4.5 w-4.5 shrink-0 text-[var(--fg-faint)]" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar lição, regra, palavra…"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            className="w-full bg-transparent py-4 text-[1.0625rem] text-[var(--fg-strong)] outline-none placeholder:text-[var(--fg-faint)]"
          />
          <kbd className="en shrink-0 rounded border border-[var(--line)] px-1.5 py-0.5 text-[0.75rem] text-[var(--fg-faint)]">
            esc
          </kbd>
        </div>

        <div className="max-h-[52vh] overflow-y-auto p-2">
          {query.trim().length < 2 && (
            <div className="px-3 py-8 text-center">
              <p className="text-[0.875rem] text-[var(--fg-muted)]">
                Digite pelo menos duas letras.
              </p>
              <p className="mt-3 text-[0.8125rem] text-[var(--fg-faint)]">
                Tente: <span className="en">present perfect</span> ·{" "}
                <span className="en">artigos</span> ·{" "}
                <span className="en">phrasal</span> ·{" "}
                <span className="en">preposições</span>
              </p>
            </div>
          )}

          {query.trim().length >= 2 && hits.length === 0 && (
            <p className="px-3 py-8 text-center text-[0.875rem] text-[var(--fg-muted)]">
              Nada encontrado para{" "}
              <span className="en text-[var(--fg-strong)]">{query}</span>.
            </p>
          )}

          {hits.map((hit, i) => (
            <button
              key={hit.lesson.id}
              type="button"
              onMouseEnter={() => setCursor(i)}
              onClick={() => {
                router.push(`/lessons/${hit.lesson.id}`);
                onClose();
              }}
              className="flex w-full items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-left transition-colors"
              style={{
                background: i === cursor ? "var(--surface-3)" : "transparent",
              }}
            >
              <span className="tabular grid h-8 w-9 shrink-0 place-items-center rounded-md bg-[var(--brand-bg)] text-[0.8125rem] font-bold text-[var(--brand-strong)]">
                {hit.lesson.number}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[0.9375rem] font-medium text-[var(--fg-strong)]">
                  {hit.lesson.titlePt}
                </span>
                <span className="block truncate text-[0.8125rem] text-[var(--fg-muted)]">
                  {hit.module.titlePt} · {hit.lesson.title}
                </span>
              </span>
              {i === cursor && (
                <IconArrowRight className="h-4 w-4 shrink-0 text-[var(--brand)]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
