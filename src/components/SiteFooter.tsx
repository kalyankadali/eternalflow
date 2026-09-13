import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { WhatsAppLink } from "./WhatsAppLink";

const columns = [
  {
    title: "Offer",
    links: [
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/process", label: "Process" },
      { href: "/get-started", label: "Book free review" },
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
    <footer className="mt-auto border-t border-ef-border bg-ef-surface">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-ef-accent text-sm font-bold text-white">
              Ef
            </span>
            Eternalflow
          </div>
          <p className="text-sm text-ef-muted">
            Productized websites, CRM &amp; ads for real estate in India.
          </p>
          <p className="text-sm text-ef-muted">
            Based in {siteConfig.location.city}, {siteConfig.location.region}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="block text-sm text-ef-accent hover:underline"
          >
            {siteConfig.email}
          </a>
          <WhatsAppLink className="inline-flex text-sm font-medium text-ef-accent hover:underline" />
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-sm font-semibold text-ef-ink">{col.title}</h3>
            <ul className="space-y-2 text-sm text-ef-muted">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ef-accent">
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
