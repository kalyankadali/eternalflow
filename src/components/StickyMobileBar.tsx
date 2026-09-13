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
            className="inline-flex flex-1 items-center justify-center rounded-full bg-[#25D366] px-3 py-3 text-sm font-semibold text-white no-underline"
          >
            {siteConfig.cta.whatsapp}
          </a>
        ) : null}
        <Link
          href="/get-started"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-ef-accent px-3 py-3 text-sm font-semibold text-ef-on-accent no-underline"
        >
          {siteConfig.cta.bookReviewShort}
        </Link>
      </div>
    </div>
  );
}
