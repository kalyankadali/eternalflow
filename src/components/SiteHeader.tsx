"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "./Button";
import { Container } from "./Container";
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

  return (
    <header className="sticky top-0 z-40 border-b border-ef-border/80 bg-ef-surface/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-ef-ink">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-ef-accent text-sm font-bold text-white">
            Ef
          </span>
          <span>Eternalflow</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-ef-muted md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ef-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href="/get-started" size="sm" className="hidden sm:inline-flex">
            Book free review
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ef-border md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
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
        <div className="border-t border-ef-border bg-ef-surface md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-ef-ink hover:bg-ef-accent-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="rounded-xl px-3 py-2 text-sm font-medium text-ef-accent"
              onClick={() => setOpen(false)}
            >
              Book free review
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
