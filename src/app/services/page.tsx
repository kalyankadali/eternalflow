import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/Section";
import { servicesCopy } from "@/data";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.services.title },
  description: pageMeta.services.description,
};

const marks = ["W", "C", "R", "Q", "B", "S", "A", "AI"] as const;

export default function ServicesPage() {
  const { hero, sections, cta } = servicesCopy;

  return (
    <>
      <section className="relative overflow-hidden px-5 pt-10 pb-8 text-center md:px-7 sm:pt-14">
        <div className="ef-orb absolute -top-16 left-[12%] h-[240px] w-[240px]" />
        <div className="relative z-[1] mx-auto max-w-[1180px]">
          <p className="ef-eyebrow mb-4 justify-center">
            <i className="dot" />
            Services
          </p>
          <h1 className="ef-display mx-auto max-w-[18ch]">{hero.h1}</h1>
          <p className="ef-sec-lede mx-auto mt-4">{hero.sub}</p>
        </div>
      </section>

      <Section alt>
        <div className="grid gap-3.5 md:grid-cols-2">
          {sections.map((section, i) => (
            <article key={section.id} id={section.id} className="ef-icon-card p-6">
              <div className="ef-icon-well">{marks[i] ?? "•"}</div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <h2 className="m-0 text-lg font-semibold text-ef-ink">{section.h2}</h2>
                {"badge" in section && section.badge ? (
                  <span className="ef-ph">{section.badge}</span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-ef-muted">{section.body}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ef-muted">
                Included in {section.includedIn.join(" · ")}
              </p>
              {"notes" in section && section.notes ? (
                <ul className="mt-3 space-y-2 text-sm text-ef-ink">
                  {section.notes.map((note) => (
                    <li key={note.text} className="flex flex-wrap items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-ef-accent" />
                      {note.text}
                      {"badge" in note && note.badge ? (
                        <span className="ef-ph">{note.badge}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        h2={cta.h2}
        body="Starter, Growth, and Pro list deliverables and INR up front."
        primaryLabel={cta.label}
        primaryHref={cta.href}
        whatsapp={false}
      />
    </>
  );
}
