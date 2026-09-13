import { NextResponse } from "next/server";
import { submitLead } from "@/lib/leads/submit-lead";
import {
  LEAD_PACKAGES,
  LEAD_ROLES,
  type ContactFormInput,
  type LeadPackage,
  type LeadPayload,
  type LeadRole,
} from "@/lib/leads/types";

export const runtime = "nodejs";

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isRole(value: string): value is LeadRole {
  return (LEAD_ROLES as string[]).includes(value);
}

function isPackage(value: string): value is LeadPackage {
  return (LEAD_PACKAGES as string[]).includes(value);
}

function isValidUrl(value: string): boolean {
  if (!value) return true;
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function parseBody(raw: unknown): ContactFormInput {
  if (!raw || typeof raw !== "object") return {};
  return raw as ContactFormInput;
}

export async function POST(request: Request) {
  let raw: unknown;
  const contentType = request.headers.get("content-type") ?? "";

  try {
    if (contentType.includes("application/json")) {
      raw = await request.json();
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const form = await request.formData();
      raw = Object.fromEntries(form.entries());
    } else {
      raw = await request.json().catch(() => ({}));
    }
  } catch {
    return NextResponse.json(
      { ok: false, error: "validation" },
      { status: 400 },
    );
  }

  const body = parseBody(raw);

  // Honeypot: silent success, no sinks
  if (asString(body.company_website).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name);
  const phone = asString(body.phone);
  const whatsappRaw = asString(body.whatsapp);
  const role = asString(body.role);
  const website = asString(body.website);
  const pkg = asString(body.package);
  const message = asString(body.message);

  if (
    !name ||
    name.length > 120 ||
    !phone ||
    !isRole(role) ||
    !isPackage(pkg) ||
    message.length > 2000 ||
    !isValidUrl(website)
  ) {
    return NextResponse.json(
      { ok: false, error: "validation" },
      { status: 400 },
    );
  }

  const payload: LeadPayload = {
    name,
    phone,
    whatsapp: whatsappRaw || phone,
    role,
    website,
    package: pkg,
    message,
    source: "get-started",
    receivedAt: new Date().toISOString(),
  };

  await submitLead(payload);

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "method" },
    { status: 405 },
  );
}
