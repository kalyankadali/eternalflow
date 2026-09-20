import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { MockPhone } from "@/components/MockBrowser";
import { Section } from "@/components/Section";
import { forAgentsCopy } from "@/data";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.forAgents.title },
  description: pageMeta.forAgents.description,
};

export default function ForAgentsPage() {
  const { hero, blueprint, packageFit, faqs, dm, sampleCta, cta } = forAgentsCopy;

  return (
    <>
      <section className="relative overflow-hidden pt-9 pb-12 sm:pt-14 sm:pb-16">
        <div className="ef-orb absolute -top-10 right-[8%] h-[260px] w-[260px]" />
        <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 md:px-7 lg:grid-cols-[1.05fr_0.9fr]">
          <div>
            <p className="ef-eyebrow mb-4">
              <i className="dot" />
              For agents
            </p>
            <h1 className="ef-display mb-4">{hero.h1}</h1>
            <p className="mb-7 max-w-[42ch] text-[1.08rem] text-ef-muted">{hero.sub}</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={cta.href} size="lg">
                {cta.label}
              </ButtonLink>
              <ButtonLink href={sampleCta.href} variant="secondary" size="lg">
                {sampleCta.label}
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto w-[220px]" aria-hidden="true">
            <MockPhone>
              <div className="min-h-[280px] rounded-[20px] bg-ef-surface-2 p-3">
                <div className="mb-2.5 flex items-center gap-2">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ef-accent-soft bg-ef-accent-muted text-[13px] font-extrabold text-ef-accent-strong">
                    AR
                  </div>
                  <div>
                    <h4 className="m-0 text-xs font-semibold">Ananya Rao</h4>
                    <div className="text-[10px] text-ef-muted">Hyderabad realtor</div>
                  </div>
                </div>
                <div
                  className="ef-photo h-[88px]"
                  style={{
                    background:
                      "radial-gradient(ellipse at 60% 20%, var(--ef-accent-soft), var(--ef-wash-3))",
                  }}
                />
                <div className="mt-2 rounded-xl border border-ef-border bg-ef-surface p-2.5 text-[11px]">
                  WhatsApp enquiries · <strong>captured</strong>
                </div>
                <div className="mt-2.5 rounded-full bg-ef-accent py-2 text-center text-[11px] font-bold text-ef-on-accent">
                  Chat on WhatsApp
                </div>
              </div>
            </MockPhone>
          </div>
        </div>
      </section>

      <Section>
        <p className="ef-eyebrow mb-3">
          <i className="dot" />
          Blueprint
        </p>
        <h2 className="ef-sec-title mb-2">{blueprint.h2}</h2>
        <p className="ef-sec-lede mb-8">{blueprint.intro}</p>
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {blueprint.pages.map((page, i) => (
            <article key={page.title} className="ef-card ef-bar-left p-6">
              <div className="ef-icon-well">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="text-lg font-semibold text-ef-ink">{page.title}</h3>
              <p className="mt-2 text-sm text-ef-muted">{page.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="ef-sec-title mb-6">{packageFit.h2}</h2>
        <div className="grid gap-3.5 md:grid-cols-3">
          {packageFit.items.map((item) => (
            <article key={item.name} className="ef-card p-6">
              <h3 className="text-lg font-semibold text-ef-ink">{item.name}</h3>
              <p className="mt-1 text-sm font-semibold text-ef-accent-strong">{item.price}</p>
              <p className="mt-3 text-sm text-ef-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="ef-sec-title mb-6">Agent FAQs</h2>
        <div className="ef-faq mx-auto max-w-2xl space-y-2">
          {faqs.map((faq) => (
            <details key={faq.q} className="ef-card px-5 py-3">
              <summary className="cursor-pointer font-semibold text-ef-ink">{faq.q}</summary>
              <p className="mt-2 text-sm text-ef-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="ef-sec-title mb-2">{dm.h2}</h2>
        <p className="ef-sec-lede mb-6">{dm.body}</p>
        <ButtonLink href={sampleCta.href} variant="secondary">
          {sampleCta.label}
        </ButtonLink>
      </Section>

      <CtaBand
        h2="Build a brand buyers can send to a friend"
        body="A five-pager with WhatsApp CTAs — ready for DMs and referrals."
        primaryLabel={cta.label}
      />
    </>
  );
}
