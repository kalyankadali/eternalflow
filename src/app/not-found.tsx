import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="pt-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-ef-accent">
          404
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ef-ink">
          Page not found
        </h1>
        <p className="mt-3 text-ef-muted">
          That link doesn&apos;t lead anywhere. Head home or book a free website
          review — we&apos;ll help you from there.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/get-started" variant="secondary">
            Talk to Kalyan
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
