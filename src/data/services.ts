/** Services page section draft — Indian RE voice */
export const servicesCopy = {
  meta: {
    title: "Services | Eternalflow — Websites for Real Estate",
    description:
      "Website design, CRM, WhatsApp chat, local SEO, and ads for real estate projects and agents in India.",
  },
  hero: {
    h1: "Your real estate marketing team, productized.",
    sub: "Website, CRM, chat, SEO, and ads — scoped as clear packages so developers and agents know what ships.",
  },
  sections: [
    {
      id: "website",
      h2: "Website design & development",
      body: "Custom, mobile-first sites for project launches and agent brands. Hosting, SSL, daily backups, and unlimited updates on membership.",
      includedIn: ["Starter", "Growth", "Pro"],
    },
    {
      id: "copy",
      h2: "Copywriting & pages",
      body: "We write conversion copy for listings, projects, towers, amenities, and personal agent brands — Indian RE language, not generic agency filler.",
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
      id: "ads",
      h2: "Online ads (overview)",
      body: "Traffic that lands on a site built to book site visits. Deep ads management available as custom / coming add-on.",
      includedIn: ["Custom"],
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
  cta: {
    h2: "See what's in each package",
    href: "/pricing",
    label: "View pricing",
  },
} as const;
