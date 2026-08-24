"use client";

import { useState } from "react";
import type { ReferenceSheet } from "@/lib/content/reference";
import { Blocks } from "./blocks";
import { IconTable } from "./icons";

/* ------------------------------------------------------------------ */
/*  Reference browser — sheet picker + rendered tables.                */
/* ------------------------------------------------------------------ */

export function ReferenceBrowser({ sheets }: { sheets: ReferenceSheet[] }) {
  const [activeId, setActiveId] = useState(sheets[0].id);
  const active = sheets.find((s) => s.id === activeId) ?? sheets[0];

  return (
    <div className="space-y-7">
      <header>
        <p className="text-[0.75rem] font-bold uppercase tracking-[0.11em] text-[var(--brand-strong)]">
          Consulta
        </p>
        <h1 className="mt-1.5 font-[family-name:var(--font-display)] text-[2.25rem] leading-tight font-semibold tracking-tight text-[var(--fg-strong)]">
          Referência rápida
        </h1>
        <p className="mt-2 max-w-2xl text-[1.0625rem] leading-relaxed text-[var(--fg-muted)]">
          Sem exercício, sem progresso — só as tabelas para você abrir no meio
          de um e-mail e resolver a dúvida em cinco segundos.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[15rem_1fr]">
        {/* Sheet picker. `min-w-0` is required: a grid item defaults to
            `min-width: auto`, which lets the horizontally-scrolling <ul>
            stretch the whole track and break the page layout on mobile. */}
        <nav className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {sheets.map((s) => {
              const on = s.id === activeId;
              return (
                <li key={s.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => setActiveId(s.id)}
                    className="flex w-full items-center gap-2.5 rounded-[var(--radius-md)] border px-3 py-2.5 text-left transition-colors"
                    style={{
                      borderColor: on ? "var(--brand)" : "transparent",
                      background: on ? "var(--brand-bg)" : "transparent",
                      color: on ? "var(--fg-strong)" : "var(--fg-muted)",
                    }}
                  >
                    <IconTable
                      className="h-4 w-4 shrink-0"
                      style={{ color: on ? "var(--brand)" : "var(--fg-faint)" }}
                    />
                    <span className="whitespace-nowrap text-[0.9375rem] font-medium lg:whitespace-normal">
                      {s.titlePt}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* sheet body */}
        <section key={active.id} className="min-w-0 animate-[var(--animate-rise)]">
          <div className="mb-5">
            <h2 className="font-[family-name:var(--font-display)] text-[1.625rem] font-semibold tracking-tight text-[var(--fg-strong)]">
              {active.titlePt}
            </h2>
            <p className="en text-[0.875rem] text-[var(--fg-faint)]">{active.title}</p>
            <p className="mt-1.5 text-[0.9375rem] text-[var(--fg-muted)]">
              {active.blurb}
            </p>
          </div>
          <Blocks blocks={active.blocks} />
        </section>
      </div>
    </div>
  );
}
