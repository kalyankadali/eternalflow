import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";

/** Fixed WhatsApp FAB — hides below md when sticky bar present; still available on desktop. */
export function WhatsAppFab() {
  const href = getWhatsAppUrl();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteConfig.cta.whatsapp}
      className="fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--ef-shadow-lg)] transition-transform hover:scale-105 md:inline-flex"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.28 4.92L2 22l5.25-1.38A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.8 14.25c-.24.68-1.4 1.25-1.93 1.33-.5.08-1.13.11-1.82-.11-.42-.14-.96-.31-1.65-.61-2.9-1.26-4.78-4.2-4.93-4.4-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.45.27-.29.59-.36.79-.36h.57c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.29.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.39-.24.66-.14.27.1 1.72.81 2.01.96.29.15.49.22.56.34.07.12.07.7-.17 1.38z" />
      </svg>
    </a>
  );
}
