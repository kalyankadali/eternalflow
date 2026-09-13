import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { pageTitle } from "@/lib/site";

export const metadata = {
  title: { absolute: pageTitle("Privacy") },
  description: "We collect only what we need to respond to enquiries (name, phone, optional WhatsApp and message) and to improve our service.",
};

export default function Page() {
  return (
    <Section className="pt-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
        Privacy
      </h1>
      <p className="mt-4 max-w-2xl text-ef-muted">
        We collect only what we need to respond to enquiries (name, phone, optional WhatsApp and message) and to improve our service.
      </p>
      <p className="mt-3 max-w-2xl text-ef-muted">
        We do not sell your data. Contact hello@eternalflow.in for privacy questions. Full policy copy will be finalized with legal review.
      </p>
      <div className="mt-8">
        <ButtonLink href="/get-started">Book free review</ButtonLink>
      </div>
    </Section>
  );
}
