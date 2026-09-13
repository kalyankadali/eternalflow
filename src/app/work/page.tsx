import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { pageTitle } from "@/lib/site";

export const metadata = {
  title: { absolute: pageTitle("Work") },
  description: "A short set of sample and demo sites we use for cold outreach and discovery calls. Real client case studies will land here as we ship.",
};

export default function Page() {
  return (
    <Section className="pt-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
        Sample work
      </h1>
      <p className="mt-4 max-w-2xl text-ef-muted">
        A short set of sample and demo sites we use for cold outreach and discovery calls. Real client case studies will land here as we ship.
      </p>
      <p className="mt-3 max-w-2xl text-ef-muted">
        Want something in your niche? Book a free review and we will sketch the right package.
      </p>
      <div className="mt-8">
        <ButtonLink href="/get-started">Book free review</ButtonLink>
      </div>
    </Section>
  );
}
