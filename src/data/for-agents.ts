export const forAgentsCopy = {
  meta: {
    title: "For Agents | EternalFlow — Personal brand sites",
    description:
      "Personal brand websites for real estate agents in India. 5-page blueprint, WhatsApp CTAs, optional CRM. Send your site in every DM.",
  },
  hero: {
    h1: "Your name should outrank the portal ads",
    sub: "A personal brand site built to send in every DM and referral — not another portal card.",
  },
  blueprint: {
    h2: "The 5-page blueprint",
    intro: "Enough to own the conversation when someone Googles your name.",
    pages: [
      { title: "Home", body: "Who you help, areas, primary WhatsApp CTA" },
      { title: "About", body: "Your story, trust, how you work" },
      { title: "Areas", body: "Localities and buyer types you serve" },
      { title: "Featured work", body: "Projects / highlights you actually sell" },
      { title: "Contact", body: "WhatsApp + short enquiry form" },
    ],
  },
  packageFit: {
    h2: "Which package fits",
    items: [
      {
        name: "Starter",
        price: "₹24,999, one-off",
        body: "Your 5-pager live in four weeks — design, copy, hosting, SSL, backups, unlimited updates in package.",
      },
      {
        name: "Growth",
        price: "₹39,999, one-off",
        body: "Everything in Starter, plus CRM integration and setup, WhatsApp/live chat, blog & portfolio ops, local SEO — so follow-ups don't die in chat.",
      },
      {
        name: "Pro",
        price: "On Growth",
        body: "When you need custom workflows + AI on top of Growth (AI Voice rolling out).",
      },
    ],
  },
  faqs: [
    {
      q: "Can I send this in a WhatsApp DM?",
      a: "Yes — that's the point. One link, your brand, WhatsApp CTA on every key page.",
    },
    {
      q: "Do I need Growth if I'm solo?",
      a: "Start with Starter if you need the site first. Choose Growth when enquiries are already coming and follow-up is the leak.",
    },
    {
      q: "Is this a portal replacement?",
      a: "No. It's your name and trust layer beside portals — so buyers remember you, not only the listing.",
    },
    {
      q: "Are packages monthly?",
      a: "No. One-off project fees. Optional monthly care is ₹4,999/mo and separate.",
    },
  ],
  dm: {
    h2: "Built to send in a DM",
    body: "This page + /work samples are what you share when you DM agents — or what we use in outreach. Honest demos, labeled as demos.",
  },
  sampleCta: {
    label: "See Ananya Rao demo",
    href: "/work/ananya-rao-hyderabad-realtor",
  },
  cta: { label: "Talk to Kalyan", href: "/get-started" },
} as const;
