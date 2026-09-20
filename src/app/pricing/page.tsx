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
  return v ? "✓" : "—";
}

const incMarks = ["D", "C", "H", "∞", "+"] as const;

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-12 text-center md:px-7 sm:pt-12 sm:pb-6">
        <div className="ef-orb absolute -top-20 left-[10%] h-[320px] w-[320px]" />
        <div className="ef-orb absolute right-[8%] -bottom-16 h-[240px] w-[240px]" />
        <div className="relative z-[1] mx-auto max-w-[1180px]">
          <p className="ef-eyebrow mb-4">
            <i className="dot" />
            Starter · Growth · Pro
          </p>
          <h1 className="ef-display mx-auto max-w-[16ch]">
            Clear packages. No proposal theatre.
          </h1>
          <p className="mx-auto mt-4 max-w-[46ch] text-[1.08rem] text-ef-muted">
            Websites for real estate builders and agents. One-off fees — Starter
            ₹24,999, Growth ₹39,999, Pro ₹59,999.
          </p>
        </div>
      </section>

      <Section className="pt-3 sm:pt-3">
        <div className="grid items-stretch gap-4 lg:grid-cols-3 lg:py-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.id}
              className={`ef-price-card ${tier.popular ? "featured" : ""}`}
            >
              {tier.popular ? (
                <span className="ef-chip">{tier.popularLabel ?? "Most popular"}</span>
              ) : null}
              <h2 className="m-0 text-xl font-semibold text-ef-ink">{tier.name}</h2>
              <p className="m-0 text-sm text-ef-muted">{tier.blurb}</p>
              {tier.priceLabel ? (
                <p className="text-4xl font-semibold tracking-tight text-ef-ink">
                  {tier.priceLabel}
                </p>
              ) : null}
              {tier.priceNote ? (
                <p className="-mt-2 text-sm text-ef-muted">{tier.priceNote}</p>
              ) : null}
              {tier.includesPrevious ? (
                <p className="text-xs font-medium uppercase tracking-wide text-ef-accent">
                  {tier.includesPrevious}
                </p>
              ) : null}
              <ul className="m-0 flex-1 list-none space-y-2 p-0 text-sm text-ef-muted">
                {tier.features.map((f) => {
                  const badge = tier.featureBadges?.[f];
                  return (
                    <li key={f} className="flex gap-2 text-ef-ink">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ef-accent" />
                      <span>
                        {f}
                        {badge ? <span className="ef-ph ml-2">{badge}</span> : null}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-2">
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
        <h2 className="ef-sec-title text-center">Compare packages</h2>
        <p className="ef-sec-lede mx-auto mb-6 text-center">
          Feature matrix for Starter, Growth, and Pro.
        </p>
        <p className="mb-2 text-center text-xs font-medium text-ef-muted lg:hidden" aria-hidden="true">
          Swipe for full compare →
        </p>
        <div className="overflow-x-auto overscroll-x-contain rounded-[var(--ef-radius-card-lg)] border border-ef-border bg-ef-surface shadow-[var(--ef-shadow-md)] [-webkit-overflow-scrolling:touch]">
          <table className="w-full min-w-[36rem] border-collapse text-left text-[13px]">
            <thead>
              <tr>
                <th className="sticky left-0 z-[1] bg-ef-surface-2 px-4 py-3.5 font-semibold text-ef-ink">Feature</th>
                <th className="bg-ef-surface-2 px-4 py-3.5 font-semibold text-ef-ink">Starter</th>
                <th className="ef-col-g px-4 py-3.5 font-semibold">Growth</th>
                <th className="bg-ef-surface-2 px-4 py-3.5 font-semibold text-ef-ink">Pro</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-ef-border last:border-0">
                  <td className="sticky left-0 z-[1] bg-ef-surface px-4 py-3.5 text-ef-ink">
                    {row.feature}
                    {row.badge ? <span className="ef-ph ml-2">{row.badge}</span> : null}
                  </td>
                  <td className={`px-4 py-3.5 text-ef-muted ${row.starter === true ? "ef-check" : ""}`}>
                    {cellValue(row.starter)}
                  </td>
                  <td
                    className={`ef-col-g px-4 py-3.5 text-ef-muted ${row.growth === true ? "ef-check" : ""}`}
                  >
                    {cellValue(row.growth)}
                  </td>
                  <td className={`px-4 py-3.5 text-ef-muted ${row.pro === true ? "ef-check" : ""}`}>
                    {cellValue(row.pro)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <h2 className="ef-sec-title text-center">Always in the box</h2>
        <p className="ef-sec-lede mx-auto mb-6 text-center">
          Unlimited updates listed in your package. Starter, Growth, and Pro are
          one-off project fees. After launch, optional monthly maintenance keeps
          copy, launches, and inventory current (₹4,999/mo) — separate from the
          one-off package fee.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {alwaysIncluded.map((item, i) => (
            <li
              key={item}
              className="rounded-[var(--ef-radius-card)] border border-ef-border bg-ef-surface px-4 py-[22px] text-center text-sm font-semibold text-ef-ink shadow-[var(--ef-shadow-sm)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--ef-shadow-md)]"
            >
              <div className="ef-icon-well mx-auto">{incMarks[i] ?? "•"}</div>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <h2 className="ef-sec-title text-center">Add-ons (optional)</h2>
        <p className="ef-sec-lede mx-auto mb-6 text-center">
          Marked clearly so buyers don&apos;t assume they&apos;re in every package.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {pricingAddOns.map((item) => (
            <li key={item.name} className="ef-addon">
              <span className="ef-ph">{item.status}</span>
              <h3 className="mt-2.5 mb-1.5 text-[1.05rem] font-semibold text-ef-ink">{item.name}</h3>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="ef-sec-title text-center">Pricing questions</h2>
        <div className="ef-faq mx-auto mt-6 max-w-[760px]">
          {pricingFaqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p className="pb-4 text-sm text-ef-muted">{faq.a}</p>
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
