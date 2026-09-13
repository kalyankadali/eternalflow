/** Week 1 Home copy — from copy/week1-home-pricing-get-started.md */
export const homeCopy = {
  meta: {
    title: "Websites for Real Estate | Eternalflow — Hyderabad",
    description:
      "Productized websites, CRM & ads for real estate projects and agents in India. Clear one-off packages on eternalflow.co. Book a free website review.",
  },
  hero: {
    h1: "Eternal Flow Builds Better Websites, Every Time.",
    sub: "Productized websites, CRM & ads for real estate businesses and agents in India.",
    body: "Built in Hyderabad for project launches, agent brands, and enquiry follow-up that doesn't die in WhatsApp.",
    primaryCta: { label: "Book a free website review", href: "/get-started" },
    secondaryCta: { label: "See sample sites", href: "/work" },
  },
  trust: [
    "Built for real estate",
    "Hyderabad",
    "Productized pricing",
    "WhatsApp-first support",
  ],
  problem: {
    h2: "What's costing you enquiries right now",
    intro:
      "Most real estate sites look fine in a browser and fail when a buyer asks for a site visit.",
    cards: [
      {
        h3: "Project pages that don't convert",
        title: "Outdated project sites",
        body: "Towers and inventory updates sit in PDFs. Buyers bounce before they book a site visit.",
      },
      {
        h3: "Agents lost behind portal ads",
        title: "Weak agent brands",
        body: "Your name should own the conversation — not another listing card in a feed.",
      },
      {
        h3: "Enquiries with no CRM follow-up",
        title: "Leads dying on WhatsApp",
        body: "Numbers arrive. Nobody owns the pipeline. Hot leads go cold by Friday.",
      },
    ],
  },
  offer: {
    h2: "One modern marketing stack for real estate",
    intro:
      "Website + CRM + online ads — productized so you know what's included before you start.",
    cards: [
      {
        h3: "Website",
        body: "Custom design and copy for projects or your personal brand. Mobile-first, hosted, SSL, unlimited updates.",
      },
      {
        h3: "CRM",
        body: "Capture enquiries, track site visits, and follow up without losing the thread on WhatsApp.",
        badge: "Growth+",
      },
      {
        h3: "Online ads",
        body: "Traffic that lands on a site built to book site visits — not a homepage that explains nothing.",
      },
    ],
    link: { label: "Explore services", href: "/services" },
  },
  packages: {
    h2: "Clear packages. Pick a lane.",
    intro:
      "Starter, Growth, or Pro — one-off project fees. Deliverables and INR listed up front — no proposal theatre.",
    cta: { label: "See full pricing", href: "/pricing" },
  },
  niche: {
    h2: "Two paths. Same delivery OS.",
    panels: [
      {
        h3: "Project launch websites that book site visits",
        audience: "Developers & projects",
        body: "Inventory, towers, amenities, and enquiry forms built for Indian buyers and channel partners.",
        cta: { label: "Real estate solutions", href: "/real-estate" },
      },
      {
        h3: "A personal brand that outranks portal noise",
        audience: "Agents",
        body: "Your name, your areas, WhatsApp CTAs, and a site you can send in every DM.",
        cta: { label: "For agents", href: "/for-agents" },
      },
    ],
  },
  work: {
    h2: "Sample sites you can send in outreach",
    intro:
      "Screenshot-ready demos for project and agent cold outreach. Labeled clearly when they're demos.",
    cta: { label: "See all work", href: "/work" },
  },
  process: {
    h2: "Live in four weeks.",
    steps: ["Discovery", "Design", "Build", "Launch", "Optional monthly maintenance"],
    body: "Discovery → design → build → launch. Starter, Growth, and Pro are one-off project fees. After go-live, optional monthly maintenance keeps launches and inventory current — amount TBD, separate from the package.",
  },
  /** Hide until real quotes — do not invent social proof */
  testimonials: {
    visible: false,
    h2: "What clients say",
    note: "Section omitted until we have client permission to publish.",
  },
  finalCta: {
    h2: "Book a free website review",
    body: "No sales pitch. We'll tell you what's costing you enquiries — and the clear next step.",
    primaryCta: { label: "Book a free website review", href: "/get-started" },
    secondaryCta: { label: "Chat on WhatsApp", href: "whatsapp" },
  },
} as const;
