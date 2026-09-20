"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/for-agents", label: "For Agents" },
  { href: "/real-estate", label: "Real Estate" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`ef-header ${scrolled ? "is-scrolled" : ""}`}>
      <Container className="flex items-center justify-between gap-3 py-3">
        <Logo />

        <nav className="hidden items-center gap-[22px] text-sm font-medium md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 no-underline transition-colors ${
                  active ? "text-ef-accent" : "text-ef-muted hover:text-ef-accent"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-ef-accent" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href="/get-started" size="md" className="hidden sm:inline-flex">
            Review with Kalyan
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ef-border bg-ef-surface text-ef-ink shadow-[var(--ef-shadow-sm)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-ef-border pb-24 md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-ef-ink no-underline hover:bg-ef-accent-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/get-started" size="md" className="mt-1">
              Review with Kalyan
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
