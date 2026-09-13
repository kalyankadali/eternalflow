/** Get Started copy — R1 lock §7. Form UI owned by R6 ContactForm; page shell by R5. */
export const getStartedCopy = {
  meta: {
    title: "Book a Free Website Review | EternalFlow",
    description:
      "Free website review for real estate builders and agents on eternalflow.co. We'll show what's costing you enquiries — on WhatsApp.",
  },
  promise: {
    h1: "Free website review",
    sub: "We'll tell you what's costing you enquiries.",
    body: "Share your current site (or say you don't have one). We'll reply on WhatsApp with clear gaps — project pages, agent brand, enquiry capture, CRM follow-up — and which package fits. No sales pitch. Clear next steps.",
  },
  whatsappPanel: {
    h2: "Prefer WhatsApp?",
    body: "Same free review. Tap through with a prefilled message.",
    cta: "Chat on WhatsApp",
  },
  next: {
    h2: "What happens next",
    steps: [
      {
        title: "You send details",
        body: "Form or WhatsApp.",
      },
      {
        title: "We review",
        body: "Site, enquiry path, and fit for Starter / Growth / Pro.",
      },
      {
        title: "Clear next step",
        body: "Gaps, recommended package (Starter ₹24,999 / Growth ₹39,999 / Pro ₹59,999), and how we start. No foggy proposals.",
      },
    ],
  },
  trust: {
    body: "Hyderabad-based. Built for Indian real estate builders and agents — projects, site visits, WhatsApp enquiries, CRM follow-up.",
    pricingLink: { label: "View pricing", href: "/pricing" },
  },
} as const;
