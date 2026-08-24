import { Fragment, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Minimal inline markup renderer                                     */
/*                                                                     */
/*  Supported: **bold**  *italic*  `code`  [[english specimen]]        */
/*  Deliberately tiny — no markdown dependency ships to the client.    */
/* ------------------------------------------------------------------ */

const TOKEN = /(\[\[[^\]]+\]\]|\*\*[^*]+\*\*|`[^`]+`|\*[^*\n]+\*)/g;

export function renderRich(input: string, keyPrefix = "t"): ReactNode[] {
  const out: ReactNode[] = [];
  const parts = input.split(TOKEN);

  parts.forEach((part, i) => {
    if (!part) return;
    const key = `${keyPrefix}-${i}`;

    if (part.startsWith("[[") && part.endsWith("]]")) {
      out.push(
        <span key={key} className="en text-[var(--fg-strong)]">
          {part.slice(2, -2)}
        </span>,
      );
      return;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      out.push(
        <strong key={key} className="font-semibold text-[var(--fg-strong)]">
          {part.slice(2, -2)}
        </strong>,
      );
      return;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      out.push(
        <code
          key={key}
          className="en rounded-[var(--radius-xs)] border border-[var(--line-soft)] bg-[var(--surface-3)] px-1.5 py-px text-[0.88em] text-[var(--fg-strong)]"
        >
          {part.slice(1, -1)}
        </code>,
      );
      return;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      out.push(
        <em key={key} className="italic text-[var(--fg-muted)]">
          {part.slice(1, -1)}
        </em>,
      );
      return;
    }

    out.push(<Fragment key={key}>{part}</Fragment>);
  });

  return out;
}

export function Rich({
  text,
  className,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  as?: "span" | "p" | "div" | "li";
}) {
  return <Tag className={className}>{renderRich(text)}</Tag>;
}
