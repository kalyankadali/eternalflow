export type TierId = "starter" | "growth" | "pro";

export type PricingTier = {
  id: TierId;
  name: string;
  /** Short card tagline (Week 1 copy) */
  blurb: string;
  /** R1-locked public INR display */
  priceLabel: string;
  /** Optional cadence note under the price (e.g. one-time project) */
  priceNote?: string;
  popular?: boolean;
  /** Chip label when popular — default "Most popular" */
  popularLabel?: string;
  ctaLabel: string;
  /** Verbatim deliverables — keep as string[] for FE cards */
  features: string[];
  /**
   * Optional badge keyed by exact feature string.
   * R1 locked: AI Voice shows "rolling out".
   */
  featureBadges?: Record<string, string>;
  includesPrevious?: string;
};

const AI_VOICE =
  "AI Voice Assistant (answers inbound prospect calls, captures contact details, books appointments)";

/** Canonical package copy — HANDOFF §5.3 + Week 1 copy. R1-locked INR in priceLabel. */
export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    blurb: "A sharp 5-page site, shipped in four weeks.",
    priceLabel: "₹24,999",
    priceNote: "one-off project",
    ctaLabel: "Book a free website review",
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
    ctaLabel: "Book a free website review",
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
    ctaLabel: "Book a free website review",
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
  /** Optional badge for the feature label (e.g. AI Voice) */
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
  { name: "Ads management", status: "Coming / custom" },
];

export const pricingFaqs = [
  {
    q: "What do the packages cost?",
    a: "Starter is ₹24,999. Growth is ₹39,999. Pro is ₹59,999. What's included is listed on each card — book a free review if you're unsure which fits.",
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
    a: "No. They are one-off project fees. You pay for the build and what's listed in the package — no monthly package subscription.",
  },
  {
    q: 'What does "unlimited updates" mean?',
    a: "Updates listed in your package (and Growth's routine launch/announcement updates) are part of that project scope. For ongoing care after launch — copy tweaks, new inventory notes, fresh announcements on a monthly rhythm — we offer optional monthly maintenance as a separate add-on. Amount TBD; we won't invent a rupee figure until it's locked.",
  },
  {
    q: "Can I skip maintenance or take the site elsewhere?",
    a: "Yes on maintenance — it's optional and separate from the one-off package fee. Site ownership and portability terms are being finalized with legal; we'll state them clearly before you pay.",
  },
  {
    q: "Do you only work with real estate?",
    a: "Yes. Builders, projects, brokerages, and agents. Focus keeps the copy, funnels, and CRM patterns sharp.",
  },
];
