import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { alwaysIncluded, comparisonRows, pricingTiers } from "@/lib/pricing";
import { pageTitle } from "@/lib/site";

export const metadata = {
  title: { absolute: pageTitle("Pricing") },
  description:
    "Clear packages for real estate websites — Starter, Growth, and Pro. No proposal theatre.",
};

function cellValue(v: boolean | string) {
  if (typeof v === "string") return v;
  return v ? "Yes" : "—";
}

export default function PricingPage() {
  return (
    <>
      <Section className="pt-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
            Clear packages. No proposal theatre.
          </h1>
          <p className="mt-4 text-ef-muted">
            Productized tiers for real estate businesses and agents. Clear
            public pricing — book a free review to pick the right fit.
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
              <p className="mt-4 text-3xl font-semibold tracking-tight text-ef-ink">{tier.priceLabel}</p>
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
          Always included
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {alwaysIncluded.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-ef-border bg-ef-surface px-4 py-3 text-sm text-ef-ink"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <ButtonLink href="/get-started" size="lg">
            Book free review
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
