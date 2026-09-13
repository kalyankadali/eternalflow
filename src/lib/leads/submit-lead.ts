import { appendLeadSheet } from "./append-sheet";
import { postCrmWebhook } from "./crm-webhook";
import { notifyLeadEmail } from "./notify-email";
import type { LeadPayload } from "./types";

/** Fan-out to configured sinks; never throws to the API route. */
export async function submitLead(payload: LeadPayload): Promise<void> {
  const results = await Promise.allSettled([
    notifyLeadEmail(payload),
    appendLeadSheet(payload),
    postCrmWebhook(payload),
  ]);

  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[lead:submit] sink failed", result.reason);
    }
  }
}
