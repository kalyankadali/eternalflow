import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { MockBrowser } from "@/components/MockBrowser";
import { Section } from "@/components/Section";
import { workDemos } from "@/data";
import { pageMeta } from "@/lib/seo";

export const metadata = {
  title: { absolute: pageMeta.work.title },
  description: pageMeta.work.description,
};

const workUrls: Record<string, string> = {
  "lakeview-residences": "lakeviewresidences.in",
  "ananya-rao-hyderabad-realtor": "ananyarao.in",
};

export default function WorkPage() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <h1 className="ef-display max-w-3xl">Sample sites for outreach</h1>
        <p className="mt-4 max-w-2xl text-lg text-ef-muted">
          Screenshot-ready demos for project and agent cold outreach. Labeled
          clearly — these are not live client case studies.
        </p>
      </Section>

      <Section alt>
        <div className="grid gap-6 md:grid-cols-2">
          {workDemos.map((demo) => (
            <article key={demo.slug} className="ef-work-card flex flex-col overflow-hidden">
              <MockBrowser url={workUrls[demo.slug] ?? "eternalflow.co"} className="m-3 rounded-xl">
                <div
                  className="ef-photo h-[110px]"
                  style={
                    demo.industry === "Agent"
                      ? {
                          background:
                            "radial-gradient(ellipse at 60% 20%, var(--ef-accent-soft), var(--ef-wash-3))",
                          }
                      : undefined
                  }
                />
              </MockBrowser>
              <div className="flex flex-1 flex-col px-6 pb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="ef-ph">{demo.demoLabel}</span>
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
                  className="mt-5 text-sm font-semibold text-ef-accent"
                >
                  View demo narrative →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        h2="Want a site like these for your project or brand?"
        body="Talk to Kalyan. We'll map the right package to how you get enquiries."
      />
    </>
  );
}
