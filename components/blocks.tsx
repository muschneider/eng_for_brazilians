import type { ContentBlock, ComparePane, ExampleItem, Marker } from "@/lib/types";
import { Rich, renderRich } from "./rich-text";
import { IconAlert, IconKey, IconLightbulb, IconMic } from "./marker-icons";

/* ------------------------------------------------------------------ */
/*  Content block renderer                                             */
/*  Server-rendered — no client JS needed for reading a lesson.        */
/* ------------------------------------------------------------------ */

const MARKER_META: Record<
  Marker,
  { glyph: string; label: string; color: string; bg: string }
> = {
  good: { glyph: "✓", label: "Natural", color: "var(--good)", bg: "var(--good-bg)" },
  bad: { glyph: "✕", label: "Errado", color: "var(--bad)", bg: "var(--bad-bg)" },
  warn: { glyph: "!", label: "Arriscado", color: "var(--warn)", bg: "var(--warn-bg)" },
  spoken: { glyph: "◗", label: "Só na fala", color: "var(--spoken)", bg: "var(--spoken-bg)" },
  written: { glyph: "✍", label: "Escrita formal", color: "var(--written)", bg: "var(--written-bg)" },
  br: { glyph: "BR", label: "Interferência do português", color: "var(--br)", bg: "var(--br-bg)" },
  neutral: { glyph: "•", label: "", color: "var(--fg-muted)", bg: "transparent" },
};

function ExampleRow({ item }: { item: ExampleItem }) {
  const meta = MARKER_META[item.marker];
  return (
    <li className="flex gap-3 py-2">
      <span
        aria-label={meta.label}
        title={meta.label}
        className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md text-[0.75rem] font-bold leading-none"
        style={{ color: meta.color, background: meta.bg }}
      >
        {meta.glyph}
      </span>
      <span className="min-w-0">
        <span
          className="en block leading-relaxed"
          style={{
            color: item.marker === "bad" ? "var(--fg-muted)" : "var(--fg-strong)",
            textDecoration: item.marker === "bad" ? "line-through" : undefined,
            textDecorationColor: "color-mix(in oklab, var(--bad) 55%, transparent)",
            textDecorationThickness: "1px",
          }}
        >
          {item.text}
        </span>
        {item.note && (
          <Rich
            as="span"
            className="mt-0.5 block text-[0.875rem] text-[var(--fg-muted)]"
            text={item.note}
          />
        )}
      </span>
    </li>
  );
}

const CALLOUT_META = {
  tip: { color: "var(--spoken)", bg: "var(--spoken-bg)", Icon: IconLightbulb, label: "Dica" },
  warn: { color: "var(--warn)", bg: "var(--warn-bg)", Icon: IconAlert, label: "Atenção" },
  danger: { color: "var(--bad)", bg: "var(--bad-bg)", Icon: IconAlert, label: "Cuidado" },
  br: { color: "var(--br)", bg: "var(--br-bg)", Icon: IconMic, label: "Português → Inglês" },
  key: { color: "var(--brand)", bg: "var(--brand-bg)", Icon: IconKey, label: "Regra de ouro" },
} as const;

function paneTone(tone: ComparePane["tone"]) {
  switch (tone) {
    case "good":
      return { color: "var(--good)", bg: "var(--good-bg)" };
    case "bad":
      return { color: "var(--bad)", bg: "var(--bad-bg)" };
    case "brand":
      return { color: "var(--brand)", bg: "var(--brand-bg)" };
    default:
      return { color: "var(--fg-muted)", bg: "var(--surface-3)" };
  }
}

export function Block({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.kind) {
    case "heading":
      return (
        <h3
          id={block.id}
          className="mt-10 mb-1 scroll-mt-28 font-[family-name:var(--font-display)] text-[1.5rem] font-semibold tracking-tight text-[var(--fg-strong)] first:mt-0"
        >
          {block.text}
        </h3>
      );

    case "text":
      return (
        <p className="text-[1.0625rem] leading-[1.75] text-[var(--fg)]">
          {renderRich(block.text, `b${index}`)}
        </p>
      );

    case "callout": {
      const meta = CALLOUT_META[block.tone];
      const { Icon } = meta;
      return (
        <aside
          className="relative overflow-hidden rounded-[var(--radius-lg)] border p-4 pl-5"
          style={{
            borderColor: `color-mix(in oklab, ${meta.color} 32%, transparent)`,
            background: meta.bg,
          }}
        >
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-1"
            style={{ background: meta.color }}
          />
          <div className="flex items-start gap-3">
            <Icon
              className="mt-px h-[18px] w-[18px] shrink-0"
              style={{ color: meta.color }}
            />
            <div className="min-w-0 flex-1">
              <p
                className="text-[0.75rem] font-bold uppercase tracking-[0.09em]"
                style={{ color: meta.color }}
              >
                {block.title ?? meta.label}
              </p>
              <p className="mt-1.5 text-[0.9375rem] leading-[1.7] text-[var(--fg)]">
                {renderRich(block.text, `c${index}`)}
              </p>
            </div>
          </div>
        </aside>
      );
    }

    case "rule":
      return (
        <div className="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface-2)] p-5">
          <div className="flex items-center gap-2">
            <IconKey className="h-4 w-4 text-[var(--brand)]" />
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.09em] text-[var(--brand)]">
              Regra
            </span>
          </div>
          <p className="mt-2 font-[family-name:var(--font-display)] text-[1.3125rem] leading-snug font-semibold text-[var(--fg-strong)]">
            {renderRich(block.title, `r${index}`)}
          </p>
          {block.text && (
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--fg-muted)]">
              {renderRich(block.text, `rt${index}`)}
            </p>
          )}
        </div>
      );

    case "examples":
      return (
        <div>
          {block.title && (
            <p className="mb-1 text-[0.75rem] font-bold uppercase tracking-[0.09em] text-[var(--fg-faint)]">
              {block.title}
            </p>
          )}
          <ul className="divide-y divide-[var(--line-soft)] rounded-[var(--radius-lg)] border border-[var(--line-soft)] bg-[var(--surface-2)] px-4 py-1">
            {block.items.map((item, i) => (
              <ExampleRow key={i} item={item} />
            ))}
          </ul>
        </div>
      );

    case "table": {
      const emphasize = block.emphasizeFirst ?? block.headers.length <= 3;
      return (
        <figure>
          {block.title && (
            <figcaption className="mb-1 text-[0.75rem] font-bold uppercase tracking-[0.09em] text-[var(--fg-faint)]">
              {block.title}
            </figcaption>
          )}
          <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--line-soft)]">
            <table className="w-full border-collapse text-[0.9375rem]">
              <thead>
                <tr className="bg-[var(--surface-3)]">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="border-b border-[var(--line-soft)] px-3.5 py-2.5 text-left text-[0.75rem] font-bold uppercase tracking-[0.07em] text-[var(--fg-muted)]"
                    >
                      {renderRich(h, `th${index}-${i}`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr
                    key={r}
                    className="border-b border-[var(--line-soft)] last:border-0 odd:bg-[var(--surface-2)]"
                  >
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className="px-3.5 py-2.5 align-top leading-relaxed"
                        style={{
                          color:
                            emphasize && c === 0
                              ? "var(--fg-strong)"
                              : "var(--fg)",
                          fontWeight: emphasize && c === 0 ? 550 : 400,
                        }}
                      >
                        {renderRich(cell, `td${index}-${r}-${c}`)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>
      );
    }

    case "compare": {
      const l = paneTone(block.left.tone);
      const r = paneTone(block.right.tone);
      return (
        <div>
          {block.title && (
            <p className="mb-1 text-[0.75rem] font-bold uppercase tracking-[0.09em] text-[var(--fg-faint)]">
              {block.title}
            </p>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { pane: block.left, tone: l },
              { pane: block.right, tone: r },
            ].map(({ pane, tone }, i) => (
              <div
                key={i}
                className="rounded-[var(--radius-lg)] border p-4"
                style={{
                  borderColor: `color-mix(in oklab, ${tone.color} 26%, transparent)`,
                  background: tone.bg,
                }}
              >
                <p
                  className="text-[0.875rem] font-bold"
                  style={{ color: tone.color }}
                >
                  {renderRich(pane.title, `cp${index}-${i}`)}
                </p>
                {pane.caption && (
                  <p className="mt-0.5 text-[0.8125rem] text-[var(--fg-muted)]">
                    {pane.caption}
                  </p>
                )}
                <ul className="mt-2.5 space-y-1.5">
                  {pane.items.map((it, j) => (
                    <li
                      key={j}
                      className="text-[0.9375rem] leading-relaxed text-[var(--fg)]"
                    >
                      {renderRich(it, `cpi${index}-${i}-${j}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case "pattern":
      return (
        <figure>
          {block.title && (
            <figcaption className="mb-1 text-[0.75rem] font-bold uppercase tracking-[0.09em] text-[var(--fg-faint)]">
              {block.title}
            </figcaption>
          )}
          {/* Mono comes from the <pre> itself, not from `.en` — `.en` also
              applies a 0.94em optical shrink, which would compound here. */}
          <pre className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--line-soft)] bg-[var(--bg-deep)] px-4 py-3.5 font-[family-name:var(--font-mono)] text-[0.875rem] leading-[1.85] tracking-[-0.01em] text-[var(--fg-strong)]">
            <code>{block.lines.join("\n")}</code>
          </pre>
          {block.caption && (
            <p className="mt-1.5 text-[0.875rem] text-[var(--fg-muted)]">
              {renderRich(block.caption, `pc${index}`)}
            </p>
          )}
        </figure>
      );

    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <div>
          {block.title && (
            <p className="mb-1.5 text-[0.75rem] font-bold uppercase tracking-[0.09em] text-[var(--fg-faint)]">
              {block.title}
            </p>
          )}
          <Tag className="space-y-2">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-[3px] grid h-5 w-5 shrink-0 place-items-center rounded-md bg-[var(--surface-3)] text-[0.75rem] font-bold text-[var(--fg-muted)]"
                  aria-hidden
                >
                  {block.ordered ? i + 1 : "•"}
                </span>
                <span className="text-[1.0625rem] leading-[1.7] text-[var(--fg)]">
                  {renderRich(it, `li${index}-${i}`)}
                </span>
              </li>
            ))}
          </Tag>
        </div>
      );
    }

    case "pairs":
      return (
        <div>
          {block.title && (
            <p className="mb-1.5 text-[0.75rem] font-bold uppercase tracking-[0.09em] text-[var(--fg-faint)]">
              {block.title}
            </p>
          )}
          <dl className="divide-y divide-[var(--line-soft)] rounded-[var(--radius-lg)] border border-[var(--line-soft)] bg-[var(--surface-2)]">
            {block.items.map((it, i) => (
              <div
                key={i}
                className="grid gap-1 px-4 py-3 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-4"
              >
                <dt className="en text-[0.875rem] font-semibold text-[var(--brand-strong)]">
                  {it.term}
                </dt>
                <dd className="text-[0.9375rem] leading-relaxed text-[var(--fg)]">
                  {renderRich(it.meaning, `dd${index}-${i}`)}
                  {it.note && (
                    <span className="mt-0.5 block text-[0.8125rem] text-[var(--fg-muted)]">
                      {it.note}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "translation":
      return (
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface-2)]">
          <div className="border-b border-[var(--line-soft)] bg-[var(--surface-3)] px-4 py-2.5">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.09em] text-[var(--fg-faint)]">
              Português
            </p>
            <p className="mt-0.5 text-[1.0625rem] font-medium text-[var(--fg-strong)]">
              {block.pt}
            </p>
          </div>
          <div className="space-y-2.5 p-4">
            {block.wrong && (
              <div className="flex gap-3">
                <span
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md text-[0.75rem] font-bold"
                  style={{ color: "var(--bad)", background: "var(--bad-bg)" }}
                >
                  ✕
                </span>
                <span className="en text-[0.9375rem] text-[var(--fg-muted)] line-through decoration-[color-mix(in_oklab,var(--bad)_55%,transparent)]">
                  {block.wrong}
                </span>
              </div>
            )}
            {block.right.map((r, i) => (
              <div key={i} className="flex gap-3">
                <span
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md text-[0.75rem] font-bold"
                  style={{ color: "var(--good)", background: "var(--good-bg)" }}
                >
                  ✓
                </span>
                <span className="en text-[0.9375rem] font-medium text-[var(--fg-strong)]">
                  {r}
                </span>
              </div>
            ))}
            {block.note && (
              <p className="border-t border-[var(--line-soft)] pt-2.5 text-[0.875rem] leading-relaxed text-[var(--fg-muted)]">
                {renderRich(block.note, `tn${index}`)}
              </p>
            )}
          </div>
        </div>
      );
  }
}

export function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-lesson space-y-5">
      {blocks.map((b, i) => (
        <Block key={i} block={b} index={i} />
      ))}
    </div>
  );
}
