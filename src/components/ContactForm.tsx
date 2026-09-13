"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "pending" | "success" | "error";

const ROLES = [
  { value: "developer", label: "Developer / project" },
  { value: "agent", label: "Agent" },
  { value: "brokerage", label: "Brokerage" },
  { value: "other", label: "Other" },
] as const;

const PACKAGES = [
  { value: "starter", label: "Starter" },
  { value: "growth", label: "Growth" },
  { value: "pro", label: "Pro" },
  { value: "unsure", label: "Not sure" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "pending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const body = Object.fromEntries(data.entries());

    setStatus("pending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = (await res.json().catch(() => null)) as {
        ok?: boolean;
      } | null;
      if (!res.ok || !json?.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-lg flex-col gap-4"
      noValidate
    >
      {/* Honeypot — visually hidden, not display:none */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <label className="flex flex-col gap-1 text-sm text-ef-ink">
        <span>Your name</span>
        <input
          name="name"
          type="text"
          required
          maxLength={120}
          placeholder="Full name"
          className="rounded-xl border border-ef-border bg-ef-surface-2 px-3 py-2 text-ef-ink placeholder:text-ef-muted"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm text-ef-ink">
        <span>Phone</span>
        <input
          name="phone"
          type="tel"
          required
          placeholder="10-digit mobile"
          className="rounded-xl border border-ef-border bg-ef-surface-2 px-3 py-2 text-ef-ink placeholder:text-ef-muted"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm text-ef-ink">
        <span>WhatsApp number</span>
        <input
          name="whatsapp"
          type="tel"
          placeholder="Same as phone? We’ll use this to reply"
          className="rounded-xl border border-ef-border bg-ef-surface-2 px-3 py-2 text-ef-ink placeholder:text-ef-muted"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm text-ef-ink">
        <span>I am a…</span>
        <select
          name="role"
          required
          defaultValue=""
          className="rounded-xl border border-ef-border bg-ef-surface-2 px-3 py-2 text-ef-ink placeholder:text-ef-muted"
        >
          <option value="" disabled>
            Select…
          </option>
          {ROLES.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-sm text-ef-ink">
        <span>Current website</span>
        <input
          name="website"
          type="url"
          placeholder="Optional — paste URL or leave blank"
          className="rounded-xl border border-ef-border bg-ef-surface-2 px-3 py-2 text-ef-ink placeholder:text-ef-muted"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm text-ef-ink">
        <span>Package interest</span>
        <select
          name="package"
          required
          defaultValue=""
          className="rounded-xl border border-ef-border bg-ef-surface-2 px-3 py-2 text-ef-ink placeholder:text-ef-muted"
        >
          <option value="" disabled>
            Select…
          </option>
          {PACKAGES.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1 text-sm text-ef-ink">
        <span>Anything we should know?</span>
        <textarea
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Project launch, city, timeline…"
          className="rounded-xl border border-ef-border bg-ef-surface-2 px-3 py-2 text-ef-ink placeholder:text-ef-muted"
        />
      </label>

      <p className="text-xs text-ef-muted">
        Fields marked required. We reply on WhatsApp within one business day.
      </p>

      <button
        type="submit"
        disabled={status === "pending"}
        className="rounded-full bg-ef-accent px-5 py-2.5 text-sm font-medium text-ef-on-accent hover:bg-ef-accent-strong disabled:opacity-60"
      >
        {status === "pending" ? "Sending…" : "Send my details"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-emerald-700 dark:text-emerald-400" role="status">
          Got it — we&apos;ll reply on WhatsApp within one business day.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-700 dark:text-red-400" role="alert">
          Check the highlighted fields and try again.
        </p>
      ) : null}
    </form>
  );
}
