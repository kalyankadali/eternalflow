import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/Section";
import { homeCopy, workDemos } from "@/data";
import { pricingTiers } from "@/lib/pricing";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.home.title },
  description: pageMeta.home.description,
};

export default function HomePage() {
  const { hero, trust, problem, offer, packages, niche, work, process, testimonials, finalCta } =
    homeCopy;

  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-ef-accent">
            Real estate websites · Hyderabad
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ef-ink sm:text-5xl">
            {hero.h1}
          </h1>
          <p className="mt-5 text-lg text-ef-muted">{hero.sub}</p>
          <p className="mt-3 text-base text-ef-muted">{hero.body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section alt>
        <ul className="flex flex-wrap items-center justify-center gap-3 text-sm text-ef-muted sm:gap-6">
          {trust.map((item) => (
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
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ef-ink sm:text-3xl">
            {problem.h2}
          </h2>
          <p className="mt-3 text-ef-muted">{problem.intro}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {problem.cards.map((card) => (
            <article
              key={card.h3}
              className="rounded-[var(--ef-radius-card)] border border-ef-border bg-ef-surface p-6 shadow-[var(--ef-shadow-md)]"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-ef-accent">
                {card.title}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ef-ink">{card.h3}</h3>
              <p className="mt-2 text-sm text-ef-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ef-ink sm:text-3xl">
            {offer.h2}
          </h2>
          <p className="mt-3 text-ef-muted">{offer.intro}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {offer.cards.map((card) => (
            <article
              key={card.h3}
              className="rounded-[var(--ef-radius-card)] border border-ef-border bg-ef-surface p-6 shadow-[var(--ef-shadow-md)]"
            >
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-ef-ink">{card.h3}</h3>
                {"badge" in card && card.badge ? (
                  <span className="rounded-full bg-ef-accent-muted px-2 py-0.5 text-xs font-medium text-ef-accent">
                    {card.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-ef-muted">{card.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href={offer.link.href} className="text-sm font-medium text-ef-accent hover:underline">
            {offer.link.label} →
          </Link>
        </div>
      </Section>

      <Section>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ef-ink sm:text-3xl">
              {packages.h2}
            </h2>
            <p className="mt-2 max-w-2xl text-ef-muted">{packages.intro}</p>
          </div>
          <Link
            href={packages.cta.href}
            className="text-sm font-medium text-ef-accent hover:underline"
          >
            {packages.cta.label} →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-[var(--ef-radius-card)] border bg-ef-surface p-5 shadow-[var(--ef-shadow-md)] ${
                tier.popular ? "border-ef-accent ring-1 ring-ef-accent" : "border-ef-border"
              }`}
            >
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-ef-ink">{tier.name}</h3>
                {tier.popular ? (
                  <span className="rounded-full bg-ef-accent-muted px-2 py-0.5 text-xs font-medium text-ef-accent">
                    Recommended
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-ef-muted">{tier.blurb}</p>
              {tier.priceLabel ? (
                <p className="mt-3 text-2xl font-semibold tracking-tight text-ef-ink">
                  {tier.priceLabel}
                </p>
              ) : null}
              {tier.priceNote ? (
                <p className="mt-0.5 text-xs text-ef-muted">{tier.priceNote}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="text-center text-2xl font-semibold tracking-tight text-ef-ink sm:text-3xl">
          {niche.h2}
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {niche.panels.map((panel) => (
            <article
              key={panel.h3}
              className="rounded-[var(--ef-radius-card-lg)] border border-ef-border bg-ef-surface p-6 shadow-[var(--ef-shadow-md)] sm:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-ef-accent">
                {panel.audience}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-ef-ink">{panel.h3}</h3>
              <p className="mt-2 text-sm text-ef-muted">{panel.body}</p>
              <Link
                href={panel.cta.href}
                className="mt-4 inline-block text-sm font-medium text-ef-accent hover:underline"
              >
                {panel.cta.label} →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ef-ink sm:text-3xl">
              {work.h2}
            </h2>
            <p className="mt-2 max-w-2xl text-ef-muted">{work.intro}</p>
          </div>
          <Link href={work.cta.href} className="text-sm font-medium text-ef-accent hover:underline">
            {work.cta.label} →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {workDemos.map((demo) => (
            <Link
              key={demo.slug}
              href={`/work/${demo.slug}`}
              className="rounded-[var(--ef-radius-card)] border border-ef-border bg-ef-surface p-6 shadow-[var(--ef-shadow-md)] transition-colors hover:border-ef-accent"
            >
              <span className="rounded-full bg-ef-accent-muted px-2.5 py-0.5 text-xs font-medium text-ef-accent">
                {demo.demoLabel}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ef-ink">{demo.title}</h3>
              <p className="mt-1 text-sm text-ef-muted">{demo.subtitle}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ef-ink sm:text-3xl">
            {process.h2}
          </h2>
          <p className="mt-3 text-ef-muted">{process.body}</p>
        </div>
        <ol className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {process.steps.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-2 rounded-full border border-ef-border bg-ef-surface px-4 py-2 text-sm text-ef-ink"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ef-accent text-xs font-semibold text-ef-on-accent">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </Section>

      {testimonials.visible ? (
        <Section>
          <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">{testimonials.h2}</h2>
        </Section>
      ) : null}

      <CtaBand h2={finalCta.h2} body={finalCta.body} primaryLabel={finalCta.primaryCta.label} />
    </>
  );
}
