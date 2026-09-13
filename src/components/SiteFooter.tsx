import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { WhatsAppLink } from "./WhatsAppLink";
import Link from "next/link";

const columns = [
  {
    title: "Offer",
    links: [
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/process", label: "Process" },
      { href: "/get-started", label: "Book a free review with Kalyan" },
    ],
  },
  {
    title: "Niche",
    links: [
      { href: "/real-estate", label: "Real estate projects" },
      { href: "/for-agents", label: "For agents" },
      { href: "/work", label: "Sample work" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="ef-footer mt-auto border-t border-ef-border bg-ef-surface-2">
      <Container className="grid gap-7 py-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="space-y-3 text-[15px] leading-relaxed text-ef-muted">
          <Logo />
          <p>
            Productized websites, CRM &amp; ads for real estate builders and agents in India.
          </p>
          <p>
            Based in {siteConfig.location.city}, {siteConfig.location.region}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="block text-sm text-ef-muted no-underline hover:text-ef-accent"
          >
            {siteConfig.email}
          </a>
          <WhatsAppLink className="inline-flex text-sm font-medium text-ef-muted no-underline hover:text-ef-accent" />
          <p className="text-xs text-ef-muted">Talk to Kalyan — WhatsApp first.</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <strong className="mb-2.5 block text-[13px] font-semibold uppercase tracking-wider text-ef-ink">
              {col.title}
            </strong>
            <ul className="space-y-1.5 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ef-muted no-underline hover:text-ef-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-ef-border py-4">
        <Container className="flex flex-col gap-2 text-xs text-ef-muted sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span>{siteConfig.tagline}</span>
        </Container>
      </div>
    </footer>
  );
}
