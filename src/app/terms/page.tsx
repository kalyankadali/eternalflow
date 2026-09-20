import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { pageTitle } from "@/lib/site";

export const metadata = {
  title: { absolute: pageTitle("Terms") },
  description: "By using this site or booking a review, you agree to communicate in good faith and provide accurate contact details.",
};

export default function Page() {
  return (
    <Section className="pt-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
        Terms
      </h1>
      <p className="mt-4 max-w-2xl text-ef-muted">
        By using this site or booking a review, you agree to communicate in good faith and provide accurate contact details.
      </p>
      <p className="mt-3 max-w-2xl text-ef-muted">
        Packages are one-off project fees. Optional monthly care after launch is ₹4,999/mo and separate. Questions: hello@eternalflow.co or Chat on WhatsApp.
      </p>
      <div className="mt-8">
        <ButtonLink href="/get-started">Talk to Kalyan</ButtonLink>
      </div>
    </Section>
  );
}
