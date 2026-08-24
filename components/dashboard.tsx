"use client";

import Link from "next/link";
import { useMemo } from "react";
import { lessons, modules, totalExercises } from "@/lib/content";
import { useProgress } from "./progress-provider";
import {
  dueExerciseKeys,
  levelFromXp,
  today,
  weekActivity,
} from "@/lib/progress";
import { MODULE_ICONS, IconArrowRight, IconBolt, IconFlame, IconRepeat, IconTarget } from "./icons";
import { PriorityTag, Ring, SectionTitle } from "./ui";

/* ------------------------------------------------------------------ */
/*  Dashboard — the "where was I" screen.                              */
/* ------------------------------------------------------------------ */

export function Dashboard() {
  const { state, ready } = useProgress();

  const done = useMemo(
    () =>
      lessons.filter((l) => state.lessons[l.id]?.status === "done").length,
    [state.lessons],
  );

  const answered = useMemo(
    () => Object.keys(state.exercises).length,
    [state.exercises],
  );

  const mastered = useMemo(
    () => Object.values(state.exercises).filter((e) => e.box >= 4).length,
    [state.exercises],
  );

  const due = useMemo(() => (ready ? dueExerciseKeys(state) : []), [ready, state]);

  /** First lesson that isn't finished — the natural "continue" target. */
  const nextLesson = useMemo(
    () =>
      lessons.find((l) => state.lessons[l.id]?.status !== "done") ?? lessons[0],
    [state.lessons],
  );

  const level = levelFromXp(state.xp);
  const week = useMemo(() => weekActivity(state), [state]);
  const todayXp = state.daily[today()] ?? 0;
  const goal = state.settings.dailyGoal;
  const goalPct = Math.min(100, (todayXp / goal) * 100);
  const coursePct = (done / lessons.length) * 100;
  const isNew = ready && answered === 0 && done === 0;
  const maxWeek = Math.max(goal, ...week.map((w) => w.xp), 1);

  return (
    <div className="space-y-10">
      {/* ------------------------------- hero ------------------------------ */}
      <section className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] sm:p-9">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--brand) 55%, transparent), transparent 70%)",
          }}
        />
        <div className="relative">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--brand-strong)]">
            {isNew ? "Comece por aqui" : `Nível ${level.level} · ${level.label}`}
          </p>
          <h1 className="mt-2 max-w-2xl font-[family-name:var(--font-display)] text-[2rem] leading-[1.12] font-semibold tracking-tight text-[var(--fg-strong)] sm:text-[2.75rem]">
            {isNew ? (
              <>
                Inglês que você <span className="text-gradient">usa</span>, não
                inglês que você decora.
              </>
            ) : (
              <>Continue de onde você parou.</>
            )}
          </h1>
          <p className="mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-[var(--fg-muted)]">
            {isNew
              ? `${lessons.length} lições e ${totalExercises} exercícios corrigidos na hora, feitos para os erros que falantes de português realmente cometem.`
              : `Você concluiu ${done} de ${lessons.length} lições e respondeu ${answered} exercícios.`}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href={`/lessons/${nextLesson.id}`} className="btn btn-primary">
              {isNew ? "Começar a primeira lição" : "Continuar"}
              <IconArrowRight className="h-4 w-4" />
            </Link>
            {due.length > 0 && (
              <Link href="/practice" className="btn btn-soft">
                <IconRepeat className="h-4 w-4" />
                Revisar {due.length} {due.length === 1 ? "item" : "itens"}
              </Link>
            )}
            {isNew && (
              <Link href="/lessons" className="btn btn-ghost">
                Ver todas as lições
              </Link>
            )}
          </div>

          {!isNew && (
            <div className="mt-7 max-w-md">
              <div className="mb-1.5 flex items-center justify-between text-[0.8125rem]">
                <span className="text-[var(--fg-muted)]">Progresso do curso</span>
                <span className="tabular font-semibold text-[var(--fg-strong)]">
                  {Math.round(coursePct)}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--surface-3)]">
                <div
                  className="h-full rounded-full transition-[width] duration-500"
                  style={{
                    width: `${coursePct}%`,
                    background:
                      "linear-gradient(90deg, var(--brand) 0%, var(--color-flame-400) 100%)",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------ stats ------------------------------ */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="surface-card flex items-center gap-4 p-4">
          <Ring value={goalPct} size={52} color="var(--brand)">
            <IconTarget className="h-5 w-5 text-[var(--brand)]" />
          </Ring>
          <div className="min-w-0">
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[var(--fg-faint)]">
              Meta de hoje
            </p>
            <p className="tabular mt-0.5 text-[1.3125rem] font-semibold text-[var(--fg-strong)]">
              {todayXp}
              <span className="text-[0.875rem] font-normal text-[var(--fg-muted)]">
                {" "}
                / {goal} XP
              </span>
            </p>
          </div>
        </div>

        <div className="surface-card flex items-center gap-4 p-4">
          <span className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full bg-[color-mix(in_oklab,var(--color-flame-500)_16%,transparent)]">
            <IconFlame
              className="h-6 w-6"
              style={{
                color:
                  state.streak.current > 0
                    ? "var(--color-flame-500)"
                    : "var(--fg-faint)",
              }}
            />
          </span>
          <div className="min-w-0">
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[var(--fg-faint)]">
              Sequência
            </p>
            <p className="tabular mt-0.5 text-[1.3125rem] font-semibold text-[var(--fg-strong)]">
              {state.streak.current}
              <span className="text-[0.875rem] font-normal text-[var(--fg-muted)]">
                {" "}
                {state.streak.current === 1 ? "dia" : "dias"}
              </span>
            </p>
          </div>
        </div>

        <div className="surface-card flex items-center gap-4 p-4">
          <Ring
            value={(mastered / Math.max(1, totalExercises)) * 100}
            size={52}
            color="var(--good)"
          >
            <span className="tabular text-[0.8125rem] font-bold text-[var(--good)]">
              {Math.round((mastered / Math.max(1, totalExercises)) * 100)}
            </span>
          </Ring>
          <div className="min-w-0">
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[var(--fg-faint)]">
              Dominados
            </p>
            <p className="tabular mt-0.5 text-[1.3125rem] font-semibold text-[var(--fg-strong)]">
              {mastered}
              <span className="text-[0.875rem] font-normal text-[var(--fg-muted)]">
                {" "}
                / {totalExercises}
              </span>
            </p>
          </div>
        </div>

        <div className="surface-card flex items-center gap-4 p-4">
          <span className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full bg-[var(--brand-bg)]">
            <IconBolt className="h-6 w-6 text-[var(--brand)]" />
          </span>
          <div className="min-w-0">
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[var(--fg-faint)]">
              XP total
            </p>
            <p className="tabular mt-0.5 text-[1.3125rem] font-semibold text-[var(--fg-strong)]">
              {state.xp}
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------- week ------------------------------ */}
      {!isNew && (
        <section>
          <SectionTitle
            eyebrow="Últimos 7 dias"
            title="Constância"
            action={
              <Link
                href="/progress"
                className="text-[0.875rem] text-[var(--fg-muted)] transition-colors hover:text-[var(--brand)]"
              >
                Ver detalhes →
              </Link>
            }
          />
          <div className="surface-card flex items-end justify-between gap-2 p-5 pt-8">
            {week.map((d, i) => {
              const h = Math.max(4, (d.xp / maxWeek) * 100);
              const hit = d.xp >= goal;
              return (
                <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                  <div className="relative flex h-24 w-full items-end justify-center">
                    <div
                      className="w-full max-w-[2.5rem] rounded-t-md transition-[height] duration-500"
                      style={{
                        height: `${h}%`,
                        background: hit
                          ? "linear-gradient(180deg, var(--brand) 0%, color-mix(in oklab, var(--brand) 55%, transparent) 100%)"
                          : d.xp > 0
                            ? "var(--surface-3)"
                            : "color-mix(in oklab, var(--line-soft) 60%, transparent)",
                      }}
                    />
                    {d.xp > 0 && (
                      <span className="tabular absolute -top-5 text-[0.75rem] font-semibold text-[var(--fg-muted)]">
                        {d.xp}
                      </span>
                    )}
                  </div>
                  <span
                    className="text-[0.75rem] font-medium"
                    style={{
                      color:
                        i === week.length - 1
                          ? "var(--fg-strong)"
                          : "var(--fg-faint)",
                    }}
                  >
                    {d.label}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ------------------------------ modules ---------------------------- */}
      <section>
        <SectionTitle
          eyebrow={`${modules.length} módulos · ${lessons.length} lições`}
          title="Trilha completa"
          action={
            <Link
              href="/lessons"
              className="text-[0.875rem] text-[var(--fg-muted)] transition-colors hover:text-[var(--brand)]"
            >
              Ver tudo →
            </Link>
          }
        />
        <div className="grid gap-3 md:grid-cols-2">
          {modules.map((m) => {
            const Icon = MODULE_ICONS[m.icon];
            const total = m.lessons.length;
            const finished = m.lessons.filter(
              (l) => state.lessons[l.id]?.status === "done",
            ).length;
            const pct = (finished / total) * 100;
            const first =
              m.lessons.find((l) => state.lessons[l.id]?.status !== "done") ??
              m.lessons[0];

            return (
              <Link
                key={m.id}
                href={`/lessons/${first.id}`}
                className="surface-card group flex gap-4 p-5 transition-colors hover:border-[var(--brand)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-md)] bg-[var(--brand-bg)] text-[var(--brand-strong)]">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-display)] text-[1.1875rem] font-semibold text-[var(--fg-strong)]">
                        {m.titlePt}
                      </h3>
                      <p className="text-[0.8125rem] text-[var(--fg-faint)]">
                        {m.title}
                      </p>
                    </div>
                    <Ring value={pct} size={38} stroke={3.5}>
                      <span className="tabular text-[0.6875rem] font-bold text-[var(--fg-muted)]">
                        {finished}/{total}
                      </span>
                    </Ring>
                  </div>
                  <p className="mt-2 line-clamp-2 text-[0.875rem] leading-relaxed text-[var(--fg-muted)]">
                    {m.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* --------------------------- next up ------------------------------- */}
      <section>
        <SectionTitle eyebrow="Sugestão" title="Próximas lições" />
        <div className="surface-card divide-y divide-[var(--line-soft)]">
          {lessons
            .filter((l) => state.lessons[l.id]?.status !== "done")
            .slice(0, 5)
            .map((l) => {
              const rec = state.lessons[l.id];
              return (
                <Link
                  key={l.id}
                  href={`/lessons/${l.id}`}
                  className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-[var(--surface-2)]"
                >
                  <span className="tabular grid h-9 w-11 shrink-0 place-items-center rounded-md bg-[var(--surface-3)] text-[0.8125rem] font-bold text-[var(--fg-muted)]">
                    {l.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="truncate text-[0.9375rem] font-medium text-[var(--fg-strong)]">
                        {l.titlePt}
                      </span>
                      <PriorityTag priority={l.priority} compact />
                    </span>
                    <span className="mt-0.5 block truncate text-[0.8125rem] text-[var(--fg-muted)]">
                      {l.summary}
                    </span>
                  </span>
                  {rec?.bestScore ? (
                    <span className="tabular hidden shrink-0 text-[0.8125rem] text-[var(--fg-faint)] sm:block">
                      melhor {rec.bestScore}%
                    </span>
                  ) : null}
                  <IconArrowRight className="h-4 w-4 shrink-0 text-[var(--fg-faint)] transition-colors group-hover:text-[var(--brand)]" />
                </Link>
              );
            })}
        </div>
      </section>
    </div>
  );
}
