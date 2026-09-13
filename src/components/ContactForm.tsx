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
        <span>Name</span>
        <input
          name="name"
          type="text"
          required
          maxLength={120}
          className="rounded-xl border border-ef-border bg-ef-surface-2 px-3 py-2 text-ef-ink placeholder:text-ef-muted"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm text-ef-ink">
        <span>Phone</span>
        <input
          name="phone"
          type="tel"
          required
          className="rounded-xl border border-ef-border bg-ef-surface-2 px-3 py-2 text-ef-ink placeholder:text-ef-muted"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm text-ef-ink">
        <span>WhatsApp (optional)</span>
        <input
          name="whatsapp"
          type="tel"
          className="rounded-xl border border-ef-border bg-ef-surface-2 px-3 py-2 text-ef-ink placeholder:text-ef-muted"
        />
      </label>

      <label className="flex flex-col gap-1 text-sm text-ef-ink">
        <span>Role</span>
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
        <span>Website URL (optional)</span>
        <input
          name="website"
          type="url"
          placeholder="https://"
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
        <span>Message (optional)</span>
        <textarea
          name="message"
          rows={4}
          maxLength={2000}
          className="rounded-xl border border-ef-border bg-ef-surface-2 px-3 py-2 text-ef-ink placeholder:text-ef-muted"
        />
      </label>

      <button
        type="submit"
        disabled={status === "pending"}
        className="rounded-full bg-ef-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-ef-accent-strong disabled:opacity-60"
      >
        {status === "pending" ? "Sending…" : "Book free website review"}
      </button>

      {status === "success" ? (
        <p className="text-sm text-emerald-700 dark:text-emerald-400" role="status">
          Thanks — we&apos;ll reply on WhatsApp or email within one business day.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-700 dark:text-red-400" role="alert">
          Something went wrong. Try WhatsApp or refresh and submit again.
        </p>
      ) : null}
    </form>
  );
}
