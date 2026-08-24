"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  CategorizeExercise,
  ChoiceExercise,
  FillExercise,
  FixExercise,
  JudgeExercise,
  MatchExercise,
  OrderExercise,
  TranslateExercise,
} from "@/lib/types";
import { checkOrder, checkText, seededShuffle, splitGaps } from "@/lib/answer";
import { renderRich } from "./rich-text";
import { IconCheck, IconX } from "./icons";

/* ------------------------------------------------------------------ */
/*  One view per exercise kind.                                        */
/*                                                                     */
/*  Contract: each view owns its local answer state and reports the    */
/*  result upward via `onResolve(correct)` when the learner submits.   */
/*  `locked` freezes interaction once answered.                        */
/* ------------------------------------------------------------------ */

export interface ViewProps<T> {
  exercise: T;
  locked: boolean;
  /** Reports whether the learner has entered enough to submit. */
  onReady: (canSubmit: boolean) => void;
  onResolve: (correct: boolean, detail?: string) => void;
  /** Hands the parent a function it can call to grade the current answer. */
  registerSubmit: (fn: (() => void) | null) => void;
}

/**
 * NOTE: every view assumes it is mounted with `key={exercise.id}`, so moving
 * to the next exercise remounts it and local answer state resets for free.
 * That is why none of these components reset state in an effect.
 */

/* --------------------------------- ui --------------------------------- */

function Specimen({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--line-soft)] bg-[var(--surface-2)] px-4 py-3.5">
      <p className="en text-[1.125rem] leading-relaxed text-[var(--fg-strong)]">
        {children}
      </p>
    </div>
  );
}

function optionClasses(state: "idle" | "picked" | "right" | "wrong") {
  const base =
    "group flex w-full items-center gap-3 rounded-[var(--radius-md)] border px-4 py-3 text-left text-[1.0625rem] transition-colors";
  switch (state) {
    case "picked":
      return `${base} border-[var(--brand)] bg-[var(--brand-bg)] text-[var(--fg-strong)]`;
    case "right":
      return `${base} border-[color-mix(in_oklab,var(--good)_50%,transparent)] bg-[var(--good-bg)] text-[var(--fg-strong)]`;
    case "wrong":
      return `${base} border-[color-mix(in_oklab,var(--bad)_50%,transparent)] bg-[var(--bad-bg)] text-[var(--fg-strong)]`;
    default:
      return `${base} border-[var(--line)] bg-[var(--surface-2)] text-[var(--fg)] hover:border-[var(--brand)] hover:bg-[var(--surface-3)]`;
  }
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-[var(--line)] bg-[var(--surface-3)] text-[0.75rem] font-bold text-[var(--fg-muted)]">
      {children}
    </span>
  );
}

const KEYS = ["A", "B", "C", "D", "E", "F"];

/* -------------------------------- choice ------------------------------- */

export function ChoiceView({
  exercise,
  locked,
  onReady,
  onResolve,
  registerSubmit,
}: ViewProps<ChoiceExercise>) {
  const [picked, setPicked] = useState<number | null>(null);

  useEffect(() => onReady(picked !== null), [picked, onReady]);

  useEffect(() => {
    registerSubmit(() => {
      if (picked === null) return;
      onResolve(picked === exercise.answer, exercise.options[exercise.answer]);
    });
    return () => registerSubmit(null);
  }, [picked, exercise, onResolve, registerSubmit]);

  return (
    <div className="space-y-3">
      {exercise.sentence && <Specimen>{exercise.sentence}</Specimen>}
      <div className="space-y-2">
        {exercise.options.map((opt, i) => {
          let state: "idle" | "picked" | "right" | "wrong" = "idle";
          if (locked) {
            if (i === exercise.answer) state = "right";
            else if (i === picked) state = "wrong";
          } else if (i === picked) state = "picked";

          return (
            <button
              key={i}
              type="button"
              disabled={locked}
              data-testid="opt"
              onClick={() => setPicked(i)}
              className={optionClasses(state)}
            >
              <Bullet>{KEYS[i] ?? i + 1}</Bullet>
              <span className="en min-w-0 flex-1">{opt}</span>
              {locked && state === "right" && (
                <IconCheck className="h-4 w-4 shrink-0 text-[var(--good)]" />
              )}
              {locked && state === "wrong" && (
                <IconX className="h-4 w-4 shrink-0 text-[var(--bad)]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* --------------------------------- fill -------------------------------- */

export function FillView({
  exercise,
  locked,
  onReady,
  onResolve,
  registerSubmit,
}: ViewProps<FillExercise>) {
  const segments = useMemo(() => splitGaps(exercise.sentence), [exercise.sentence]);
  const gapCount = segments.length - 1;
  const [values, setValues] = useState<string[]>(() => Array(gapCount).fill(""));
  const [results, setResults] = useState<(boolean | null)[]>(() =>
    Array(gapCount).fill(null),
  );
  useEffect(() => {
    onReady(values.every((v) => v.trim().length > 0));
  }, [values, onReady]);

  useEffect(() => {
    registerSubmit(() => {
      const checks = values.map((v, i) => checkText(v, exercise.answers[i] ?? []));
      setResults(checks.map((c) => c.correct));
      onResolve(
        checks.every((c) => c.correct),
        exercise.answers.map((a) => a[0]).join("  ·  "),
      );
    });
    return () => registerSubmit(null);
  }, [values, exercise, onResolve, registerSubmit]);

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--line-soft)] bg-[var(--surface-2)] px-4 py-4">
      <p className="en flex flex-wrap items-center gap-x-1.5 gap-y-2.5 text-[1.125rem] leading-loose text-[var(--fg-strong)]">
        {segments.map((seg, i) => (
          <span key={i} className="contents">
            {seg && <span className="whitespace-pre-wrap">{seg}</span>}
            {i < gapCount && (
              <input
                autoFocus={i === 0}
                type="text"
                value={values[i]}
                disabled={locked}
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                aria-label={`Lacuna ${i + 1}`}
                onChange={(e) => {
                  const next = [...values];
                  next[i] = e.target.value;
                  setValues(next);
                }}
                style={{
                  width: `${Math.max(6, Math.min(22, values[i].length + 3))}ch`,
                  borderColor:
                    results[i] === true
                      ? "var(--good)"
                      : results[i] === false
                        ? "var(--bad)"
                        : undefined,
                  color:
                    results[i] === false ? "var(--bad)" : "var(--fg-strong)",
                }}
                className="en inline-block rounded-md border-b-2 border-[var(--brand)] bg-[var(--surface-3)] px-2 py-1 text-center text-[1.0625rem] outline-none transition-colors focus:bg-[var(--surface)] disabled:opacity-100"
              />
            )}
          </span>
        ))}
      </p>
      {locked && results.some((r) => r === false) && (
        <p className="mt-3 border-t border-[var(--line-soft)] pt-3 text-[0.875rem] text-[var(--fg-muted)]">
          Resposta:{" "}
          <span className="en font-semibold text-[var(--good)]">
            {exercise.answers.map((a) => a[0]).join(" · ")}
          </span>
        </p>
      )}
    </div>
  );
}

/* ----------------------------- fix / translate ------------------------- */

function FreeTextView({
  answers,
  locked,
  onReady,
  onResolve,
  registerSubmit,
  placeholder,
  header,
}: {
  answers: string[];
  locked: boolean;
  onReady: (v: boolean) => void;
  onResolve: (correct: boolean, detail?: string) => void;
  registerSubmit: (fn: (() => void) | null) => void;
  placeholder: string;
  header: React.ReactNode;
}) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const [near, setNear] = useState(false);
  useEffect(() => onReady(value.trim().length > 0), [value, onReady]);

  useEffect(() => {
    registerSubmit(() => {
      const r = checkText(value, answers);
      setResult(r.correct);
      setNear(Boolean(r.nearMiss));
      onResolve(r.correct, answers[0]);
    });
    return () => registerSubmit(null);
  }, [value, answers, onResolve, registerSubmit]);

  return (
    <div className="space-y-3">
      {header}
      <div>
        <textarea
          autoFocus
          rows={2}
          value={value}
          disabled={locked}
          placeholder={placeholder}
          autoCapitalize="sentences"
          autoCorrect="off"
          spellCheck={false}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) e.preventDefault();
          }}
          style={{
            borderColor:
              result === true
                ? "color-mix(in oklab, var(--good) 55%, transparent)"
                : result === false
                  ? "color-mix(in oklab, var(--bad) 55%, transparent)"
                  : undefined,
          }}
          className="en w-full resize-none rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface-2)] px-4 py-3 text-[1.0625rem] leading-relaxed text-[var(--fg-strong)] outline-none transition-colors placeholder:text-[var(--fg-faint)] placeholder:not-italic focus:border-[var(--brand)] focus:bg-[var(--surface)] disabled:opacity-100"
        />
        {locked && near && result && (
          <p className="mt-2 text-[0.875rem] text-[var(--warn)]">
            Quase perfeito — cuidado com a digitação.
          </p>
        )}
        {locked && result === false && (
          <div className="mt-2.5 rounded-[var(--radius-md)] border border-[color-mix(in_oklab,var(--good)_28%,transparent)] bg-[var(--good-bg)] px-3.5 py-2.5">
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[var(--good)]">
              Resposta esperada
            </p>
            <p className="en mt-1 text-[1.0625rem] font-medium text-[var(--fg-strong)]">
              {answers[0]}
            </p>
            {answers.length > 1 && (
              <p className="mt-1.5 text-[0.8125rem] text-[var(--fg-muted)]">
                Também aceito:{" "}
                <span className="en">{answers.slice(1, 4).join(" · ")}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function FixView(props: ViewProps<FixExercise>) {
  const { exercise } = props;
  return (
    <FreeTextView
      answers={exercise.answers}
      locked={props.locked}
      onReady={props.onReady}
      onResolve={props.onResolve}
      registerSubmit={props.registerSubmit}
      placeholder="Escreva a versão correta…"
      header={
        <div className="flex items-start gap-3 rounded-[var(--radius-lg)] border border-[color-mix(in_oklab,var(--bad)_28%,transparent)] bg-[var(--bad-bg)] px-4 py-3">
          <span
            className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md text-[0.75rem] font-bold"
            style={{ color: "var(--bad)", background: "var(--bad-bg)" }}
          >
            ✕
          </span>
          <span className="en text-[1.0625rem] leading-relaxed text-[var(--fg-strong)]">
            {exercise.wrong}
          </span>
        </div>
      }
    />
  );
}

export function TranslateView(props: ViewProps<TranslateExercise>) {
  const { exercise } = props;
  return (
    <FreeTextView
      answers={exercise.answers}
      locked={props.locked}
      onReady={props.onReady}
      onResolve={props.onResolve}
      registerSubmit={props.registerSubmit}
      placeholder="Escreva em inglês…"
      header={
        <div className="rounded-[var(--radius-lg)] border border-[var(--line-soft)] bg-[var(--surface-2)] px-4 py-3">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[var(--fg-faint)]">
            Português
          </p>
          <p className="mt-0.5 text-[1.125rem] font-medium text-[var(--fg-strong)]">
            {exercise.pt}
          </p>
        </div>
      }
    />
  );
}

/* --------------------------------- order ------------------------------- */

export function OrderView({
  exercise,
  locked,
  onReady,
  onResolve,
  registerSubmit,
}: ViewProps<OrderExercise>) {
  const pool = useMemo(
    () => seededShuffle(exercise.tokens.map((t, i) => ({ t, i })), exercise.id),
    [exercise.tokens, exercise.id],
  );
  const [built, setBuilt] = useState<{ t: string; i: number }[]>([]);
  const [ok, setOk] = useState<boolean | null>(null);

  useEffect(() => {
    onReady(built.length === exercise.tokens.length);
  }, [built.length, exercise.tokens.length, onReady]);

  useEffect(() => {
    registerSubmit(() => {
      const r = checkOrder(
        built.map((b) => b.t),
        exercise.answers,
      );
      setOk(r.correct);
      onResolve(r.correct, r.expected);
    });
    return () => registerSubmit(null);
  }, [built, exercise, onResolve, registerSubmit]);

  const usedKeys = new Set(built.map((b) => b.i));

  return (
    <div className="space-y-3">
      <div
        className="flex min-h-[4.5rem] flex-wrap content-start items-start gap-2 rounded-[var(--radius-lg)] border-2 border-dashed p-3 transition-colors"
        style={{
          borderColor:
            ok === true
              ? "color-mix(in oklab, var(--good) 50%, transparent)"
              : ok === false
                ? "color-mix(in oklab, var(--bad) 50%, transparent)"
                : "var(--line)",
          background:
            ok === true
              ? "var(--good-bg)"
              : ok === false
                ? "var(--bad-bg)"
                : "var(--surface-2)",
        }}
      >
        {built.length === 0 && (
          <span className="px-1 py-1.5 text-[0.9375rem] text-[var(--fg-faint)]">
            Toque nas palavras abaixo para montar a frase
          </span>
        )}
        {built.map((b, idx) => (
          <button
            key={`${b.i}-${idx}`}
            type="button"
            disabled={locked}
            data-testid="token-built"
            onClick={() => setBuilt(built.filter((_, j) => j !== idx))}
            className="en rounded-[var(--radius-sm)] border border-[var(--brand)] bg-[var(--brand-bg)] px-2.5 py-1.5 text-[0.9375rem] text-[var(--fg-strong)] transition-transform hover:scale-[0.97] disabled:hover:scale-100"
          >
            {b.t}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {pool.map((p) => (
          <button
            key={p.i}
            type="button"
            disabled={locked || usedKeys.has(p.i)}
            data-testid="token-pool"
            onClick={() => setBuilt([...built, p])}
            className="en rounded-[var(--radius-sm)] border border-[var(--line)] bg-[var(--surface-2)] px-2.5 py-1.5 text-[0.9375rem] text-[var(--fg)] transition-colors hover:border-[var(--brand)] hover:bg-[var(--surface-3)] disabled:pointer-events-none disabled:opacity-25"
          >
            {p.t}
          </button>
        ))}
      </div>

      {locked && ok === false && (
        <div className="rounded-[var(--radius-md)] border border-[color-mix(in_oklab,var(--good)_28%,transparent)] bg-[var(--good-bg)] px-3.5 py-2.5">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[var(--good)]">
            Ordem correta
          </p>
          <p className="en mt-1 text-[1.0625rem] font-medium text-[var(--fg-strong)]">
            {exercise.answers[0].join(" ")}
          </p>
        </div>
      )}
    </div>
  );
}

/* --------------------------------- match ------------------------------- */

export function MatchView({
  exercise,
  locked,
  onReady,
  onResolve,
  registerSubmit,
}: ViewProps<MatchExercise>) {
  const rights = useMemo(
    () => seededShuffle(exercise.pairs.map((p, i) => ({ ...p, i })), exercise.id),
    [exercise.pairs, exercise.id],
  );
  /** left index → right index */
  const [links, setLinks] = useState<Record<number, number>>({});
  const [activeLeft, setActiveLeft] = useState<number | null>(null);

  useEffect(() => {
    onReady(Object.keys(links).length === exercise.pairs.length);
  }, [links, exercise.pairs.length, onReady]);

  useEffect(() => {
    registerSubmit(() => {
      const allRight = exercise.pairs.every((_, li) => links[li] === li);
      onResolve(allRight, "");
    });
    return () => registerSubmit(null);
  }, [links, exercise, onResolve, registerSubmit]);

  const takenRights = new Set(Object.values(links));

  function pickRight(ri: number) {
    if (activeLeft === null) return;
    const next = { ...links };
    for (const k of Object.keys(next)) {
      if (next[Number(k)] === ri) delete next[Number(k)];
    }
    next[activeLeft] = ri;
    setLinks(next);
    setActiveLeft(null);
  }

  return (
    <div className="space-y-2.5">
      {!locked && (
        <p className="text-[0.875rem] text-[var(--fg-muted)]">
          {activeLeft === null
            ? "Escolha um item da esquerda."
            : "Agora escolha o par correspondente à direita."}
        </p>
      )}
      <div className="grid grid-cols-2 gap-2.5">
        <div className="space-y-2">
          {exercise.pairs.map((p, li) => {
            const linked = links[li];
            const right = linked !== undefined ? exercise.pairs[linked] : null;
            const correct = locked ? linked === li : null;
            return (
              <button
                key={li}
                type="button"
                disabled={locked}
                data-testid="match-left"
                onClick={() => setActiveLeft(activeLeft === li ? null : li)}
                className="w-full rounded-[var(--radius-md)] border px-3 py-2.5 text-left transition-colors"
                style={{
                  borderColor:
                    correct === true
                      ? "color-mix(in oklab, var(--good) 50%, transparent)"
                      : correct === false
                        ? "color-mix(in oklab, var(--bad) 50%, transparent)"
                        : activeLeft === li
                          ? "var(--brand)"
                          : "var(--line)",
                  background:
                    correct === true
                      ? "var(--good-bg)"
                      : correct === false
                        ? "var(--bad-bg)"
                        : activeLeft === li
                          ? "var(--brand-bg)"
                          : "var(--surface-2)",
                }}
              >
                <span className="block text-[0.9375rem] leading-snug text-[var(--fg-strong)]">
                  {renderRich(p.left, `ml${li}`)}
                </span>
                {right && (
                  <span className="en mt-1 block text-[0.8125rem] leading-snug text-[var(--fg-muted)]">
                    → {right.right}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          {rights.map((r) => (
            <button
              key={r.i}
              type="button"
              disabled={locked || activeLeft === null}
              data-testid="match-right"
              onClick={() => pickRight(r.i)}
              className="w-full rounded-[var(--radius-md)] border px-3 py-2.5 text-left text-[0.9375rem] leading-snug transition-colors disabled:opacity-60"
              style={{
                borderColor: takenRights.has(r.i) ? "var(--brand)" : "var(--line)",
                background: takenRights.has(r.i)
                  ? "var(--brand-bg)"
                  : "var(--surface-2)",
                color: "var(--fg)",
              }}
            >
              <span className="en">{r.right}</span>
            </button>
          ))}
        </div>
      </div>

      {locked && (
        <div className="rounded-[var(--radius-md)] border border-[var(--line-soft)] bg-[var(--surface-2)] px-3.5 py-3">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[var(--fg-faint)]">
            Pares corretos
          </p>
          <ul className="mt-1.5 space-y-1">
            {exercise.pairs.map((p, i) => (
              <li key={i} className="text-[0.875rem] text-[var(--fg)]">
                {renderRich(p.left, `mr${i}`)}
                <span className="mx-1.5 text-[var(--fg-faint)]">→</span>
                <span className="en text-[var(--fg-strong)]">{p.right}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* --------------------------------- judge ------------------------------- */

export function JudgeView({
  exercise,
  locked,
  onReady,
  onResolve,
  registerSubmit,
}: ViewProps<JudgeExercise>) {
  const [picked, setPicked] = useState<boolean | null>(null);

  useEffect(() => onReady(picked !== null), [picked, onReady]);

  useEffect(() => {
    registerSubmit(() => {
      if (picked === null) return;
      onResolve(picked === exercise.natural, exercise.correction);
    });
    return () => registerSubmit(null);
  }, [picked, exercise, onResolve, registerSubmit]);

  const options: { value: boolean; label: string; tone: string }[] = [
    { value: true, label: "Natural", tone: "var(--good)" },
    { value: false, label: "Soa errado", tone: "var(--bad)" },
  ];

  return (
    <div className="space-y-3">
      <Specimen>{exercise.sentence}</Specimen>
      <div className="grid grid-cols-2 gap-2.5">
        {options.map((o) => {
          const isAnswer = o.value === exercise.natural;
          let bg = "var(--surface-2)";
          let border = "var(--line)";
          if (locked) {
            if (isAnswer) {
              bg = "var(--good-bg)";
              border = "color-mix(in oklab, var(--good) 50%, transparent)";
            } else if (picked === o.value) {
              bg = "var(--bad-bg)";
              border = "color-mix(in oklab, var(--bad) 50%, transparent)";
            }
          } else if (picked === o.value) {
            bg = "var(--brand-bg)";
            border = "var(--brand)";
          }
          return (
            <button
              key={String(o.value)}
              type="button"
              disabled={locked}
              data-testid="opt"
              onClick={() => setPicked(o.value)}
              className="rounded-[var(--radius-md)] border px-4 py-3.5 text-[1.0625rem] font-semibold transition-colors"
              style={{ background: bg, borderColor: border, color: o.tone }}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      {locked && !exercise.natural && exercise.correction && (
        <div className="rounded-[var(--radius-md)] border border-[color-mix(in_oklab,var(--good)_28%,transparent)] bg-[var(--good-bg)] px-3.5 py-2.5">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[var(--good)]">
            Versão correta
          </p>
          <p className="en mt-1 text-[1.0625rem] font-medium text-[var(--fg-strong)]">
            {exercise.correction}
          </p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------ categorize ----------------------------- */

export function CategorizeView({
  exercise,
  locked,
  onReady,
  onResolve,
  registerSubmit,
}: ViewProps<CategorizeExercise>) {
  const items = useMemo(
    () => seededShuffle(exercise.items.map((it, i) => ({ ...it, i })), exercise.id),
    [exercise.items, exercise.id],
  );
  /** item index → bucket */
  const [placed, setPlaced] = useState<Record<number, string>>({});
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    onReady(Object.keys(placed).length === exercise.items.length);
  }, [placed, exercise.items.length, onReady]);

  useEffect(() => {
    registerSubmit(() => {
      const allRight = exercise.items.every((it, i) => placed[i] === it.bucket);
      onResolve(allRight, "");
    });
    return () => registerSubmit(null);
  }, [placed, exercise, onResolve, registerSubmit]);

  const unplaced = items.filter((it) => placed[it.i] === undefined);

  return (
    <div className="space-y-3">
      {unplaced.length > 0 && (
        <div className="flex flex-wrap gap-2 rounded-[var(--radius-lg)] border border-[var(--line-soft)] bg-[var(--surface-2)] p-3">
          {unplaced.map((it) => (
            <button
              key={it.i}
              type="button"
              disabled={locked}
              data-testid="cat-item"
              onClick={() => setActive(active === it.i ? null : it.i)}
              className="rounded-[var(--radius-sm)] border px-2.5 py-1.5 text-[0.9375rem] transition-colors"
              style={{
                borderColor: active === it.i ? "var(--brand)" : "var(--line)",
                background:
                  active === it.i ? "var(--brand-bg)" : "var(--surface-3)",
                color: "var(--fg-strong)",
              }}
            >
              <span className="en">{it.text}</span>
            </button>
          ))}
        </div>
      )}

      <div
        className="grid gap-2.5"
        style={{
          gridTemplateColumns: `repeat(${Math.min(exercise.buckets.length, 3)}, minmax(0, 1fr))`,
        }}
      >
        {/* A bucket is a plain drop zone, not a button. While an item is
            selected an overlay button covers it so a click anywhere places
            the item; otherwise the chips inside stay individually clickable.
            (Nesting buttons inside buttons is invalid HTML and swallows
            clicks — that was the original bug here.) */}
        {exercise.buckets.map((bucket) => (
          <div
            key={bucket}
            className="relative min-h-[6rem] rounded-[var(--radius-lg)] border-2 border-dashed p-2.5 transition-colors"
            style={{
              borderColor:
                active !== null ? "var(--brand)" : "var(--line-soft)",
              background: "var(--surface-2)",
            }}
          >
            <span className="block text-[0.75rem] font-bold uppercase tracking-[0.06em] text-[var(--fg-muted)]">
              {bucket}
            </span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {exercise.items.map((it, i) => {
                if (placed[i] !== bucket) return null;
                const right = locked ? it.bucket === bucket : null;
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={locked}
                    title={locked ? undefined : "Remover"}
                    onClick={() => {
                      const next = { ...placed };
                      delete next[i];
                      setPlaced(next);
                    }}
                    className="en rounded-[var(--radius-xs)] border px-2 py-1 text-[0.875rem] disabled:cursor-default"
                    style={{
                      borderColor:
                        right === true
                          ? "color-mix(in oklab, var(--good) 50%, transparent)"
                          : right === false
                            ? "color-mix(in oklab, var(--bad) 50%, transparent)"
                            : "var(--brand)",
                      background:
                        right === true
                          ? "var(--good-bg)"
                          : right === false
                            ? "var(--bad-bg)"
                            : "var(--brand-bg)",
                      color: "var(--fg-strong)",
                    }}
                  >
                    {it.text}
                  </button>
                );
              })}
            </div>

            {active !== null && !locked && (
              <button
                type="button"
                data-testid="cat-bucket"
                aria-label={`Colocar em ${bucket}`}
                onClick={() => {
                  setPlaced({ ...placed, [active]: bucket });
                  setActive(null);
                }}
                className="absolute inset-0 rounded-[var(--radius-lg)] transition-colors hover:bg-[var(--brand-bg)]"
              />
            )}
          </div>
        ))}
      </div>

      {locked && (
        <div className="rounded-[var(--radius-md)] border border-[var(--line-soft)] bg-[var(--surface-2)] px-3.5 py-3">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[var(--fg-faint)]">
            Classificação correta
          </p>
          <ul className="mt-1.5 space-y-1">
            {exercise.items.map((it, i) => (
              <li key={i} className="text-[0.875rem] text-[var(--fg)]">
                <span className="en text-[var(--fg-strong)]">{it.text}</span>
                <span className="mx-1.5 text-[var(--fg-faint)]">→</span>
                {it.bucket}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
