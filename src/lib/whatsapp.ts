import { siteConfig } from "./site";

export function getWhatsAppNumber(): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();
  if (!raw) return null;
  const digits = raw.replace(/\D/g, "");
  return digits || null;
}

export function getWhatsAppUrl(prefill?: string): string | null {
  const number = getWhatsAppNumber();
  if (!number) return null;
  const text = encodeURIComponent(
    prefill ?? siteConfig.defaultWhatsAppMessage
  );
  return `https://wa.me/${number}?text=${text}`;
}
