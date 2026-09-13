import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { MockBrowser } from "@/components/MockBrowser";
import { Section } from "@/components/Section";
import { realEstateCopy } from "@/data";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.realEstate.title },
  description: pageMeta.realEstate.description,
};

const marks = ["01", "02", "03", "04", "05"] as const;

export default function RealEstatePage() {
  const { hero, sections, sampleCta, cta } = realEstateCopy;

  return (
    <>
      <section className="relative overflow-hidden pt-9 pb-12 sm:pt-14 sm:pb-16">
        <div className="ef-orb absolute -top-10 right-[8%] h-[260px] w-[260px]" />
        <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 md:px-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="ef-eyebrow mb-4">
              <i className="dot" />
              Developers &amp; projects
            </p>
            <h1 className="ef-display mb-4 max-w-[16ch]">{hero.h1}</h1>
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
          <div className="relative" aria-hidden="true">
            <MockBrowser url="lakeviewresidences.in">
              <div className="min-h-[220px] p-3">
                <div className="mb-2 flex items-center justify-between text-[11px] font-bold">
                  <span>Lakeview</span>
                  <span className="font-medium text-ef-muted">Residences · Plans · Visit</span>
                </div>
                <div
                  className="ef-photo relative mb-2.5 h-[110px] overflow-hidden rounded-xl"
                  style={{
                    background:
                      "radial-gradient(ellipse at 60% 20%, var(--ef-accent-soft), var(--ef-wash-3))",
                  }}
                >
                  <div className="absolute bottom-2.5 left-3 text-ef-on-accent">
                    <strong className="block text-sm tracking-tight">Lakeview Residences</strong>
                    <span className="text-[11px] opacity-90">Gachibowli · Site visits open</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["3 BHK", "Club", "Inventory"].map((label) => (
                    <div
                      key={label}
                      className="rounded-lg border border-ef-border bg-ef-surface-2 p-2 text-center text-[10px] font-medium text-ef-muted"
                    >
                      <div
                        className="ef-photo mb-1.5 h-10 rounded-md"
                        style={{
                          background:
                            "radial-gradient(ellipse at 40% 60%, var(--ef-accent-muted), var(--ef-wash-1))",
                        }}
                      />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </MockBrowser>
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
      </Section>

      <CtaBand
        h2="Ready to launch a project site that books visits?"
        body="Share the project that's live — or the one you're about to announce."
        primaryLabel={cta.label}
      />
    </>
  );
}
