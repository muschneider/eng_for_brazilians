"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { lessons, modules } from "@/lib/content";
import type { Priority } from "@/lib/types";
import { useProgress } from "./progress-provider";
import { MODULE_ICONS, IconCheck, IconTarget } from "./icons";
import { PriorityTag, Ring } from "./ui";

/* ------------------------------------------------------------------ */
/*  Full course catalog with filtering.                                */
/* ------------------------------------------------------------------ */

type Filter = "all" | Priority | "todo" | "done";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Todas" },
  { id: "essential", label: "Essenciais" },
  { id: "useful", label: "Úteis" },
  { id: "todo", label: "Não feitas" },
  { id: "done", label: "Concluídas" },
];

export function LessonCatalog() {
  const { state } = useProgress();
  const [filter, setFilter] = useState<Filter>("all");

  const doneCount = useMemo(
    () => lessons.filter((l) => state.lessons[l.id]?.status === "done").length,
    [state.lessons],
  );

  function keep(lessonId: string, priority: Priority) {
    const status = state.lessons[lessonId]?.status;
    switch (filter) {
      case "all":
        return true;
      case "done":
        return status === "done";
      case "todo":
        return status !== "done";
      default:
        return priority === filter;
    }
  }

  return (
    <div className="space-y-8">
      <header>
        <p className="text-[0.75rem] font-bold uppercase tracking-[0.11em] text-[var(--brand-strong)]">
          Trilha
        </p>
        <h1 className="mt-1.5 font-[family-name:var(--font-display)] text-[2.25rem] leading-tight font-semibold tracking-tight text-[var(--fg-strong)]">
          Todas as lições
        </h1>
        <p className="mt-2 max-w-2xl text-[1.0625rem] leading-relaxed text-[var(--fg-muted)]">
          {lessons.length} lições em {modules.length} módulos. Você não precisa
          seguir na ordem — mas as lições marcadas como{" "}
          <span className="font-semibold text-[var(--bad)]">essenciais</span>{" "}
          resolvem a maior parte dos problemas de comunicação.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className="rounded-full border px-3.5 py-1.5 text-[0.875rem] font-medium transition-colors"
              style={{
                borderColor:
                  filter === f.id ? "var(--brand)" : "var(--line)",
                background:
                  filter === f.id ? "var(--brand-bg)" : "var(--surface-2)",
                color:
                  filter === f.id ? "var(--brand-strong)" : "var(--fg-muted)",
              }}
            >
              {f.label}
            </button>
          ))}
          <span className="tabular ml-auto text-[0.875rem] text-[var(--fg-faint)]">
            {doneCount}/{lessons.length} concluídas
          </span>
        </div>
      </header>

      <div className="space-y-8">
        {modules.map((m) => {
          const visible = m.lessons.filter((l) => keep(l.id, l.priority));
          if (visible.length === 0) return null;

          const Icon = MODULE_ICONS[m.icon];
          const finished = m.lessons.filter(
            (l) => state.lessons[l.id]?.status === "done",
          ).length;

          return (
            <section key={m.id}>
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-md)] bg-[var(--brand-bg)] text-[var(--brand-strong)]">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-[family-name:var(--font-display)] text-[1.3125rem] font-semibold text-[var(--fg-strong)]">
                    {m.titlePt}
                  </h2>
                  <p className="truncate text-[0.8125rem] text-[var(--fg-faint)]">
                    {m.description}
                  </p>
                </div>
                <Ring
                  value={(finished / m.lessons.length) * 100}
                  size={36}
                  stroke={3.5}
                >
                  <span className="tabular text-[0.6875rem] font-bold text-[var(--fg-muted)]">
                    {finished}/{m.lessons.length}
                  </span>
                </Ring>
              </div>

              <ul className="surface-card divide-y divide-[var(--line-soft)] overflow-hidden">
                {visible.map((l) => {
                  const rec = state.lessons[l.id];
                  const isDone = rec?.status === "done";
                  const started = rec && rec.status !== "new";
                  return (
                    <li key={l.id}>
                      <Link
                        href={`/lessons/${l.id}`}
                        className="group flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-[var(--surface-2)] sm:px-5"
                      >
                        <span
                          className="tabular grid h-9 w-11 shrink-0 place-items-center rounded-md text-[0.8125rem] font-bold"
                          style={{
                            background: isDone
                              ? "var(--good-bg)"
                              : "var(--surface-3)",
                            color: isDone ? "var(--good)" : "var(--fg-muted)",
                          }}
                        >
                          {isDone ? (
                            <IconCheck className="h-4 w-4" strokeWidth={2.6} />
                          ) : (
                            l.number
                          )}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-2">
                            <span className="text-[0.9375rem] font-medium text-[var(--fg-strong)]">
                              {l.titlePt}
                            </span>
                            <PriorityTag priority={l.priority} compact />
                            <span className="en hidden text-[0.8125rem] text-[var(--fg-faint)] sm:inline">
                              {l.title}
                            </span>
                          </span>
                          <span className="mt-0.5 block text-[0.8125rem] leading-relaxed text-[var(--fg-muted)]">
                            {l.summary}
                          </span>
                        </span>

                        <span className="hidden shrink-0 items-center gap-3 sm:flex">
                          <span className="tabular flex items-center gap-1 text-[0.8125rem] text-[var(--fg-faint)]">
                            <IconTarget className="h-3.5 w-3.5" />
                            {l.exercises.length}
                          </span>
                          {started && rec.bestScore > 0 && (
                            <span
                              className="tabular rounded-full px-2 py-0.5 text-[0.75rem] font-bold"
                              style={{
                                background:
                                  rec.bestScore >= 80
                                    ? "var(--good-bg)"
                                    : "var(--warn-bg)",
                                color:
                                  rec.bestScore >= 80
                                    ? "var(--good)"
                                    : "var(--warn)",
                              }}
                            >
                              {rec.bestScore}%
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
