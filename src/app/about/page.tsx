import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/Section";
import { aboutCopy } from "@/data";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.about.title },
  description: pageMeta.about.description,
};

export default function AboutPage() {
  const { hero, why, model, values, location, cta } = aboutCopy;

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
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">{why.h2}</h2>
          <p className="mt-3 text-ef-muted">{why.body}</p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">{model.h2}</h2>
          <p className="mt-3 text-ef-muted">{model.body}</p>
        </div>
      </Section>

      <Section alt>
        <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">Values</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[var(--ef-radius-card)] border border-ef-border bg-ef-surface p-6 shadow-[var(--ef-shadow-md)]"
            >
              <h3 className="text-lg font-semibold text-ef-ink">{value.title}</h3>
              <p className="mt-2 text-sm text-ef-muted">{value.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">
            {location.h2}
          </h2>
          <p className="mt-3 text-ef-muted">{location.body}</p>
        </div>
      </Section>

      <CtaBand
        h2="Talk to a Hyderabad team that only does real estate"
        body="No sales pitch. We'll tell you what's costing you enquiries."
        primaryLabel={cta.label}
        primaryHref={cta.href}
      />
    </>
  );
}
