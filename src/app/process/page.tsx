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
      <section className="relative overflow-hidden px-5 pt-10 pb-8 text-center md:px-7 sm:pt-14">
        <div className="ef-orb absolute right-[10%] -top-12 h-[220px] w-[220px]" />
        <div className="relative z-[1] mx-auto max-w-[1180px]">
          <p className="ef-eyebrow mb-4 justify-center">
            <i className="dot" />
            Delivery OS
          </p>
          <h1 className="ef-display mx-auto max-w-[16ch]">{hero.h1}</h1>
          <p className="ef-sec-lede mx-auto mt-4">{hero.sub}</p>
        </div>
      </section>

      <Section alt>
        <ol className="mx-auto grid max-w-[900px] gap-3.5">
          {steps.map((step) => (
            <li key={step.n} className="ef-card flex gap-4 p-5">
              <span className="ef-icon-well shrink-0 !m-0">{step.n}</span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h2 className="m-0 text-lg font-semibold text-ef-ink">{step.title}</h2>
                  <span className="text-xs font-medium text-ef-muted">{step.duration}</span>
                </div>
                <p className="mt-1.5 text-sm text-ef-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="ef-panel mx-auto max-w-[760px] p-7 text-center">
          <h2 className="ef-sec-title">{raci.h2}</h2>
          <p className="ef-sec-lede mx-auto mt-3">{raci.body}</p>
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
