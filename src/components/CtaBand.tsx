import { ButtonLink } from "./Button";
import { Container } from "./Container";
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
}: Props) {
  return (
    <div className="ef-cta-band">
      <Container>
        <h2 className="ef-sec-title mx-auto max-w-2xl">{h2}</h2>
        <p className="mx-auto mt-2.5 max-w-xl text-[1.05rem] text-ef-muted">{body}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={primaryHref} size="lg">
            {primaryLabel}
          </ButtonLink>
          {whatsapp ? (
            <WhatsAppLink className="inline-flex items-center justify-center rounded-full border-[1.5px] border-ef-accent bg-[color-mix(in_srgb,var(--ef-surface)_70%,transparent)] px-[26px] py-3.5 text-base font-semibold text-ef-accent backdrop-blur-sm transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-ef-accent-muted hover:text-ef-accent-strong hover:no-underline" />
          ) : null}
        </div>
      </Container>
    </div>
  );
}
