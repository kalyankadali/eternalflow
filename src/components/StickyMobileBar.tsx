import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

/** Fixed bottom bar < md — WhatsApp | Book review. Hides FAB on mobile. */
export function StickyMobileBar() {
  const wa = getWhatsAppUrl();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ef-border bg-[color-mix(in_srgb,var(--ef-surface)_92%,transparent)] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-lg md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        {wa ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={siteConfig.cta.whatsapp}
            className="inline-flex min-w-0 flex-1 items-center justify-center truncate rounded-full bg-[#25D366] px-2 py-3 text-xs font-semibold text-white no-underline sm:px-3 sm:text-sm"
          >
            WhatsApp
          </a>
        ) : null}
        <Link
          href="/get-started"
          aria-label={siteConfig.cta.bookReview}
          className="inline-flex min-w-0 flex-1 items-center justify-center truncate rounded-full bg-ef-accent px-2 py-3 text-xs font-semibold text-ef-on-accent no-underline sm:px-3 sm:text-sm"
        >
          Book review
        </Link>
      </div>
    </div>
  );
}
