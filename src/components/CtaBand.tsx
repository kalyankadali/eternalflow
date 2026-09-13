import { ButtonLink } from "./Button";
import { Section } from "./Section";
import { WhatsAppLink } from "./WhatsAppLink";

type Props = {
  h2: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsapp?: boolean;
  alt?: boolean;
};

export function CtaBand({
  h2,
  body,
  primaryLabel = "Book a free website review",
  primaryHref = "/get-started",
  whatsapp = true,
  alt = true,
}: Props) {
  return (
    <Section alt={alt}>
      <div className="mx-auto max-w-2xl rounded-[var(--ef-radius-card-lg)] border border-ef-border bg-ef-accent-muted px-6 py-10 text-center sm:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-ef-ink sm:text-3xl">
          {h2}
        </h2>
        <p className="mt-3 text-ef-muted">{body}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={primaryHref} size="lg">
            {primaryLabel}
          </ButtonLink>
          {whatsapp ? (
            <WhatsAppLink className="inline-flex items-center justify-center rounded-full border border-ef-accent px-6 py-3 text-base font-medium text-ef-accent hover:bg-ef-surface" />
          ) : null}
        </div>
      </div>
    </Section>
  );
}
