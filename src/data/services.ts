/** Services — hide Ads block; maintenance ₹4,999/mo */
export const servicesCopy = {
  meta: {
    title: "Services | EternalFlow — Websites for Real Estate",
    description:
      "Website, CRM, chat, and SEO for real estate builders and agents — scoped as clear one-off packages.",
  },
  hero: {
    h1: "Your real estate marketing team, productized.",
    sub: "Website, CRM, chat, and SEO — scoped so builders and agents know what ships.",
  },
  sections: [
    {
      id: "website",
      h2: "Website design & development",
      body: "Custom, mobile-first sites for project launches and agent brands. Hosting, SSL, daily backups, and unlimited updates listed in your package. Starter, Growth, and Pro are one-off project fees. After launch, optional monthly care at ₹4,999/mo keeps copy, launches, and inventory current — separate from the one-off package fee.",
      includedIn: ["Starter", "Growth", "Pro"],
    },
    {
      id: "copy",
      h2: "Copywriting & pages",
      body: "We write conversion copy for projects, towers, amenities, and agent brands — Indian RE language, not agency filler.",
      includedIn: ["Starter", "Growth", "Pro"],
    },
    {
      id: "crm",
      h2: "CRM setup",
      body: "Capture → pipeline → follow-up. Site visits and WhatsApp enquiries land somewhere owned — not a lost chat thread.",
      includedIn: ["Growth", "Pro"],
      badge: "Growth+",
    },
    {
      id: "chat",
      h2: "Live chat / WhatsApp",
      body: "India-first connection. Widget and deep links so buyers can reach you the way they already message.",
      includedIn: ["Growth", "Pro"],
      badge: "Growth+",
    },
    {
      id: "blog",
      h2: "Blog & portfolio ops",
      body: "You send notes. We turn them into blog articles and project showcases so the site stays alive after launch.",
      includedIn: ["Growth", "Pro"],
      badge: "Growth+",
    },
    {
      id: "seo",
      h2: "Local SEO",
      body: "City, project, and locality pages that help buyers and channel partners find you beyond paid clicks.",
      includedIn: ["Growth", "Pro"],
      badge: "Growth+",
    },
    {
      id: "automations",
      h2: "Automations + AI",
      body: "Custom CRM workflows, an AI chatbot trained on your business, and AI voice for inbound prospect calls.",
      includedIn: ["Pro"],
      badge: "Pro",
      notes: [
        { text: "AI Chatbot — 24/7 Q&A + appointment booking" },
        { text: "AI Voice Assistant — inbound calls", badge: "rolling out" },
      ],
    },
  ],
  adsNote:
    "Paid ads management — coming as a scoped add-on. Not included in Starter, Growth, or Pro.",
  cta: {
    h2: "See what's in each package",
    href: "/pricing",
    label: "View pricing",
  },
} as const;
