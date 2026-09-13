import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/Section";
import { forAgentsCopy } from "@/data";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.forAgents.title },
  description: pageMeta.forAgents.description,
};

export default function ForAgentsPage() {
  const { hero, sections, sampleCta, outreachNote, cta } = forAgentsCopy;

  return (
    <>
      <Section className="pt-10">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-ef-accent">
            For agents
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
            {hero.h1}
          </h1>
          <p className="mt-4 text-lg text-ef-muted">{hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
            <ButtonLink href={sampleCta.href} variant="secondary">
              {sampleCta.label}
            </ButtonLink>
          </div>
        </div>
      </Section>

      {sections.map((section, i) => (
        <Section key={section.h2} alt={i % 2 === 0}>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">
              {section.h2}
            </h2>
            <p className="mt-3 text-ef-muted">{section.body}</p>
          </div>
        </Section>
      ))}

      <Section>
        <p className="mx-auto max-w-2xl text-sm text-ef-muted">{outreachNote}</p>
      </Section>

      <CtaBand
        h2="Build a brand buyers can send to a friend"
        body="A five-pager with WhatsApp CTAs — ready for DMs and referrals."
        primaryLabel={cta.label}
      />
    </>
  );
}
