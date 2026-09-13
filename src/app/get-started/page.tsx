import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { getStartedCopy } from "@/data";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";

export const metadata = {
  title: { absolute: pageMeta.getStarted.title },
  description: pageMeta.getStarted.description,
};

export default function GetStartedPage() {
  const { promise, whatsappPanel, next, trust } = getStartedCopy;

  return (
    <>
      <Section className="pt-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
            {promise.h1}
          </h1>
          <p className="mt-3 text-lg text-ef-muted">{promise.sub}</p>
          <p className="mt-3 text-ef-muted">{promise.body}</p>
        </div>
      </Section>

      <Section alt>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-ef-ink">Send your details</h2>
            <ContactForm />
          </div>
          <aside className="rounded-[var(--ef-radius-card-lg)] border border-ef-border bg-ef-surface p-6 shadow-[var(--ef-shadow-md)]">
            <h2 className="text-xl font-semibold text-ef-ink">{whatsappPanel.h2}</h2>
            <p className="mt-2 text-sm text-ef-muted">{whatsappPanel.body}</p>
            <WhatsAppLink className="mt-5 inline-flex rounded-full bg-ef-accent px-5 py-2.5 text-sm font-medium text-ef-on-accent hover:bg-ef-accent-strong" />
          </aside>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight text-ef-ink">{next.h2}</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {next.steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-[var(--ef-radius-card)] border border-ef-border bg-ef-surface p-5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ef-accent text-sm font-semibold text-ef-on-accent">
                {i + 1}
              </span>
              <h3 className="mt-3 font-semibold text-ef-ink">{step.title}</h3>
              <p className="mt-1 text-sm text-ef-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-sm text-ef-muted">{trust.body}</p>
        <Link
          href={trust.pricingLink.href}
          className="mt-3 inline-block text-sm font-medium text-ef-accent hover:underline"
        >
          {trust.pricingLink.label} →
        </Link>
      </Section>
    </>
  );
}
