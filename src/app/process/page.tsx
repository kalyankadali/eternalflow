import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { pageTitle } from "@/lib/site";

export const metadata = {
  title: { absolute: pageTitle("Process") },
  description: "A clear 4-week delivery path: discovery, design, build, launch — with unlimited content updates while you are a member.",
};

export default function Page() {
  return (
    <Section className="pt-10">
      <h1 className="text-3xl font-semibold tracking-tight text-ef-ink sm:text-4xl">
        How we work
      </h1>
      <p className="mt-4 max-w-2xl text-ef-muted">
        A clear 4-week delivery path: discovery, design, build, launch — with unlimited content updates while you are a member.
      </p>
      <p className="mt-3 max-w-2xl text-ef-muted">
        No proposal theatre. You know the package, timeline, and what happens after go-live.
      </p>
      <div className="mt-8">
        <ButtonLink href="/get-started">Book free review</ButtonLink>
      </div>
    </Section>
  );
}
