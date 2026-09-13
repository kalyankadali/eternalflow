import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { pageTitle } from "@/lib/site";

export const metadata = {
  title: { absolute: pageTitle("About") },
  description: "We build productized websites, CRM, and ads for real estate businesses and agents in India. Based in Hyderabad.",
};

export default function Page() {
  return (
    <Section className="pt-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
        About Eternalflow
      </h1>
      <p className="mt-4 max-w-2xl text-ef-muted">
        We build productized websites, CRM, and ads for real estate businesses and agents in India. Based in Hyderabad.
      </p>
      <p className="mt-3 max-w-2xl text-ef-muted">
        Our focus is conversion-ready sites and follow-up systems — so enquiries do not slip through the cracks.
      </p>
      <div className="mt-8">
        <ButtonLink href="/get-started">Book free review</ButtonLink>
      </div>
    </Section>
  );
}
