"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useProgress } from "./progress-provider";
import { dueExerciseKeys, levelFromXp } from "@/lib/progress";
import { SearchDialog } from "./search-dialog";
import {
  IconBolt,
  IconBook,
  IconChart,
  IconFlame,
  IconGrid,
  IconMenu,
  IconMoon,
  IconRepeat,
  IconSearch,
  IconSun,
  IconTable,
  IconX,
} from "./icons";

const LINKS = [
  { href: "/", label: "Início", Icon: IconGrid, exact: true },
  { href: "/lessons", label: "Lições", Icon: IconBook },
  { href: "/practice", label: "Revisão", Icon: IconRepeat },
  { href: "/reference", label: "Referência", Icon: IconTable },
  { href: "/progress", label: "Progresso", Icon: IconChart },
];

export function SiteNav() {
  const { state, ready, setSettings } = useProgress();
  const pathname = usePathname();
  // Storing *which* route the menu was opened on means navigating anywhere
  // closes it automatically — no effect, no stale state.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const [search, setSearch] = useState(false);
  const open = openFor === pathname;
  const setOpen = (v: boolean) => setOpenFor(v ? pathname : null);

  // Cmd/Ctrl+K opens search anywhere.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const level = levelFromXp(state.xp);
  const due = ready ? dueExerciseKeys(state).length : 0;
  const isDark = state.settings.theme === "dark";

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--line-soft)] bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-2 px-4 sm:px-6">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[var(--brand)] font-[family-name:var(--font-display)] text-[1.0625rem] font-bold text-[#0a0a12]">
              PE
            </span>
            <span className="hidden font-[family-name:var(--font-display)] text-[1.125rem] font-semibold tracking-tight text-[var(--fg-strong)] sm:block">
              Practical English
            </span>
          </Link>

          <nav className="ml-3 hidden min-w-0 items-center gap-0.5 lg:flex">
            {LINKS.map(({ href, label, Icon, exact }) => {
              const active = isActive(href, exact);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className="relative flex shrink-0 items-center gap-1.5 rounded-[var(--radius-md)] px-2.5 py-2 text-[0.875rem] font-medium transition-colors"
                  style={{
                    color: active ? "var(--fg-strong)" : "var(--fg-muted)",
                    background: active ? "var(--surface-3)" : "transparent",
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                  {href === "/practice" && due > 0 && (
                    <span className="ml-0.5 rounded-full bg-[var(--brand)] px-1.5 py-px text-[0.6875rem] font-bold text-[#0a0a12]">
                      {due > 99 ? "99+" : due}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSearch(true)}
              aria-label="Buscar"
              className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--surface-2)] px-2.5 py-1.5 text-[0.875rem] text-[var(--fg-muted)] transition-colors hover:border-[var(--brand)] hover:text-[var(--fg)]"
            >
              <IconSearch className="h-4 w-4" />
              <span className="hidden xl:inline">Buscar</span>
              <kbd className="en hidden rounded border border-[var(--line)] px-1 text-[0.6875rem] xl:inline">
                ⌘K
              </kbd>
            </button>

            {ready && (
              <div className="hidden items-center gap-1.5 rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--surface-2)] px-2.5 py-1.5 lg:flex">
                <IconFlame
                  className="h-4 w-4"
                  style={{
                    color:
                      state.streak.current > 0
                        ? "var(--color-flame-500)"
                        : "var(--fg-faint)",
                  }}
                />
                <span className="tabular text-[0.875rem] font-semibold text-[var(--fg-strong)]">
                  {state.streak.current}
                </span>
                <span className="mx-1 h-3.5 w-px bg-[var(--line)]" />
                <IconBolt className="h-4 w-4 text-[var(--brand)]" />
                <span className="tabular text-[0.875rem] font-semibold text-[var(--fg-strong)]">
                  {state.xp}
                </span>
                <span className="ml-0.5 hidden text-[0.75rem] text-[var(--fg-faint)] xl:inline">
                  Nv.{level.level}
                </span>
              </div>
            )}

            <button
              type="button"
              onClick={() => setSettings({ theme: isDark ? "light" : "dark" })}
              aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
              className="grid h-9 w-9 place-items-center rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--surface-2)] text-[var(--fg-muted)] transition-colors hover:text-[var(--fg-strong)]"
            >
              {isDark ? (
                <IconSun className="h-4 w-4" />
              ) : (
                <IconMoon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--surface-2)] text-[var(--fg-muted)] lg:hidden"
            >
              {open ? (
                <IconX className="h-4 w-4" />
              ) : (
                <IconMenu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-[var(--line-soft)] bg-[var(--surface)] px-4 py-2 lg:hidden">
            {LINKS.map(({ href, label, Icon, exact }) => {
              const active = isActive(href, exact);
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-[0.9375rem] font-medium"
                  style={{
                    color: active ? "var(--fg-strong)" : "var(--fg-muted)",
                    background: active ? "var(--surface-3)" : "transparent",
                  }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                  {label}
                  {href === "/practice" && due > 0 && (
                    <span className="ml-auto rounded-full bg-[var(--brand)] px-1.5 py-px text-[0.6875rem] font-bold text-[#0a0a12]">
                      {due}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        )}
      </header>

      {/* Mounted only while open so its internal state starts clean. */}
      {search && <SearchDialog onClose={() => setSearch(false)} />}
    </>
  );
}
