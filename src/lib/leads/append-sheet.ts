import type { LeadPayload } from "./types";

async function postJson(url: string, body: unknown): Promise<void> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`sheet webhook ${res.status}`);
  }
}

/** Week 1 stub: POST to GOOGLE_SHEET_WEBHOOK_URL when set; one retry. */
export async function appendLeadSheet(payload: LeadPayload): Promise<void> {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL?.trim();
  if (!url) return;

  try {
    await postJson(url, payload);
  } catch (err) {
    console.warn("[lead:sheet] retry after", err);
    await postJson(url, payload);
  }
}
