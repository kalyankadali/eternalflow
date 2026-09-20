import { ButtonLink } from "./Button";
import { Container } from "./Container";
import { WhatsAppLink } from "./WhatsAppLink";
import { siteConfig } from "@/lib/site";

type Step = { title: string; body: string };

type Props = {
  h2: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsapp?: boolean;
  steps?: readonly Step[];
};

export function CtaBand({
  h2,
  body,
  primaryLabel = siteConfig.cta.bookReview,
  primaryHref = "/get-started",
  whatsapp = true,
  steps,
}: Props) {
  return (
    <div className="ef-cta-band">
      <Container>
        <h2 className="ef-sec-title mx-auto max-w-2xl">{h2}</h2>
        <p className="mx-auto mt-2.5 max-w-xl text-[1.05rem] text-ef-muted">{body}</p>
        {steps && steps.length > 0 ? (
          <ol className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-[var(--ef-radius-card)] border border-ef-border bg-[color-mix(in_srgb,var(--ef-surface)_80%,transparent)] p-4 text-left shadow-[var(--ef-shadow-sm)]"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-ef-accent-soft bg-ef-accent-muted text-sm font-extrabold text-ef-accent-strong">
                  {i + 1}
                </span>
                <strong className="mt-2.5 block text-sm text-ef-ink">{step.title}</strong>
                <p className="mt-1 text-xs text-ef-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        ) : null}
        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink href={primaryHref} size="lg" className="w-full sm:w-auto">
            {primaryLabel}
          </ButtonLink>
          {whatsapp ? (
            <WhatsAppLink className="inline-flex w-full items-center justify-center rounded-full border-[1.5px] border-ef-accent bg-[color-mix(in_srgb,var(--ef-surface)_70%,transparent)] px-[26px] py-3.5 text-base font-semibold text-ef-accent backdrop-blur-sm transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-ef-accent-muted hover:text-ef-accent-strong hover:no-underline sm:w-auto" />
          ) : null}
        </div>
      </Container>
    </div>
  );
}
