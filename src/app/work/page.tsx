import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/Section";
import { workDemos } from "@/data";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.work.title },
  description: pageMeta.work.description,
};

export default function WorkPage() {
  return (
    <>
      <Section className="pt-10">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
            Sample sites for outreach
          </h1>
          <p className="mt-4 text-lg text-ef-muted">
            Screenshot-ready demos for project and agent cold outreach. Labeled
            clearly — these are not live client case studies.
          </p>
        </div>
      </Section>

      <Section alt>
        <div className="grid gap-6 md:grid-cols-2">
          {workDemos.map((demo) => (
            <article
              key={demo.slug}
              className="flex flex-col rounded-[var(--ef-radius-card-lg)] border border-ef-border bg-ef-surface p-6 shadow-[var(--ef-shadow-md)]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-ef-accent-muted px-2.5 py-0.5 text-xs font-medium text-ef-accent">
                  {demo.demoLabel}
                </span>
                <span className="text-xs text-ef-muted">
                  {demo.industry} · {demo.location}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-ef-ink">{demo.title}</h2>
              <p className="mt-1 text-sm text-ef-muted">{demo.subtitle}</p>
              <p className="mt-3 text-sm text-ef-ink">{demo.summary}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ef-muted">
                {demo.built.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ef-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ef-muted">{demo.resultPlaceholder}</p>
              <Link
                href={`/work/${demo.slug}`}
                className="mt-5 text-sm font-medium text-ef-accent hover:underline"
              >
                View demo narrative →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        h2="Want a site like these for your project or brand?"
        body="Book a free website review. We'll map the right package to how you get enquiries."
      />
    </>
  );
}
