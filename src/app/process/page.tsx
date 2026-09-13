import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/Section";
import { processCopy } from "@/data";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.process.title },
  description: pageMeta.process.description,
};

export default function ProcessPage() {
  const { hero, steps, raci, cta } = processCopy;

  return (
    <>
      <Section className="pt-10">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
            {hero.h1}
          </h1>
          <p className="mt-4 text-lg text-ef-muted">{hero.sub}</p>
        </div>
      </Section>

      <Section alt>
        <ol className="mx-auto max-w-3xl space-y-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="flex gap-4 rounded-[var(--ef-radius-card)] border border-ef-border bg-ef-surface p-5 shadow-[var(--ef-shadow-sm)]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ef-accent text-sm font-semibold text-ef-on-accent">
                {step.n}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h2 className="text-lg font-semibold text-ef-ink">{step.title}</h2>
                  <span className="text-xs text-ef-muted">{step.duration}</span>
                </div>
                <p className="mt-1 text-sm text-ef-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">
            {raci.h2}
          </h2>
          <p className="mt-3 text-ef-muted">{raci.body}</p>
        </div>
      </Section>

      <CtaBand
        h2="See how four weeks would look for you"
        body="Book a free website review. We'll map discovery to launch against how you get enquiries today."
        primaryLabel={cta.label}
        primaryHref={cta.href}
      />
    </>
  );
}
