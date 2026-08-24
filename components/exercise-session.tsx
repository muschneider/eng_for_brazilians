"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Exercise } from "@/lib/types";
import { useProgress } from "./progress-provider";
import { XP_PER_CORRECT } from "@/lib/progress";
import { renderRich } from "./rich-text";
import {
  IconArrowRight,
  IconCheck,
  IconLightbulb,
  IconRotate,
  IconTrophy,
  IconX,
} from "./icons";
import {
  CategorizeView,
  ChoiceView,
  FillView,
  FixView,
  JudgeView,
  MatchView,
  OrderView,
  TranslateView,
  type ViewProps,
} from "./exercise-views";

/* ------------------------------------------------------------------ */
/*  Exercise session                                                   */
/*                                                                     */
/*  Drives a list of exercises: answer → feedback → next. Writes every */
/*  result to the progress store so the spaced-repetition queue and    */
/*  the dashboard stay in sync.                                        */
/* ------------------------------------------------------------------ */

const KIND_LABEL: Record<Exercise["kind"], string> = {
  choice: "Escolha",
  fill: "Complete",
  fix: "Corrija",
  translate: "Traduza",
  order: "Ordene",
  match: "Relacione",
  judge: "Julgue",
  categorize: "Classifique",
};

export interface SessionItem {
  exercise: Exercise;
  /** Which lesson this exercise belongs to (may differ per item in review mode). */
  lessonId: string;
  /** Shown as a small breadcrumb in review mode. */
  lessonTitle?: string;
  lessonSlug?: string;
}

interface Props {
  items: SessionItem[];
  title: string;
  /** Where "voltar" goes. */
  backHref: string;
  backLabel: string;
  /** Called once the whole run finishes, with the score 0–100. */
  onFinish?: (score: number, correct: number, total: number) => void;
  /** Extra node rendered on the results screen. */
  resultsExtra?: React.ReactNode;
}

export function ExerciseSession({
  items,
  title,
  backHref,
  backLabel,
  onFinish,
  resultsExtra,
}: Props) {
  const { answer } = useProgress();

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"answering" | "feedback" | "done">(
    "answering",
  );
  const [canSubmit, setCanSubmit] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongIds, setWrongIds] = useState<string[]>([]);

  const submitRef = useRef<(() => void) | null>(null);
  const finishedRef = useRef(false);

  const current = items[index];
  const total = items.length;

  const registerSubmit = useCallback((fn: (() => void) | null) => {
    submitRef.current = fn;
  }, []);

  const onReady = useCallback((v: boolean) => setCanSubmit(v), []);

  const onResolve = useCallback(
    (correct: boolean) => {
      setLastCorrect(correct);
      setPhase("feedback");
      if (correct) setCorrectCount((c) => c + 1);
      else
        setWrongIds((w) => [...w, `${current.lessonId}::${current.exercise.id}`]);
      answer(
        current.lessonId,
        current.exercise.id,
        correct,
        correct ? XP_PER_CORRECT : 0,
      );
    },
    [answer, current],
  );

  const submit = useCallback(() => {
    if (!canSubmit || phase !== "answering") return;
    submitRef.current?.();
  }, [canSubmit, phase]);

  const next = useCallback(() => {
    setShowHint(false);
    setCanSubmit(false);
    if (index + 1 >= total) {
      setPhase("done");
      return;
    }
    setIndex((i) => i + 1);
    setPhase("answering");
  }, [index, total]);

  // Enter submits, then advances.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Enter") return;
      const el = document.activeElement;
      const isTextarea = el instanceof HTMLTextAreaElement;
      if (isTextarea && e.shiftKey) return;
      e.preventDefault();
      if (phase === "answering") submit();
      else if (phase === "feedback") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, submit, next]);

  const score = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  useEffect(() => {
    if (phase !== "done" || finishedRef.current) return;
    finishedRef.current = true;
    onFinish?.(score, correctCount, total);
  }, [phase, score, correctCount, total, onFinish]);

  const viewProps = useMemo(
    () => ({
      locked: phase !== "answering",
      onReady,
      onResolve,
      registerSubmit,
    }),
    [phase, onReady, onResolve, registerSubmit],
  );

  if (total === 0) {
    return (
      <div className="surface-card p-8 text-center">
        <p className="text-[var(--fg-muted)]">Nada para praticar aqui.</p>
        <Link href={backHref} className="btn btn-soft mt-4">
          {backLabel}
        </Link>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <Results
        score={score}
        correct={correctCount}
        total={total}
        wrongCount={wrongIds.length}
        backHref={backHref}
        backLabel={backLabel}
        onRetry={() => {
          finishedRef.current = false;
          setIndex(0);
          setCorrectCount(0);
          setWrongIds([]);
          setPhase("answering");
          setCanSubmit(false);
        }}
        extra={resultsExtra}
      />
    );
  }

  const ex = current.exercise;
  const progressPct = (index / total) * 100;

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* progress bar */}
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between text-[0.8125rem]">
          <span className="font-medium text-[var(--fg-muted)]">{title}</span>
          <span className="tabular text-[var(--fg-faint)]">
            {index + 1} / {total}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-3)]">
          <div
            className="h-full rounded-full bg-[var(--brand)] transition-[width] duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <div className="surface-card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-[var(--line-soft)] px-5 py-3">
          <span className="rounded-full bg-[var(--brand-bg)] px-2.5 py-1 text-[0.75rem] font-bold uppercase tracking-[0.07em] text-[var(--brand-strong)]">
            {KIND_LABEL[ex.kind]}
          </span>
          {current.lessonTitle && current.lessonSlug && (
            <Link
              href={`/lessons/${current.lessonSlug}`}
              className="truncate text-[0.8125rem] text-[var(--fg-faint)] hover:text-[var(--brand)]"
            >
              {current.lessonTitle}
            </Link>
          )}
          {ex.hint && !showHint && phase === "answering" && (
            <button
              type="button"
              onClick={() => setShowHint(true)}
              className="ml-auto flex items-center gap-1.5 rounded-md px-2 py-1 text-[0.8125rem] text-[var(--fg-muted)] transition-colors hover:bg-[var(--surface-3)] hover:text-[var(--warn)]"
            >
              <IconLightbulb className="h-3.5 w-3.5" />
              Dica
            </button>
          )}
        </div>

        <div className="space-y-4 p-5">
          <p className="text-[1.0625rem] leading-relaxed font-medium text-[var(--fg-strong)]">
            {renderRich(ex.prompt, `p-${ex.id}`)}
          </p>

          {showHint && ex.hint && (
            <p className="animate-[var(--animate-rise)] rounded-[var(--radius-md)] border border-[color-mix(in_oklab,var(--warn)_30%,transparent)] bg-[var(--warn-bg)] px-3.5 py-2.5 text-[0.875rem] text-[var(--fg)]">
              {renderRich(ex.hint, `h-${ex.id}`)}
            </p>
          )}

          {/* `key` remounts the view per exercise, which resets its answer
              state without any effect-based bookkeeping. */}
          <ExerciseView key={ex.id} exercise={ex} {...viewProps} />
        </div>

        {phase === "feedback" && (
          <div
            className="animate-[var(--animate-rise)] border-t px-5 py-4"
            style={{
              borderColor: lastCorrect
                ? "color-mix(in oklab, var(--good) 30%, transparent)"
                : "color-mix(in oklab, var(--bad) 30%, transparent)",
              background: lastCorrect ? "var(--good-bg)" : "var(--bad-bg)",
            }}
          >
            <div className="flex items-start gap-3">
              <span
                className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full"
                style={{
                  background: lastCorrect ? "var(--good)" : "var(--bad)",
                  color: "var(--bg)",
                }}
              >
                {lastCorrect ? (
                  <IconCheck className="h-3.5 w-3.5" strokeWidth={3} />
                ) : (
                  <IconX className="h-3.5 w-3.5" strokeWidth={3} />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className="text-[0.875rem] font-bold"
                  style={{ color: lastCorrect ? "var(--good)" : "var(--bad)" }}
                >
                  {lastCorrect ? "Correto" : "Não é isso"}
                  {lastCorrect && (
                    <span className="ml-2 font-semibold text-[var(--fg-muted)]">
                      +{XP_PER_CORRECT} XP
                    </span>
                  )}
                </p>
                <p className="mt-1 text-[0.9375rem] leading-[1.65] text-[var(--fg)]">
                  {renderRich(ex.explanation, `e-${ex.id}`)}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3 border-t border-[var(--line-soft)] bg-[var(--surface-2)] px-5 py-3.5">
          <Link
            href={backHref}
            className="text-[0.875rem] text-[var(--fg-faint)] transition-colors hover:text-[var(--fg)]"
          >
            Sair
          </Link>
          <div className="ml-auto">
            {phase === "answering" ? (
              <button
                type="button"
                onClick={submit}
                disabled={!canSubmit}
                className="btn btn-primary min-w-[9rem]"
              >
                Verificar
              </button>
            ) : (
              <button
                type="button"
                onClick={next}
                className="btn btn-primary min-w-[9rem]"
                autoFocus
              >
                {index + 1 >= total ? "Ver resultado" : "Continuar"}
                <IconArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[0.8125rem] text-[var(--fg-faint)]">
        Dica: pressione <kbd className="en">Enter</kbd> para avançar.
      </p>
    </div>
  );
}

/* --------------------------------- switch ------------------------------- */

function ExerciseView({
  exercise,
  ...rest
}: { exercise: Exercise } & Omit<ViewProps<never>, "exercise">) {
  switch (exercise.kind) {
    case "choice":
      return <ChoiceView exercise={exercise} {...rest} />;
    case "fill":
      return <FillView exercise={exercise} {...rest} />;
    case "fix":
      return <FixView exercise={exercise} {...rest} />;
    case "translate":
      return <TranslateView exercise={exercise} {...rest} />;
    case "order":
      return <OrderView exercise={exercise} {...rest} />;
    case "match":
      return <MatchView exercise={exercise} {...rest} />;
    case "judge":
      return <JudgeView exercise={exercise} {...rest} />;
    case "categorize":
      return <CategorizeView exercise={exercise} {...rest} />;
  }
}

/* -------------------------------- results ------------------------------- */

function Results({
  score,
  correct,
  total,
  wrongCount,
  backHref,
  backLabel,
  onRetry,
  extra,
}: {
  score: number;
  correct: number;
  total: number;
  wrongCount: number;
  backHref: string;
  backLabel: string;
  onRetry: () => void;
  extra?: React.ReactNode;
}) {
  const perfect = score === 100;
  const good = score >= 70;

  const headline = perfect
    ? "Perfeito."
    : good
      ? "Bom resultado."
      : "Vale revisar.";
  const sub = perfect
    ? "Nenhum erro. Esse conteúdo está sólido."
    : good
      ? "Você domina a maior parte. Os erros voltam na revisão."
      : "Leia a lição de novo e refaça — é assim que gruda.";

  const circumference = 2 * Math.PI * 52;

  return (
    <div className="mx-auto w-full max-w-lg animate-[var(--animate-pop)]">
      <div className="surface-card p-8 text-center">
        <div className="relative mx-auto h-32 w-32">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="var(--surface-3)"
              strokeWidth="10"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke={
                perfect ? "var(--good)" : good ? "var(--brand)" : "var(--warn)"
              }
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - score / 100)}
              style={{ transition: "stroke-dashoffset 700ms ease-out" }}
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div>
              <p className="tabular font-[family-name:var(--font-display)] text-[2rem] leading-none font-bold text-[var(--fg-strong)]">
                {score}%
              </p>
              <p className="tabular mt-1 text-[0.8125rem] text-[var(--fg-muted)]">
                {correct}/{total}
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-5 font-[family-name:var(--font-display)] text-[1.625rem] font-semibold text-[var(--fg-strong)]">
          {perfect && (
            <IconTrophy className="mr-2 inline h-5 w-5 text-[var(--color-flame-400)]" />
          )}
          {headline}
        </h2>
        <p className="mt-1.5 text-[0.9375rem] text-[var(--fg-muted)]">{sub}</p>

        <div className="mt-5 flex justify-center gap-4 text-[0.875rem]">
          <span className="flex items-center gap-1.5 text-[var(--good)]">
            <IconCheck className="h-4 w-4" /> {correct} certas
          </span>
          {wrongCount > 0 && (
            <span className="flex items-center gap-1.5 text-[var(--bad)]">
              <IconX className="h-4 w-4" /> {wrongCount} erradas
            </span>
          )}
        </div>

        {extra}

        <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <button type="button" onClick={onRetry} className="btn btn-soft">
            <IconRotate className="h-4 w-4" />
            Refazer
          </button>
          <Link href={backHref} className="btn btn-primary">
            {backLabel}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
