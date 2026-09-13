import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { pageTitle } from "@/lib/site";

export const metadata = {
  title: { absolute: pageTitle("For agents") },
  description: "A personal brand site that outranks portal ads — so buyers and sellers find you, not just listings.",
};

export default function Page() {
  return (
    <Section className="pt-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
        For agents
      </h1>
      <p className="mt-4 max-w-2xl text-ef-muted">
        A personal brand site that outranks portal ads — so buyers and sellers find you, not just listings.
      </p>
      <p className="mt-3 max-w-2xl text-ef-muted">
        Built for agents and brokerages who want a professional web presence with WhatsApp-ready lead capture.
      </p>
      <div className="mt-8">
        <ButtonLink href="/get-started">Book free review</ButtonLink>
      </div>
    </Section>
  );
}
