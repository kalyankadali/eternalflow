import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { HeroStage } from "@/components/HeroStage";
import { MockBrowser } from "@/components/MockBrowser";
import { Section } from "@/components/Section";
import { homeCopy, workDemos } from "@/data";
import { pricingTiers } from "@/lib/pricing";
import { pageMeta } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: { absolute: pageMeta.home.title },
  description: pageMeta.home.description,
  openGraph: {
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.home.title,
    description: pageMeta.home.description,
  },
};

const offerMarks = ["W", "C", "A"] as const;

const workUrls: Record<string, string> = {
  "lakeview-residences": "lakeviewresidences.in",
  "ananya-rao-hyderabad-realtor": "ananyarao.in",
};

export default function HomePage() {
  const { hero, trust, problem, offer, packages, niche, work, process, testimonials, finalCta } =
    homeCopy;
  const wa = getWhatsAppUrl();
  const primaryHref =
    hero.primaryCta.href === "whatsapp" ? (wa ?? "/get-started") : hero.primaryCta.href;
  const primaryLabel =
    hero.primaryCta.href === "whatsapp" && !wa
      ? siteConfig.cta.bookReview
      : hero.primaryCta.label;

  return (
    <>
      <section className="relative overflow-hidden pt-9 pb-12 sm:pt-14 sm:pb-[72px]">
        <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 md:px-7 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div>
            <p className="ef-eyebrow mb-4">
              <i className="dot" />
              {hero.brand}
            </p>
            <p className="mb-2.5 text-[13px] font-semibold uppercase tracking-[0.04em] text-ef-muted">
              Hyderabad · Real estate specialists
            </p>
            <h1 className="ef-display mb-4 max-w-[18ch] sm:max-w-[20ch]">{hero.h1}</h1>
            <p className="mb-3 max-w-[42ch] text-[1.12rem] text-ef-muted">{hero.sub}</p>
            <p className="mb-7 max-w-[46ch] text-base text-ef-muted">{hero.body}</p>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink href={primaryHref} size="lg" className="w-full sm:w-auto" external={primaryHref.startsWith("https://wa.me")}>
                {primaryLabel}
              </ButtonLink>
              {/* md+: secondary button; <md: text link so sticky + hero don't stack two full CTAs */}
              <span className="hidden md:contents">
                <ButtonLink
                  href={hero.secondaryCta.href}
                  variant="secondary"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  {hero.secondaryCta.label}
                </ButtonLink>
              </span>
              <Link
                href={hero.secondaryCta.href}
                className="text-center text-sm font-semibold text-ef-accent no-underline underline-offset-4 hover:underline md:hidden"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-[18px] gap-y-2.5 text-[13px] font-medium text-ef-muted">
              {trust.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-ef-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <HeroStage />
        </div>
      </section>

      <div className="ef-trust">
        <div className="ef-pills mx-auto w-full max-w-[1180px] px-5 md:px-7">
          {trust.map((item) => (
            <span key={item} className="ef-pill">
              {item}
            </span>
          ))}
        </div>
      </div>

      <Section alt>
        <h2 className="ef-sec-title">{problem.h2}</h2>
        <p className="ef-sec-lede mb-8">{problem.intro}</p>
        <div className="ef-bento">
          {problem.cards.map((card, i) => (
            <article
              key={card.label}
              className={`ef-card ef-bar-left p-6 ${i === 0 ? "span-row" : ""}`}
            >
              <div className="ef-icon-well">{String(i + 1).padStart(2, "0")}</div>
              <p className="mt-3.5 text-[1.05rem] font-medium leading-snug text-ef-ink">
                &ldquo;{card.quote}&rdquo;
              </p>
              <h3 className="mt-3 text-[0.95rem] font-semibold text-ef-accent-strong">
                {card.label}
              </h3>
              <p className="mt-2 text-sm text-ef-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="ef-sec-title">{offer.h2}</h2>
        <p className="ef-sec-lede mb-8">{offer.intro}</p>
        <div className="grid gap-3.5 md:grid-cols-3">
          {offer.cards.map((card, i) => (
            <Link
              key={card.h3}
              href={offer.link.href}
              className="ef-icon-card block p-6 text-inherit no-underline hover:border-ef-accent hover:no-underline"
            >
              <div className="ef-icon-well">{offerMarks[i] ?? card.h3[0]}</div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-ef-ink">{card.h3}</h3>
                {"badge" in card && card.badge ? (
                  <span className="ef-ph">{card.badge}</span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-ef-muted">{card.body}</p>
            </Link>
          ))}
        </div>
        <p className="mt-7 text-center font-semibold">
          <Link href={offer.link.href} className="text-ef-accent">
            {offer.link.label} →
          </Link>
        </p>
      </Section>

      <Section wash>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="ef-sec-title">{packages.h2}</h2>
            <p className="ef-sec-lede">{packages.intro}</p>
          </div>
        </div>
        <div className="grid items-stretch gap-4 md:grid-cols-3 md:py-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.id}
              className={`ef-price-card ${tier.popular ? "featured" : ""}`}
            >
              {tier.popular ? (
                <span className="ef-chip">{tier.popularLabel ?? "Most popular"}</span>
              ) : null}
              <h3 className="m-0 text-lg font-semibold text-ef-ink">{tier.name}</h3>
              <p className="m-0 text-sm text-ef-muted">{tier.blurb}</p>
              {tier.priceLabel ? (
                <p className="text-2xl font-semibold tracking-tight text-ef-ink">
                  {tier.priceLabel}
                </p>
              ) : null}
              {tier.priceNote ? (
                <p className="-mt-2 text-xs text-ef-muted">{tier.priceNote}</p>
              ) : null}
              <ButtonLink
                href={tier.popular ? "/get-started" : packages.cta.href}
                variant={tier.popular ? "primary" : "secondary"}
                size="md"
              >
                {tier.popular ? tier.ctaLabel : packages.cta.label}
              </ButtonLink>
            </article>
          ))}
        </div>
        <p className="mt-7 text-center font-semibold">
          <Link href={packages.cta.href} className="text-ef-accent">
            {packages.cta.label} →
          </Link>
        </p>
      </Section>

      <Section>
        <h2 className="ef-sec-title mb-8">{niche.h2}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {niche.panels.map((panel, i) => (
            <article
              key={panel.h3}
              className={`ef-split-panel flex min-h-[280px] flex-col p-7 sm:p-8 ${
                i === 0 ? "ef-panel-dev" : "ef-panel-agent"
              }`}
            >
              <p className="ef-eyebrow mb-3 self-start">
                <i className="dot" />
                {panel.audience}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-ef-ink">{panel.h3}</h3>
              <p className="mt-2 mb-5 flex-1 text-sm text-ef-muted">{panel.body}</p>
              <ButtonLink href={panel.cta.href} variant="secondary" size="md" className="self-start">
                {panel.cta.label}
              </ButtonLink>
            </article>
          ))}
        </div>
      </Section>

      <Section alt id="work">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="ef-sec-title">{work.h2}</h2>
            <p className="ef-sec-lede">{work.intro}</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {workDemos.map((demo) => (
            <Link
              key={demo.slug}
              href={`/work/${demo.slug}`}
              className="ef-work-card overflow-hidden text-inherit no-underline hover:no-underline"
            >
              <MockBrowser url={workUrls[demo.slug] ?? "eternalflow.co"} className="m-3 rounded-xl">
                <div
                  className="ef-photo h-[110px]"
                  style={
                    demo.industry === "Agent"
                      ? {
                          background:
                            "radial-gradient(ellipse at 60% 20%, var(--ef-accent-soft), var(--ef-wash-3))",
                        }
                      : undefined
                  }
                />
              </MockBrowser>
              <div className="px-4 pb-4">
                <span className="ef-ph">{demo.demoLabel}</span>
                <h3 className="mt-2 text-lg font-semibold text-ef-ink">{demo.title}</h3>
                <p className="mt-0.5 text-sm text-ef-muted">{demo.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-7 text-center font-semibold">
          <Link href={work.cta.href} className="text-ef-accent">
            {work.cta.label} →
          </Link>
        </p>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="ef-sec-title">{process.h2}</h2>
          <p className="ef-sec-lede mx-auto">{process.body}</p>
        </div>
        <ol className="ef-steps mt-10">
          {process.steps.map((step, i) => (
            <li key={step} className="ef-step">
              <div className="n">{i === process.steps.length - 1 ? "∞" : String(i + 1).padStart(2, "0")}</div>
              <strong className="block text-sm">{step}</strong>
            </li>
          ))}
        </ol>
      </Section>

      {testimonials.visible ? (
        <Section alt>
          <h2 className="ef-sec-title">{testimonials.h2}</h2>
        </Section>
      ) : null}

      <CtaBand h2={finalCta.h2} body={finalCta.body} primaryLabel={finalCta.primaryCta.label} primaryHref={finalCta.primaryCta.href} />
    </>
  );
}
