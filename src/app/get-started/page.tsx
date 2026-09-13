import { ContactForm } from "@/components/ContactForm";
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
    <section className="relative overflow-hidden px-5 py-9 pb-20 md:px-7 sm:py-12 sm:pb-20">
      <div className="ef-orb absolute -top-[60px] -right-10 h-[300px] w-[300px]" />
      <div className="relative z-[1] mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:items-start">
        <div>
          <p className="ef-eyebrow mb-4">
            <i className="dot" />
            Free website review
          </p>
          <h1 className="ef-display mb-3.5">{promise.h1}</h1>
          <p className="mb-2 max-w-[40ch] text-[1.08rem] text-ef-muted">{promise.sub}</p>
          <p className="mb-7 max-w-[46ch] text-ef-muted">{promise.body}</p>

          <h2 className="mb-2 text-lg font-semibold text-ef-ink">{next.h2}</h2>
          <ol className="grid">
            {next.steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[48px_1fr] items-start gap-3 border-t border-ef-border py-3.5 first:border-t-0"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-ef-accent-soft bg-ef-accent-muted text-[13px] font-extrabold text-ef-accent-strong">
                  {i + 1}
                </span>
                <div>
                  <strong className="mb-1 block text-sm text-ef-ink">{step.title}</strong>
                  <p className="m-0 text-sm text-ef-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-2xl text-sm text-ef-muted">{trust.body}</p>
          <Link
            href={trust.pricingLink.href}
            className="mt-3 inline-block text-sm font-semibold text-ef-accent"
          >
            {trust.pricingLink.label} →
          </Link>
        </div>

        <div>
          <div className="ef-panel ef-form-panel">
            <h2 className="mb-5 text-[1.2rem] font-semibold text-ef-ink">Send your details</h2>
            <ContactForm />
          </div>
          <aside className="ef-wa-panel">
            <h3 className="m-0 mb-1.5 text-[1.05rem] font-semibold text-ef-ink">
              {whatsappPanel.h2}
            </h3>
            <p className="mb-4 text-sm text-ef-muted">{whatsappPanel.body}</p>
            <WhatsAppLink className="inline-flex w-full items-center justify-center rounded-full border-[1.5px] border-ef-accent bg-ef-surface px-[26px] py-3.5 text-base font-semibold text-ef-accent no-underline transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-ef-accent-muted hover:no-underline" />
          </aside>
        </div>
      </div>
    </section>
  );
}
