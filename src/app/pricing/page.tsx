import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/Section";
import {
  alwaysIncluded,
  comparisonRows,
  pricingAddOns,
  pricingFaqs,
  pricingTiers,
} from "@/lib/pricing";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.pricing.title },
  description: pageMeta.pricing.description,
};

function cellValue(v: boolean | string) {
  if (typeof v === "string") return v;
  return v ? "Yes" : "—";
}

const priceLine = pricingTiers.map((t) => `${t.name} ${t.priceLabel}`).join(", ");

export default function PricingPage() {
  return (
    <>
      <Section className="pt-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
            Clear packages. No proposal theatre.
          </h1>
          <p className="mt-4 text-ef-muted">
            Productized websites for real estate projects and agents. Deliverables
            and INR listed — {priceLine}.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.id}
              className={`flex flex-col rounded-[var(--ef-radius-card)] border bg-ef-surface p-6 shadow-[var(--ef-shadow-md)] ${
                tier.popular
                  ? "border-ef-accent ring-1 ring-ef-accent"
                  : "border-ef-border"
              }`}
            >
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-ef-ink">{tier.name}</h2>
                {tier.popular ? (
                  <span className="rounded-full bg-ef-accent-muted px-2.5 py-0.5 text-xs font-medium text-ef-accent">
                    {tier.popularLabel ?? "Most popular"}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-ef-muted">{tier.blurb}</p>
              {tier.priceLabel ? (
                <p className="mt-5 text-4xl font-semibold tracking-tight text-ef-ink">
                  {tier.priceLabel}
                </p>
              ) : null}
              {tier.priceNote ? (
                <p className="mt-1 text-sm text-ef-muted">{tier.priceNote}</p>
              ) : null}
              {tier.includesPrevious ? (
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ef-accent">
                  {tier.includesPrevious}
                </p>
              ) : null}
              <ul className="mt-4 flex-1 space-y-2 text-sm text-ef-ink">
                {tier.features.map((f) => {
                  const badge = tier.featureBadges?.[f];
                  return (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ef-accent" />
                      <span>
                        {f}
                        {badge ? (
                          <span className="ml-2 rounded-full bg-ef-accent-muted px-2 py-0.5 text-xs font-medium text-ef-accent">
                            {badge}
                          </span>
                        ) : null}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6">
                <ButtonLink
                  href="/get-started"
                  variant={tier.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  {tier.ctaLabel}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">
          Compare packages
        </h2>
        <p className="mt-2 text-sm text-ef-muted">
          Feature matrix for Starter, Growth, and Pro.
        </p>
        <div className="mt-6 overflow-x-auto rounded-[var(--ef-radius-card)] border border-ef-border bg-ef-surface">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="border-b border-ef-border bg-ef-surface-2/80 text-ef-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Feature</th>
                <th className="px-4 py-3 font-medium">Starter</th>
                <th className="px-4 py-3 font-medium">Growth</th>
                <th className="px-4 py-3 font-medium">Pro</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-ef-border last:border-0">
                  <td className="px-4 py-3 text-ef-ink">
                    {row.feature}
                    {row.badge ? (
                      <span className="ml-2 rounded-full bg-ef-accent-muted px-2 py-0.5 text-xs font-medium text-ef-accent">
                        {row.badge}
                      </span>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-ef-muted">{cellValue(row.starter)}</td>
                  <td className="px-4 py-3 text-ef-muted">{cellValue(row.growth)}</td>
                  <td className="px-4 py-3 text-ef-muted">{cellValue(row.pro)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">
          Always in the box
        </h2>
        <p className="mt-2 max-w-2xl text-ef-muted">
          Custom design and copywriting, mobile-friendly build, hosting, security,
          SSL, daily backups, and unlimited updates on membership. You don&apos;t
          fight for the basics.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {alwaysIncluded.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-ef-border bg-ef-surface px-4 py-3 text-sm text-ef-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">
          Add-ons (optional)
        </h2>
        <p className="mt-2 text-sm text-ef-muted">
          Marked clearly so buyers don&apos;t assume they&apos;re in every package.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {pricingAddOns.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between rounded-[var(--ef-radius-card)] border border-ef-border bg-ef-surface px-4 py-3 text-sm"
            >
              <span className="text-ef-ink">{item.name}</span>
              <span className="rounded-full bg-ef-accent-muted px-2.5 py-0.5 text-xs font-medium text-ef-accent">
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">
          Pricing questions
        </h2>
        <div className="mt-6 space-y-3">
          {pricingFaqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-[var(--ef-radius-card)] border border-ef-border bg-ef-surface px-5 py-4"
            >
              <summary className="cursor-pointer font-medium text-ef-ink">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm text-ef-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand
        h2="Not sure which package fits?"
        body="Book a free website review. We'll map Starter, Growth, or Pro to how you get enquiries today."
      />
    </>
  );
}
