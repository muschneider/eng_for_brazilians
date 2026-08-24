"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { lessons, modules, totalExercises } from "@/lib/content";
import { useProgress } from "./progress-provider";
import {
  exportState,
  importState,
  levelFromXp,
  weekActivity,
} from "@/lib/progress";
import { MODULE_ICONS, IconBolt, IconDownload, IconFlame, IconTrash, IconTrophy, IconUpload } from "./icons";
import { Ring, SectionTitle, Stat } from "./ui";

/* ------------------------------------------------------------------ */
/*  Progress, settings and data ownership.                             */
/*                                                                     */
/*  Everything lives in localStorage, so export/import is the only     */
/*  way to move progress between devices. Make it obvious.             */
/* ------------------------------------------------------------------ */

const GOALS = [30, 60, 100, 150];

export function ProgressPanel() {
  const { state, ready, setSettings, replace, reset } = useProgress();
  const fileRef = useRef<HTMLInputElement>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  const level = levelFromXp(state.xp);
  const week = useMemo(() => weekActivity(state), [state]);

  const stats = useMemo(() => {
    const records = Object.values(state.exercises);
    const totalAnswers = records.reduce((n, r) => n + r.correct + r.wrong, 0);
    const totalCorrect = records.reduce((n, r) => n + r.correct, 0);
    const accuracy =
      totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0;
    const mastered = records.filter((r) => r.box >= 4).length;
    const doneLessons = lessons.filter(
      (l) => state.lessons[l.id]?.status === "done",
    ).length;
    const activeDays = Object.values(state.daily).filter((v) => v > 0).length;
    return {
      accuracy,
      mastered,
      doneLessons,
      seen: records.length,
      totalAnswers,
      activeDays,
    };
  }, [state]);

  function download() {
    const blob = new Blob([exportState(state)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `practical-english-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setNotice("Backup baixado.");
  }

  async function upload(file: File) {
    const text = await file.text();
    const next = importState(text);
    if (!next) {
      setNotice("Arquivo inválido.");
      return;
    }
    replace(next);
    setNotice("Progresso restaurado.");
  }

  const maxWeek = Math.max(state.settings.dailyGoal, ...week.map((w) => w.xp), 1);

  return (
    <div className="space-y-9">
      <header>
        <p className="text-[0.75rem] font-bold uppercase tracking-[0.11em] text-[var(--brand-strong)]">
          Nível {level.level} · {level.label}
        </p>
        <h1 className="mt-1.5 font-[family-name:var(--font-display)] text-[2.25rem] leading-tight font-semibold tracking-tight text-[var(--fg-strong)]">
          Seu progresso
        </h1>
        <div className="mt-4 max-w-md">
          <div className="mb-1.5 flex items-center justify-between text-[0.8125rem]">
            <span className="text-[var(--fg-muted)]">
              Nível {level.level} → {level.level + 1}
            </span>
            <span className="tabular font-semibold text-[var(--fg-strong)]">
              {level.into} / {level.need} XP
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--surface-3)]">
            <div
              className="h-full rounded-full transition-[width] duration-500"
              style={{
                width: `${(level.into / level.need) * 100}%`,
                background:
                  "linear-gradient(90deg, var(--brand) 0%, var(--color-flame-400) 100%)",
              }}
            />
          </div>
        </div>
      </header>

      {/* ------------------------------ stats ----------------------------- */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          label="XP total"
          value={state.xp}
          hint={`${stats.activeDays} ${stats.activeDays === 1 ? "dia ativo" : "dias ativos"}`}
          icon={<IconBolt className="h-3.5 w-3.5" />}
          accent="var(--brand)"
        />
        <Stat
          label="Precisão"
          value={`${stats.accuracy}%`}
          hint={`${stats.totalAnswers} respostas registradas`}
          icon={<IconTrophy className="h-3.5 w-3.5" />}
          accent={
            stats.accuracy >= 80
              ? "var(--good)"
              : stats.accuracy >= 60
                ? "var(--warn)"
                : "var(--bad)"
          }
        />
        <Stat
          label="Lições"
          value={`${stats.doneLessons}/${lessons.length}`}
          hint="concluídas com 70% ou mais"
          accent="var(--fg-strong)"
        />
        <Stat
          label="Sequência"
          value={state.streak.current}
          hint={`recorde: ${state.streak.longest} dias`}
          icon={<IconFlame className="h-3.5 w-3.5" />}
          accent="var(--color-flame-500)"
        />
      </section>

      {/* ------------------------------ week ------------------------------ */}
      <section>
        <SectionTitle eyebrow="Últimos 7 dias" title="Atividade" />
        <div className="surface-card flex items-end justify-between gap-2 p-5 pt-8">
          {week.map((d) => {
            const h = Math.max(4, (d.xp / maxWeek) * 100);
            const hit = d.xp >= state.settings.dailyGoal;
            return (
              <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                <div className="relative flex h-28 w-full items-end justify-center">
                  <div
                    className="w-full max-w-[3rem] rounded-t-md transition-[height] duration-500"
                    style={{
                      height: `${h}%`,
                      background: hit
                        ? "linear-gradient(180deg, var(--brand) 0%, color-mix(in oklab, var(--brand) 50%, transparent) 100%)"
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
                <span className="text-[0.75rem] text-[var(--fg-faint)]">{d.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ----------------------------- modules ---------------------------- */}
      <section>
        <SectionTitle eyebrow="Detalhe" title="Desempenho por módulo" />
        <div className="surface-card divide-y divide-[var(--line-soft)]">
          {modules.map((m) => {
            const Icon = MODULE_ICONS[m.icon];
            const total = m.lessons.length;
            const finished = m.lessons.filter(
              (l) => state.lessons[l.id]?.status === "done",
            ).length;
            const scored = m.lessons
              .map((l) => state.lessons[l.id]?.bestScore ?? 0)
              .filter((s) => s > 0);
            const avg =
              scored.length > 0
                ? Math.round(scored.reduce((a, b) => a + b, 0) / scored.length)
                : 0;
            const first =
              m.lessons.find((l) => state.lessons[l.id]?.status !== "done") ??
              m.lessons[0];

            return (
              <Link
                key={m.id}
                href={`/lessons/${first.id}`}
                className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[var(--surface-2)]"
              >
                <Ring value={(finished / total) * 100} size={40} stroke={3.5}>
                  <Icon className="h-4 w-4 text-[var(--fg-muted)]" />
                </Ring>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.9375rem] font-medium text-[var(--fg-strong)]">
                    {m.titlePt}
                  </p>
                  <p className="tabular text-[0.8125rem] text-[var(--fg-muted)]">
                    {finished}/{total} lições
                    {avg > 0 && ` · média ${avg}%`}
                  </p>
                </div>
                <div className="h-1.5 w-24 shrink-0 overflow-hidden rounded-full bg-[var(--surface-3)] sm:w-40">
                  <div
                    className="h-full rounded-full bg-[var(--brand)]"
                    style={{ width: `${(finished / total) * 100}%` }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ---------------------------- settings ---------------------------- */}
      <section>
        <SectionTitle eyebrow="Ajustes" title="Preferências" />
        <div className="surface-card divide-y divide-[var(--line-soft)]">
          <div className="flex flex-wrap items-center gap-4 px-5 py-4">
            <div className="min-w-0 flex-1">
              <p className="text-[0.9375rem] font-medium text-[var(--fg-strong)]">
                Meta diária
              </p>
              <p className="text-[0.8125rem] text-[var(--fg-muted)]">
                Cada exercício correto vale 10 XP.
              </p>
            </div>
            <div className="flex gap-1.5">
              {GOALS.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setSettings({ dailyGoal: g })}
                  className="tabular rounded-[var(--radius-sm)] border px-3 py-1.5 text-[0.875rem] font-semibold transition-colors"
                  style={{
                    borderColor:
                      state.settings.dailyGoal === g
                        ? "var(--brand)"
                        : "var(--line)",
                    background:
                      state.settings.dailyGoal === g
                        ? "var(--brand-bg)"
                        : "var(--surface-2)",
                    color:
                      state.settings.dailyGoal === g
                        ? "var(--brand-strong)"
                        : "var(--fg-muted)",
                  }}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 px-5 py-4">
            <div className="min-w-0 flex-1">
              <p className="text-[0.9375rem] font-medium text-[var(--fg-strong)]">
                Tema
              </p>
              <p className="text-[0.8125rem] text-[var(--fg-muted)]">
                Escuro por padrão; claro imita papel.
              </p>
            </div>
            <div className="flex gap-1.5">
              {(["dark", "light"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSettings({ theme: t })}
                  className="rounded-[var(--radius-sm)] border px-3 py-1.5 text-[0.875rem] font-semibold transition-colors"
                  style={{
                    borderColor:
                      state.settings.theme === t ? "var(--brand)" : "var(--line)",
                    background:
                      state.settings.theme === t
                        ? "var(--brand-bg)"
                        : "var(--surface-2)",
                    color:
                      state.settings.theme === t
                        ? "var(--brand-strong)"
                        : "var(--fg-muted)",
                  }}
                >
                  {t === "dark" ? "Escuro" : "Claro"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ data ------------------------------ */}
      <section>
        <SectionTitle eyebrow="Seus dados" title="Backup e reset" />
        <div className="surface-card p-5">
          <p className="text-[0.9375rem] leading-relaxed text-[var(--fg-muted)]">
            Nada é enviado para nenhum servidor. Todo o progresso vive no
            <code className="en mx-1 rounded border border-[var(--line-soft)] bg-[var(--surface-3)] px-1.5 py-px text-[0.8125rem] text-[var(--fg-strong)]">
              localStorage
            </code>
            deste navegador. Limpar os dados do site apaga tudo — exporte se
            quiser levar para outro dispositivo.
          </p>

          {ready && (
            <p className="tabular mt-3 text-[0.8125rem] text-[var(--fg-faint)]">
              {stats.seen} de {totalExercises} exercícios já vistos ·{" "}
              {stats.mastered} dominados
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-2.5">
            <button type="button" onClick={download} className="btn btn-soft">
              <IconDownload className="h-4 w-4" />
              Exportar progresso
            </button>

            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="btn btn-soft"
            >
              <IconUpload className="h-4 w-4" />
              Importar
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void upload(f);
                e.target.value = "";
              }}
            />

            {confirmReset ? (
              <span className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    reset();
                    setConfirmReset(false);
                    setNotice("Tudo apagado.");
                  }}
                  className="btn"
                  style={{
                    background: "var(--bad)",
                    color: "var(--bg)",
                    borderColor: "var(--bad)",
                  }}
                >
                  Confirmar exclusão
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmReset(false)}
                  className="btn btn-ghost"
                >
                  Cancelar
                </button>
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmReset(true)}
                className="btn btn-ghost"
                style={{ color: "var(--bad)" }}
              >
                <IconTrash className="h-4 w-4" />
                Apagar tudo
              </button>
            )}
          </div>

          {notice && (
            <p className="mt-3 text-[0.875rem] font-medium text-[var(--good)]">
              {notice}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
