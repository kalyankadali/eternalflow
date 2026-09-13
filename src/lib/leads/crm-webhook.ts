import type { LeadPayload } from "./types";

async function postJson(url: string, body: unknown): Promise<void> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`crm webhook ${res.status}`);
  }
}

/** Week 1 stub: POST to LEAD_WEBHOOK_URL when set; one retry. */
export async function postCrmWebhook(payload: LeadPayload): Promise<void> {
  const url = process.env.LEAD_WEBHOOK_URL?.trim();
  if (!url) return;

  try {
    await postJson(url, payload);
  } catch (err) {
    console.warn("[lead:crm] retry after", err);
    await postJson(url, payload);
  }
}
