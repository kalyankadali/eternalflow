import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/Section";
import { servicesCopy } from "@/data";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.services.title },
  description: pageMeta.services.description,
};

export default function ServicesPage() {
  const { hero, sections, cta } = servicesCopy;

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

      {sections.map((section, i) => (
        <Section key={section.id} alt={i % 2 === 0} id={section.id}>
          <div className="mx-auto max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">
                {section.h2}
              </h2>
              {"badge" in section && section.badge ? (
                <span className="rounded-full bg-ef-accent-muted px-2.5 py-0.5 text-xs font-medium text-ef-accent">
                  {section.badge}
                </span>
              ) : null}
            </div>
            <p className="mt-3 text-ef-muted">{section.body}</p>
            <p className="mt-3 text-xs uppercase tracking-wide text-ef-muted">
              Included in {section.includedIn.join(" · ")}
            </p>
            {"notes" in section && section.notes ? (
              <ul className="mt-4 space-y-2 text-sm text-ef-ink">
                {section.notes.map((note) => (
                  <li key={note.text} className="flex flex-wrap items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ef-accent" />
                    {note.text}
                    {"badge" in note && note.badge ? (
                      <span className="rounded-full bg-ef-accent-muted px-2 py-0.5 text-xs font-medium text-ef-accent">
                        {note.badge}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Section>
      ))}

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
