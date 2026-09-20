import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { getWorkBySlug, workDemos } from "@/data";
import { pageTitle } from "@/lib/site";

export function generateStaticParams() {
  return workDemos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = getWorkBySlug(slug);
  if (!demo) return {};
  return {
    title: { absolute: pageTitle(demo.title) },
    description: demo.summary,
  };
}

export default async function WorkDemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = getWorkBySlug(slug);
  if (!demo) notFound();

  return (
    <>
      <Section className="pt-10">
        <p className="text-sm">
          <Link href="/work" className="font-medium text-ef-accent hover:underline">
            ← All work
          </Link>
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-ef-accent-muted px-2.5 py-0.5 text-xs font-medium text-ef-accent">
            {demo.demoLabel}
          </span>
          <span className="text-xs text-ef-muted">
            {demo.industry} · {demo.location}
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
          {demo.title}
        </h1>
        <p className="mt-2 text-lg text-ef-muted">{demo.subtitle}</p>
        <p className="mt-4 max-w-2xl text-ef-muted">{demo.summary}</p>
      </Section>

      <Section alt>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-ef-ink">Challenge</h2>
            <p className="mt-3 text-sm text-ef-muted">{demo.challenge}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-ef-ink">Solution</h2>
            <p className="mt-3 text-sm text-ef-muted">{demo.solution}</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-ef-ink">Pages built</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-ef-muted">
              {demo.pages.map((page) => (
                <li key={page} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ef-accent" />
                  {page}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-ef-ink">Stack</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {demo.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-ef-border bg-ef-surface px-3 py-1 text-xs text-ef-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-ef-muted">{demo.resultPlaceholder}</p>
          </div>
        </div>
        <div className="mt-10">
          <ButtonLink href="/get-started">Talk to Kalyan</ButtonLink>
        </div>
      </Section>
    </>
  );
}
