export type TierId = "starter" | "growth" | "pro";

export type PricingTier = {
  id: TierId;
  name: string;
  blurb: string;
  priceLabel: string;
  priceNote?: string;
  popular?: boolean;
  popularLabel?: string;
  ctaLabel: string;
  features: string[];
  featureBadges?: Record<string, string>;
  includesPrevious?: string;
};

const AI_VOICE =
  "AI Voice Assistant (answers inbound prospect calls, captures contact details, books appointments)";

const BOOK = "Book a free review with Kalyan";

/** Canonical package copy — HANDOFF §5.3 + Week 1 copy. R1-locked INR in priceLabel. */
export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    blurb: "A sharp 5-page site, shipped in four weeks.",
    priceLabel: "₹24,999",
    priceNote: "one-off project",
    ctaLabel: BOOK,
    features: [
      "5-page custom website",
      "Mobile-friendly design",
      "Hosting + Security + SSL certificate",
      "Daily backups",
      "Unlimited updates",
      "4-week delivery",
      "Custom design + copywriting",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    blurb: "Site + CRM + chat — the core stack for enquiries and follow-up.",
    priceLabel: "₹39,999",
    priceNote: "one-off project",
    popular: true,
    popularLabel: "Most popular",
    ctaLabel: BOOK,
    includesPrevious: "Everything in Starter, plus",
    features: [
      "CRM integration and setup",
      "Website live chat / WhatsApp widget for customer connection",
      "Blog & portfolio management (client submits notes → agency turns into blog articles & project showcases)",
      "Local SEO",
      "Routine website updates for client reviews, new project launches, and announcements",
      "Complete core stack: Site + CRM + Chat + Booking",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    blurb: "Automations and AI on top of the Growth stack.",
    priceLabel: "₹59,999",
    priceNote: "one-off project",
    ctaLabel: BOOK,
    includesPrevious: "Everything in Growth, plus",
    features: [
      "Custom automated workflows and CRM updates built for your pipeline",
      "AI Chatbot trained specifically on your business (24/7 Q&A + appointment booking)",
      AI_VOICE,
    ],
    featureBadges: {
      [AI_VOICE]: "rolling out",
    },
  },
];

export type ComparisonRow = {
  feature: string;
  starter: boolean | string;
  growth: boolean | string;
  pro: boolean | string;
  badge?: string;
};

export const comparisonRows: ComparisonRow[] = [
  { feature: "5-page custom website", starter: true, growth: true, pro: true },
  { feature: "Mobile-friendly design", starter: true, growth: true, pro: true },
  { feature: "Hosting + Security + SSL", starter: true, growth: true, pro: true },
  { feature: "Daily backups", starter: true, growth: true, pro: true },
  { feature: "Unlimited updates", starter: true, growth: true, pro: true },
  { feature: "4-week delivery", starter: true, growth: true, pro: true },
  { feature: "Custom design + copywriting", starter: true, growth: true, pro: true },
  { feature: "CRM integration and setup", starter: false, growth: true, pro: true },
  { feature: "Live chat / WhatsApp widget", starter: false, growth: true, pro: true },
  { feature: "Blog & portfolio management", starter: false, growth: true, pro: true },
  { feature: "Local SEO", starter: false, growth: true, pro: true },
  {
    feature: "Routine updates (reviews, launches, announcements)",
    starter: false,
    growth: true,
    pro: true,
  },
  {
    feature: "Complete core stack (Site + CRM + Chat + Booking)",
    starter: false,
    growth: true,
    pro: true,
  },
  { feature: "Custom automated workflows", starter: false, growth: false, pro: true },
  { feature: "AI Chatbot (24/7 Q&A + booking)", starter: false, growth: false, pro: true },
  {
    feature: "AI Voice Assistant (inbound calls)",
    starter: false,
    growth: false,
    pro: true,
    badge: "rolling out",
  },
];

export const alwaysIncluded = [
  "Custom design and copywriting",
  "Mobile-friendly build",
  "Hosting, security & SSL",
  "Daily backups",
  "Unlimited updates listed in your package",
];

export const pricingAddOns = [
  { name: "Photo / video production", status: "Custom" },
  { name: "Ads management", status: "Coming" },
  { name: "Optional monthly care", status: "₹4,999/mo" },
];

export const pricingFaqs = [
  {
    q: "What do the packages cost?",
    a: "Starter is ₹24,999. Growth is ₹39,999. Pro is ₹59,999. What's included is listed on each card — book a free review with Kalyan if you're unsure which fits.",
  },
  {
    q: "What's the difference between Starter and Growth?",
    a: "Starter is the website: design, copy, hosting, SSL, backups, unlimited updates, four-week delivery. Growth adds CRM, WhatsApp/live chat, blog & portfolio management, local SEO, and routine updates for launches and announcements — the full Site + CRM + Chat + Booking stack.",
  },
  {
    q: "Who is Pro for?",
    a: "Teams that need custom CRM workflows plus AI chatbot and AI voice for inbound prospect calls. Everything in Growth stays included. AI Voice is marked rolling out until delivery ops are fully live.",
  },
  {
    q: "How fast do you deliver?",
    a: "Starter ships on a four-week timeline. Growth and Pro follow the same build rhythm; CRM and AI pieces are scoped in discovery so nothing is promised loosely.",
  },
  {
    q: "Are Starter, Growth, and Pro monthly subscriptions?",
    a: "No. They are one-off project fees. Optional monthly care at ₹4,999/mo is separate if you want ongoing updates after launch.",
  },
  {
    q: "What does optional monthly care cost?",
    a: "₹4,999 per month. It's optional and separate from Starter, Growth, and Pro — covers ongoing copy, launches, and inventory updates after your one-off build.",
  },
  {
    q: 'What does "unlimited updates" mean?',
    a: "Updates listed in your package (and Growth's routine launch/announcement updates) are part of that project scope. For ongoing care after launch — copy tweaks, new inventory notes, fresh announcements on a monthly rhythm — optional monthly care is ₹4,999/mo as a separate add-on.",
  },
  {
    q: "Who owns the site after I pay?",
    a: "You own the deliverables from your one-off package. Optional monthly care (₹4,999/mo) is separate and does not hold your site hostage. Portability details (repos, domains, handoff) are confirmed in writing before you pay.",
  },
  {
    q: "Can I skip maintenance or take the site elsewhere?",
    a: "Yes — optional monthly care is separate from the one-off package fee. You own the deliverables; portability details are confirmed in writing before you pay.",
  },
  {
    q: "Do you only work with real estate?",
    a: "Yes. Builders, projects, brokerages, and agents. Focus keeps the copy, funnels, and CRM patterns sharp.",
  },
];

/** Example testimonials — honest chip until real quotes lock */
export const exampleTestimonials = [
  {
    quote:
      "We needed a project site that could book site visits — not another brochure PDF.",
    name: "Priya M.",
    role: "Project marketing lead",
    company: "Hyderabad developer",
    initials: "PM",
  },
  {
    quote:
      "Buyers kept asking if I had my own site. Now I send one link in every DM.",
    name: "Rahul S.",
    role: "Independent agent",
    company: "Hyderabad",
    initials: "RS",
  },
] as const;
