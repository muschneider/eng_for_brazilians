"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { exerciseIndex, lessons } from "@/lib/content";
import { useProgress } from "./progress-provider";
import { dueExerciseKeys, weakExerciseKeys } from "@/lib/progress";
import { seededShuffle } from "@/lib/answer";
import { ExerciseSession, type SessionItem } from "./exercise-session";
import {
  IconArrowRight,
  IconBolt,
  IconCheck,
  IconRepeat,
  IconSparkle,
  IconTarget,
  IconX,
} from "./icons";

/* ------------------------------------------------------------------ */
/*  Practice hub — three ways to drill.                                */
/* ------------------------------------------------------------------ */

type Mode = "due" | "weak" | "random" | null;

const MAX_ITEMS = 20;

export function PracticeHub() {
  const { state, ready } = useProgress();
  const [mode, setMode] = useState<Mode>(null);
  /** Regenerated on each "prática livre" click so the shuffle differs. */
  const [shuffleSeed, setShuffleSeed] = useState("0");

  const dueKeys = useMemo(() => (ready ? dueExerciseKeys(state) : []), [ready, state]);
  const weakKeys = useMemo(() => (ready ? weakExerciseKeys(state) : []), [ready, state]);

  const allKeys = useMemo(() => [...exerciseIndex.keys()], []);

  const seenCount = Object.keys(state.exercises).length;
  const masteredCount = Object.values(state.exercises).filter(
    (e) => e.box >= 4,
  ).length;

  function buildItems(keys: string[]): SessionItem[] {
    const out: SessionItem[] = [];
    for (const key of keys) {
      if (out.length >= MAX_ITEMS) break;
      const entry = exerciseIndex.get(key);
      if (!entry) continue;
      out.push({
        exercise: entry.exercise,
        lessonId: entry.lesson.id,
        lessonTitle: entry.lesson.titlePt,
        lessonSlug: entry.lesson.id,
      });
    }
    return out;
  }

  const items = useMemo<SessionItem[]>(() => {
    if (mode === "due") return buildItems(dueKeys);
    if (mode === "weak") return buildItems(weakKeys);
    if (mode === "random")
      return buildItems(seededShuffle(allKeys, shuffleSeed));
    return [];
  }, [mode, dueKeys, weakKeys, allKeys, shuffleSeed]);

  if (mode && items.length > 0) {
    const title =
      mode === "due"
        ? "Revisão programada"
        : mode === "weak"
          ? "Seus pontos fracos"
          : "Prática livre";
    return (
      <div className="pt-4">
        <ExerciseSession
          key={mode}
          items={items}
          title={title}
          backHref="/practice"
          backLabel="Voltar à revisão"
        />
      </div>
    );
  }

  const cards = [
    {
      id: "due" as const,
      title: "Revisão programada",
      desc: "Itens que o algoritmo de repetição espaçada agendou para hoje. Este é o botão que faz o conteúdo grudar.",
      count: dueKeys.length,
      Icon: IconRepeat,
      color: "var(--brand)",
      bg: "var(--brand-bg)",
      empty: "Nada agendado para hoje. Faça uma lição nova ou pratique à toa.",
    },
    {
      id: "weak" as const,
      title: "Pontos fracos",
      desc: "Exercícios em que sua última resposta foi errada, ordenados pelos que você mais erra.",
      count: weakKeys.length,
      Icon: IconTarget,
      color: "var(--bad)",
      bg: "var(--bad-bg)",
      empty: "Nenhum erro pendente. Bom sinal.",
    },
    {
      id: "random" as const,
      title: "Prática livre",
      desc: "20 exercícios aleatórios de todo o curso, incluindo lições que você ainda não abriu.",
      count: allKeys.length,
      Icon: IconSparkle,
      color: "var(--color-flame-500)",
      bg: "color-mix(in oklab, var(--color-flame-500) 14%, transparent)",
      empty: "",
    },
  ];

  return (
    <div className="space-y-8">
      <header>
        <p className="text-[0.75rem] font-bold uppercase tracking-[0.11em] text-[var(--brand-strong)]">
          Repetição espaçada
        </p>
        <h1 className="mt-1.5 font-[family-name:var(--font-display)] text-[2.25rem] leading-tight font-semibold tracking-tight text-[var(--fg-strong)]">
          Revisão
        </h1>
        <p className="mt-2 max-w-2xl text-[1.0625rem] leading-relaxed text-[var(--fg-muted)]">
          Cada exercício vive numa caixa. Acertou, sobe de caixa e volta mais
          tarde. Errou, desce e volta logo. É assim que o conteúdo sai da
          memória de curto prazo.
        </p>
      </header>

      <div className="grid gap-3 sm:grid-cols-3">
        {cards.map((c) => {
          const disabled = c.count === 0;
          return (
            <button
              key={c.id}
              type="button"
              disabled={disabled}
              onClick={() => {
                if (c.id === "random") setShuffleSeed(String(Date.now()));
                setMode(c.id);
              }}
              className="surface-card group flex flex-col items-start p-5 text-left transition-colors enabled:hover:border-[var(--brand)] disabled:cursor-not-allowed disabled:opacity-55"
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)]"
                style={{ background: c.bg, color: c.color }}
              >
                <c.Icon className="h-[22px] w-[22px]" />
              </span>
              <h2 className="mt-3.5 font-[family-name:var(--font-display)] text-[1.25rem] font-semibold text-[var(--fg-strong)]">
                {c.title}
              </h2>
              <p className="mt-1.5 flex-1 text-[0.875rem] leading-relaxed text-[var(--fg-muted)]">
                {disabled && c.empty ? c.empty : c.desc}
              </p>
              <span className="mt-4 flex w-full items-center justify-between">
                <span
                  className="tabular text-[0.875rem] font-semibold"
                  style={{ color: c.color }}
                >
                  {disabled
                    ? "—"
                    : `${Math.min(c.count, MAX_ITEMS)} ${
                        Math.min(c.count, MAX_ITEMS) === 1 ? "exercício" : "exercícios"
                      }`}
                </span>
                {!disabled && (
                  <IconArrowRight className="h-4 w-4 text-[var(--fg-faint)] transition-colors group-hover:text-[var(--brand)]" />
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* ---------------------------- box map ----------------------------- */}
      {seenCount > 0 && (
        <section>
          <h2 className="mb-3 font-[family-name:var(--font-display)] text-[1.375rem] font-semibold text-[var(--fg-strong)]">
            Estado da sua memória
          </h2>
          <div className="surface-card p-5">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.875rem]">
              <span className="flex items-center gap-2">
                <IconCheck className="h-4 w-4 text-[var(--good)]" />
                <span className="tabular font-semibold text-[var(--fg-strong)]">
                  {masteredCount}
                </span>
                <span className="text-[var(--fg-muted)]">dominados</span>
              </span>
              <span className="flex items-center gap-2">
                <IconBolt className="h-4 w-4 text-[var(--brand)]" />
                <span className="tabular font-semibold text-[var(--fg-strong)]">
                  {seenCount}
                </span>
                <span className="text-[var(--fg-muted)]">vistos</span>
              </span>
              <span className="flex items-center gap-2">
                <IconX className="h-4 w-4 text-[var(--bad)]" />
                <span className="tabular font-semibold text-[var(--fg-strong)]">
                  {weakKeys.length}
                </span>
                <span className="text-[var(--fg-muted)]">com erro pendente</span>
              </span>
            </div>

            <div className="mt-5 grid grid-cols-6 gap-2">
              {[0, 1, 2, 3, 4, 5].map((box) => {
                const n = Object.values(state.exercises).filter(
                  (e) => e.box === box,
                ).length;
                const pct = seenCount > 0 ? (n / seenCount) * 100 : 0;
                return (
                  <div key={box}>
                    <div className="flex h-20 items-end">
                      <div
                        className="w-full rounded-t-md transition-[height] duration-500"
                        style={{
                          height: `${Math.max(3, pct)}%`,
                          background:
                            box >= 4
                              ? "var(--good)"
                              : box >= 2
                                ? "var(--brand)"
                                : "var(--warn)",
                          opacity: n === 0 ? 0.2 : 1,
                        }}
                      />
                    </div>
                    <p className="tabular mt-1.5 text-center text-[0.75rem] font-semibold text-[var(--fg-muted)]">
                      {n}
                    </p>
                    <p className="text-center text-[0.6875rem] text-[var(--fg-faint)]">
                      cx {box}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-[0.8125rem] text-[var(--fg-faint)]">
              Caixa 0 volta hoje · caixa 5 volta em 16 dias. Quanto mais à
              direita, mais consolidado.
            </p>
          </div>
        </section>
      )}

      {seenCount === 0 && (
        <div className="surface-card p-8 text-center">
          <p className="text-[1.0625rem] text-[var(--fg-muted)]">
            Você ainda não respondeu nenhum exercício. A revisão se enche
            sozinha conforme você estuda.
          </p>
          <Link href={`/lessons/${lessons[0].id}`} className="btn btn-primary mt-4">
            Começar a primeira lição
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
