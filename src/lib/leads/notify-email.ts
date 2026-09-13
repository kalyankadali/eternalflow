import type { LeadPayload } from "./types";

/**
 * Week 1 stub: log lead; optionally POST to a future transactional provider.
 * Set LEAD_NOTIFY_EMAIL when a real provider is wired.
 */
export async function notifyLeadEmail(payload: LeadPayload): Promise<void> {
  const to = process.env.LEAD_NOTIFY_EMAIL?.trim();
  if (!to) {
    console.info("[lead:email:stub]", { to: null, payload });
    return;
  }
  // Provider hook (Resend/Postmark) — stub until keys exist
  console.info("[lead:email:stub]", {
    to,
    subject: `Eternalflow lead — ${payload.name} (${payload.package})`,
    payload,
  });
}
