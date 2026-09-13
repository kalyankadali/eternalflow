import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { pageTitle } from "@/lib/site";

export const metadata = {
  title: { absolute: pageTitle("Services") },
  description: "Productized websites, CRM setup, and online ads for real estate businesses and agents in India.",
};

export default function Page() {
  return (
    <Section className="pt-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
        Services
      </h1>
      <p className="mt-4 max-w-2xl text-ef-muted">
        Productized websites, CRM setup, and online ads for real estate businesses and agents in India.
      </p>
      <p className="mt-3 max-w-2xl text-ef-muted">
        One modern marketing stack — clear packages, WhatsApp-first support, based in Hyderabad. Full service detail coming soon.
      </p>
      <div className="mt-8">
        <ButtonLink href="/get-started">Book free review</ButtonLink>
      </div>
    </Section>
  );
}
