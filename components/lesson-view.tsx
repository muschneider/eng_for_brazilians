"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Lesson, ModuleIcon } from "@/lib/types";
import { Blocks } from "./blocks";
import { ExerciseSession, type SessionItem } from "./exercise-session";
import { useProgress } from "./progress-provider";
import { XP_LESSON_PERFECT, XP_LESSON_READ } from "@/lib/progress";
import { PriorityTag } from "./ui";
import {
  MODULE_ICONS,
  IconArrowLeft,
  IconArrowRight,
  IconBook,
  IconCheck,
  IconTarget,
} from "./icons";

type Neighbor = { id: string; title: string } | null;

interface Props {
  lesson: Lesson;
  moduleTitle: string;
  moduleIcon: ModuleIcon;
  prev: Neighbor;
  next: Neighbor;
}

export function LessonView({
  lesson,
  moduleTitle,
  moduleIcon,
  prev,
  next,
}: Props) {
  const { state, patchLesson, addXp } = useProgress();
  const [tab, setTab] = useState<"read" | "practice">("read");

  const record = state.lessons[lesson.id];
  const Icon = MODULE_ICONS[moduleIcon];

  // Mark as "reading" the first time the lesson is opened, and grant the
  // one-off reading XP. Guarded so re-visits don't farm XP.
  useEffect(() => {
    if (record?.status && record.status !== "new") return;
    patchLesson(lesson.id, { status: "reading" });
    addXp(XP_LESSON_READ);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id]);

  const items = useMemo<SessionItem[]>(
    () => lesson.exercises.map((exercise) => ({ exercise, lessonId: lesson.id })),
    [lesson],
  );

  const onFinish = useCallback(
    (score: number) => {
      const prevBest = state.lessons[lesson.id]?.bestScore ?? 0;
      const runs = (state.lessons[lesson.id]?.runs ?? 0) + 1;
      const wasDone = state.lessons[lesson.id]?.status === "done";
      const nowDone = score >= 70;

      patchLesson(lesson.id, {
        bestScore: Math.max(prevBest, score),
        runs,
        status: nowDone ? "done" : "practicing",
        completed:
          nowDone && !wasDone
            ? Date.now()
            : state.lessons[lesson.id]?.completed,
      });

      if (score === 100 && prevBest < 100) addXp(XP_LESSON_PERFECT);
    },
    [lesson.id, patchLesson, addXp, state.lessons],
  );

  return (
    <article className="mx-auto w-full max-w-3xl">
      {/* --------------------------- breadcrumb -------------------------- */}
      <nav className="mb-5 flex items-center gap-2 text-[0.875rem] text-[var(--fg-faint)]">
        <Link href="/lessons" className="transition-colors hover:text-[var(--brand)]">
          Lições
        </Link>
        <span aria-hidden>/</span>
        <span className="flex items-center gap-1.5 text-[var(--fg-muted)]">
          <Icon className="h-3.5 w-3.5" />
          {moduleTitle}
        </span>
      </nav>

      {/* ----------------------------- header ---------------------------- */}
      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="tabular rounded-md bg-[var(--brand-bg)] px-2 py-1 text-[0.8125rem] font-bold text-[var(--brand-strong)]">
            {lesson.number}
          </span>
          <PriorityTag priority={lesson.priority} />
          {record?.status === "done" && (
            <span className="flex items-center gap-1 rounded-full bg-[var(--good-bg)] px-2 py-0.5 text-[0.75rem] font-bold uppercase tracking-[0.07em] text-[var(--good)]">
              <IconCheck className="h-3 w-3" strokeWidth={3} />
              Concluída
            </span>
          )}
        </div>

        <h1 className="mt-3 font-[family-name:var(--font-display)] text-[2.25rem] leading-[1.15] font-semibold tracking-tight text-[var(--fg-strong)] sm:text-[2.625rem]">
          {lesson.titlePt}
        </h1>
        <p className="en mt-1 text-[1.0625rem] text-[var(--fg-faint)]">
          {lesson.title}
        </p>
        <p className="mt-3 text-[1.125rem] leading-relaxed text-[var(--fg-muted)]">
          {lesson.summary}
        </p>
      </header>

      {/* ------------------------------ tabs ----------------------------- */}
      <div className="sticky top-14 z-30 -mx-4 mb-6 border-b border-[var(--line-soft)] bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] px-4 backdrop-blur-xl sm:mx-0 sm:px-0">
        <div className="flex gap-1">
          {(
            [
              { id: "read", label: "Lição", Icon: IconBook, meta: `${lesson.blocks.length} blocos` },
              {
                id: "practice",
                label: "Exercícios",
                Icon: IconTarget,
                meta: `${lesson.exercises.length}`,
              },
            ] as const
          ).map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className="relative flex items-center gap-2 px-3.5 py-3 text-[0.9375rem] font-medium transition-colors"
                style={{ color: active ? "var(--fg-strong)" : "var(--fg-muted)" }}
              >
                <t.Icon className="h-4 w-4" />
                {t.label}
                <span
                  className="tabular rounded-full px-1.5 py-px text-[0.75rem]"
                  style={{
                    background: active ? "var(--brand-bg)" : "var(--surface-3)",
                    color: active ? "var(--brand-strong)" : "var(--fg-faint)",
                  }}
                >
                  {t.meta}
                </span>
                {active && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[var(--brand)]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ---------------------------- content ---------------------------- */}
      {tab === "read" ? (
        <>
          <Blocks blocks={lesson.blocks} />

          <div className="mt-10 rounded-[var(--radius-xl)] border border-[var(--brand)] bg-[var(--brand-bg)] p-6 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-[1.375rem] font-semibold text-[var(--fg-strong)]">
              Agora fixe o conteúdo
            </h2>
            <p className="mx-auto mt-1.5 max-w-md text-[0.9375rem] leading-relaxed text-[var(--fg-muted)]">
              {lesson.exercises.length} exercícios com correção imediata. Errar
              aqui é barato — errar numa reunião não é.
            </p>
            <button
              type="button"
              onClick={() => {
                setTab("practice");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="btn btn-primary mt-5"
            >
              Começar exercícios
              <IconArrowRight className="h-4 w-4" />
            </button>
          </div>
        </>
      ) : (
        <ExerciseSession
          items={items}
          title={lesson.titlePt}
          backHref="/lessons"
          backLabel="Voltar às lições"
          onFinish={onFinish}
          resultsExtra={
            next ? (
              <p className="mt-5 border-t border-[var(--line-soft)] pt-5 text-[0.875rem] text-[var(--fg-muted)]">
                Próxima:{" "}
                <Link
                  href={`/lessons/${next.id}`}
                  className="font-semibold text-[var(--brand-strong)] hover:underline"
                >
                  {next.title}
                </Link>
              </p>
            ) : null
          }
        />
      )}

      {/* ---------------------------- pager ------------------------------ */}
      {tab === "read" && (
        <nav className="mt-10 grid gap-3 border-t border-[var(--line-soft)] pt-6 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/lessons/${prev.id}`}
              className="surface-card group flex items-center gap-3 p-4 transition-colors hover:border-[var(--brand)]"
            >
              <IconArrowLeft className="h-4 w-4 shrink-0 text-[var(--fg-faint)] transition-colors group-hover:text-[var(--brand)]" />
              <span className="min-w-0">
                <span className="block text-[0.75rem] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
                  Anterior
                </span>
                <span className="block truncate text-[0.9375rem] font-medium text-[var(--fg-strong)]">
                  {prev.title}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/lessons/${next.id}`}
              className="surface-card group flex items-center justify-end gap-3 p-4 text-right transition-colors hover:border-[var(--brand)]"
            >
              <span className="min-w-0">
                <span className="block text-[0.75rem] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
                  Próxima
                </span>
                <span className="block truncate text-[0.9375rem] font-medium text-[var(--fg-strong)]">
                  {next.title}
                </span>
              </span>
              <IconArrowRight className="h-4 w-4 shrink-0 text-[var(--fg-faint)] transition-colors group-hover:text-[var(--brand)]" />
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
