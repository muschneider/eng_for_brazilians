import type { Priority } from "@/lib/types";

/* Shared presentational primitives. Server-safe. */

const PRIORITY_META: Record<
  Priority,
  { label: string; color: string; bg: string }
> = {
  essential: {
    label: "Essencial",
    color: "var(--bad)",
    bg: "var(--bad-bg)",
  },
  useful: { label: "Útil", color: "var(--warn)", bg: "var(--warn-bg)" },
  later: { label: "Depois", color: "var(--fg-muted)", bg: "var(--surface-3)" },
};

export function PriorityTag({
  priority,
  compact,
}: {
  priority: Priority;
  compact?: boolean;
}) {
  const m = PRIORITY_META[priority];
  return (
    <span
      className={
        compact
          ? "rounded px-1.5 py-px text-[0.6875rem] font-bold uppercase tracking-[0.06em]"
          : "rounded-full px-2 py-0.5 text-[0.75rem] font-bold uppercase tracking-[0.07em]"
      }
      style={{ color: m.color, background: m.bg }}
    >
      {m.label}
    </span>
  );
}

export function Ring({
  value,
  size = 44,
  stroke = 4,
  color = "var(--brand)",
  track = "var(--surface-3)",
  children,
}: {
  /** 0–100 */
  value: number;
  size?: number;
  stroke?: number;
  color?: string;
  track?: string;
  children?: React.ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${Math.round(clamped)}% concluído`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={track}
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - clamped / 100)}
          style={{ transition: "stroke-dashoffset 500ms ease-out" }}
        />
      </svg>
      {children && (
        <span className="absolute inset-0 grid place-items-center">
          {children}
        </span>
      )}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.09em] text-[var(--fg-faint)]">
            {eyebrow}
          </p>
        )}
        <h2 className="font-[family-name:var(--font-display)] text-[1.5rem] font-semibold tracking-tight text-[var(--fg-strong)]">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

export function Stat({
  label,
  value,
  hint,
  icon,
  accent = "var(--fg-strong)",
}: {
  label: string;
  value: string | number;
  hint?: string;
  icon?: React.ReactNode;
  accent?: string;
}) {
  return (
    <div className="surface-card p-4">
      <div className="flex items-center gap-2 text-[var(--fg-faint)]">
        {icon}
        <span className="text-[0.75rem] font-bold uppercase tracking-[0.08em]">
          {label}
        </span>
      </div>
      <p
        className="tabular mt-2 font-[family-name:var(--font-display)] text-[1.875rem] leading-none font-bold"
        style={{ color: accent }}
      >
        {value}
      </p>
      {hint && (
        <p className="mt-1.5 text-[0.8125rem] text-[var(--fg-muted)]">{hint}</p>
      )}
    </div>
  );
}
