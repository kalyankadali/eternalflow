export type LeadRole = "developer" | "agent" | "brokerage" | "other";
export type LeadPackage = "starter" | "growth" | "pro" | "unsure";

export type LeadPayload = {
  name: string;
  phone: string;
  whatsapp: string;
  role: LeadRole;
  website: string;
  package: LeadPackage;
  message: string;
  source: "get-started";
  receivedAt: string;
};

/** Raw form / JSON body before validation (R6 API). */
export type ContactFormInput = {
  name?: unknown;
  phone?: unknown;
  whatsapp?: unknown;
  role?: unknown;
  website?: unknown;
  package?: unknown;
  message?: unknown;
  /** Honeypot — must stay empty */
  company_website?: unknown;
};

export const LEAD_ROLES: LeadRole[] = [
  "developer",
  "agent",
  "brokerage",
  "other",
];

export const LEAD_PACKAGES: LeadPackage[] = [
  "starter",
  "growth",
  "pro",
  "unsure",
];
