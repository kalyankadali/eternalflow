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

const marks = ["01", "02", "03", "04"] as const;

export default function ForAgentsPage() {
  const { hero, sections, sampleCta, outreachNote, cta } = forAgentsCopy;

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

      <Section alt>
        <div className="grid gap-3.5 sm:grid-cols-2">
          {sections.map((section, i) => (
            <article key={section.h2} className="ef-card ef-bar-left p-6">
              <div className="ef-icon-well">{marks[i] ?? "•"}</div>
              <h2 className="text-lg font-semibold text-ef-ink">{section.h2}</h2>
              <p className="mt-2 text-sm text-ef-muted">{section.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-ef-muted">{outreachNote}</p>
      </Section>

      <CtaBand
        h2="Build a brand buyers can send to a friend"
        body="A five-pager with WhatsApp CTAs — ready for DMs and referrals."
        primaryLabel={cta.label}
      />
    </>
  );
}
