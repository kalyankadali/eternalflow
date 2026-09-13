import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { pricingTiers } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-ef-accent">
            Real estate websites · Hyderabad
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ef-ink sm:text-5xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 text-lg text-ef-muted">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/get-started" size="lg">
              Book free review
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" size="lg">
              See sample sites
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section alt>
        <ul className="flex flex-wrap items-center justify-center gap-3 text-sm text-ef-muted sm:gap-6">
          {[
            "Built for real estate",
            "Based in Hyderabad",
            "Productized packages",
            "WhatsApp-first support",
          ].map((item) => (
            <li
              key={item}
              className="rounded-full border border-ef-border bg-ef-surface px-4 py-1.5"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">
              Packages
            </h2>
            <p className="mt-1 text-ef-muted">
              Clear tiers — Starter, Growth, and Pro. No proposal theatre.
            </p>
          </div>
          <Link
            href="/pricing"
            className="text-sm font-medium text-ef-accent hover:underline"
          >
            See full pricing →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className="rounded-[var(--ef-radius-card)] border border-ef-border bg-ef-surface p-5 shadow-[var(--ef-shadow-md)]"
            >
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-ef-ink">{tier.name}</h3>
                {tier.popular ? (
                  <span className="rounded-full bg-ef-accent-muted px-2 py-0.5 text-xs font-medium text-ef-accent">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-ef-muted">{tier.blurb}</p>
              <p className="mt-3 text-xl font-semibold tracking-tight text-ef-ink">{tier.priceLabel}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <Link href="/services" className="font-medium text-ef-accent hover:underline">
            Services
          </Link>
          <Link href="/real-estate" className="font-medium text-ef-accent hover:underline">
            For projects
          </Link>
          <Link href="/for-agents" className="font-medium text-ef-accent hover:underline">
            For agents
          </Link>
          <Link href="/process" className="font-medium text-ef-accent hover:underline">
            Our process
          </Link>
        </div>
      </Section>
    </>
  );
}
