import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { pageTitle } from "@/lib/site";

export const metadata = {
  title: { absolute: pageTitle("Get started") },
  description: "Book a free website review for your real estate business.",
};

export default function GetStartedPage() {
  return (
    <Section className="pt-10">
      <div className="mx-auto flex max-w-lg flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-ef-ink">
            Free website review
          </h1>
          <p className="text-ef-muted">
            We&apos;ll tell you what&apos;s costing you enquiries. No sales pitch —
            clear next steps.
          </p>
          <WhatsAppLink className="w-fit rounded-full border border-ef-accent px-4 py-2 text-sm font-medium text-ef-accent hover:bg-ef-accent-muted" />
        </header>
        <ContactForm />
      </div>
    </Section>
  );
}
