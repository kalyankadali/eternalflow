"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 110;
const ROOT_CLASS = "ef-sticky-cta";

/** Fixed bottom bar < lg — Chat on WhatsApp | Talk to Kalyan. Shown after scroll past threshold. */
export function StickyMobileBar() {
  const wa = getWhatsAppUrl();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      const show = window.scrollY > SCROLL_THRESHOLD;
      setVisible(show);
      root.classList.toggle(ROOT_CLASS, show);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      root.classList.remove(ROOT_CLASS);
    };
  }, []);

  const linkTabIndex = visible ? undefined : -1;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-ef-border bg-[color-mix(in_srgb,var(--ef-surface)_92%,transparent)] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-lg transition-[transform,opacity] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        {wa ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={siteConfig.cta.whatsapp}
            tabIndex={linkTabIndex}
            className="inline-flex min-w-0 flex-1 items-center justify-center truncate rounded-full bg-[#25D366] px-2 py-3 text-xs font-semibold text-white no-underline sm:px-3 sm:text-sm"
          >
            {siteConfig.cta.whatsapp}
          </a>
        ) : null}
        <Link
          href="/get-started"
          aria-label={siteConfig.cta.bookReview}
          tabIndex={linkTabIndex}
          className="inline-flex min-w-0 flex-1 items-center justify-center truncate rounded-full bg-ef-accent px-2 py-3 text-xs font-semibold text-ef-on-accent no-underline sm:px-3 sm:text-sm"
        >
          {siteConfig.cta.bookReview}
        </Link>
      </div>
    </div>
  );
}
