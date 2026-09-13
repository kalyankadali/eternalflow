import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { pageTitle } from "@/lib/site";

export const metadata = {
  title: { absolute: pageTitle("Real estate") },
  description: "Conversion-ready project websites for developers and builders — listings, enquiry capture, and follow-up that does not die in WhatsApp threads.",
};

export default function Page() {
  return (
    <Section className="pt-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
        Real estate projects
      </h1>
      <p className="mt-4 max-w-2xl text-ef-muted">
        Conversion-ready project websites for developers and builders — listings, enquiry capture, and follow-up that does not die in WhatsApp threads.
      </p>
      <p className="mt-3 max-w-2xl text-ef-muted">
        Pair the site with CRM and chat when you are ready. Book a free review to see what is costing you enquiries today.
      </p>
      <div className="mt-8">
        <ButtonLink href="/get-started">Book free review</ButtonLink>
      </div>
    </Section>
  );
}
