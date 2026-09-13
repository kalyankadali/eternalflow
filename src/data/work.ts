export type WorkDemo = {
  slug: string;
  title: string;
  subtitle: string;
  industry: "RE project" | "Agent";
  location: string;
  summary: string;
  built: string[];
  resultPlaceholder: string;
  /** Honest labeling — demos are not live client work */
  isDemo: true;
  demoLabel: string;
  challenge: string;
  solution: string;
  pages: string[];
  stack: string[];
  accent: string;
};

export const workDemos: WorkDemo[] = [
  {
    slug: "lakeview-residences",
    title: "Lakeview Residences",
    subtitle: "Gated community project site — Hyderabad",
    industry: "RE project",
    location: "Hyderabad",
    summary:
      "A project launch website built to book site visits: towers, inventory, amenities, and enquiry capture for channel partners and walk-ins.",
    built: [
      "Project overview & towers",
      "Floor plans / inventory highlights",
      "Amenities & location story",
      "Site-visit enquiry form + WhatsApp",
    ],
    resultPlaceholder: "Example for screenshots: \"Book a site visit\" as primary CTA — not a reported client result.",
    isDemo: true,
    demoLabel: "Demo sample — not a live client",
    challenge:
      "Typical project microsites bury inventory in PDFs. Buyers and channel partners need clear towers, pricing bands, and a one-tap path to book a site visit.",
    solution:
      "A mobile-first launch site with RERA-aware info architecture (non-legal claims), strong CTAs for site visits, and a handoff path into CRM follow-up.",
    pages: [
      "Home / launch hero",
      "Towers & inventory",
      "Amenities & master plan",
      "Location & connectivity",
      "Enquire / book site visit",
    ],
    stack: ["Next.js", "Tailwind", "Form → CRM-ready", "WhatsApp CTA"],
    accent: "#ea8b4a",
  },
  {
    slug: "ananya-rao-hyderabad-realtor",
    title: "Ananya Rao — Hyderabad Realtor",
    subtitle: "Personal brand site for an independent agent",
    industry: "Agent",
    location: "Hyderabad",
    summary:
      "A personal brand 5-pager so her name outranks portal noise — areas served, featured projects, testimonials structure, and WhatsApp-first CTAs.",
    built: [
      "Personal brand homepage",
      "Areas & specialties",
      "Featured projects / listings highlights",
      "WhatsApp + review CTA",
    ],
    resultPlaceholder: "Example for outreach: personal brand 5-pager + WhatsApp CTA — not a reported client result. Demo — use in agent DM cold outreach.",
    isDemo: true,
    demoLabel: "Demo sample — not a live client",
    challenge:
      "Agents often rely on portal ads and Instagram alone. Prospects search a name and find nothing trustworthy — or a stale single-page site.",
    solution:
      "A sharp personal brand site with clear areas, proof structure, project highlights, and WhatsApp as the primary conversion path for DMs and referrals.",
    pages: [
      "Home / brand intro",
      "About & approach",
      "Areas served",
      "Featured work",
      "Contact / WhatsApp",
    ],
    stack: ["Next.js", "Tailwind", "WhatsApp deep link", "Lead form"],
    accent: "#d9732e",
  },
];

export function getWorkBySlug(slug: string) {
  return workDemos.find((w) => w.slug === slug);
}
