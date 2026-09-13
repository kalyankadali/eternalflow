import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/Section";
import { aboutCopy } from "@/data";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.about.title },
  description: pageMeta.about.description,
};

export default function AboutPage() {
  const { hero, why, model, team, values, location, cta } = aboutCopy;

  return (
    <>
      <section className="relative overflow-hidden px-5 pt-10 pb-8 text-center md:px-7 sm:pt-14">
        <div className="ef-orb absolute -top-14 left-[15%] h-[240px] w-[240px]" />
        <div className="relative z-[1] mx-auto max-w-[1180px]">
          <p className="ef-eyebrow mb-4 justify-center">
            <i className="dot" />
            About
          </p>
          <h1 className="ef-display mx-auto max-w-[16ch]">{hero.h1}</h1>
          <p className="ef-sec-lede mx-auto mt-4">{hero.sub}</p>
        </div>
      </section>

      <Section alt>
        <div className="grid gap-3.5 md:grid-cols-2">
          <article className="ef-card ef-bar-left p-6">
            <h2 className="ef-sec-title text-[1.35rem]">{why.h2}</h2>
            <p className="mt-3 text-sm text-ef-muted">{why.body}</p>
          </article>
          <article className="ef-card ef-bar-left p-6">
            <h2 className="ef-sec-title text-[1.35rem]">{model.h2}</h2>
            <p className="mt-3 text-sm text-ef-muted">{model.body}</p>
          </article>
        </div>
      </Section>

      <Section>
        <h2 className="ef-sec-title text-center">{team.h2}</h2>
        <div className="mt-8 grid gap-3.5 md:grid-cols-3">
          {team.people.map((person) => (
            <article key={person.name} className="ef-card flex flex-col items-center p-6 text-center">
              <div
                className="grid h-16 w-16 place-items-center rounded-full border border-ef-accent-soft bg-ef-accent-muted text-sm font-extrabold text-ef-accent-strong sm:h-20 sm:w-20 sm:text-base"
                aria-hidden
              >
                {person.initials}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ef-ink">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-ef-accent">{person.role}</p>
              <p className="mt-2 text-sm text-ef-muted">{person.bio}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="ef-sec-title text-center">Values</h2>
        <div className="mt-8 grid gap-3.5 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="ef-card p-6">
              <div className="ef-icon-well">{value.title.slice(0, 1)}</div>
              <h3 className="mt-3 text-lg font-semibold text-ef-ink">{value.title}</h3>
              <p className="mt-2 text-sm text-ef-muted">{value.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="ef-panel mx-auto max-w-[760px] p-7 text-center">
          <h2 className="ef-sec-title">{location.h2}</h2>
          <p className="ef-sec-lede mx-auto mt-3">{location.body}</p>
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
