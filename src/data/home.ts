/** Week 1 Home copy — R1 hero lock + scrub pack */
export const homeCopy = {
  meta: {
    title: "Better Websites for Real Estate Builders & Agents | EternalFlow",
    description:
      "EternalFlow builds productized websites, CRM & ads for real estate builders and agents in India. Clear one-off packages. Book a free website review.",
  },
  hero: {
    brand: "EternalFlow",
    h1: "Better Websites For Real Estate Builders & Agents",
    sub: "Productized websites, CRM & ads for real estate builders and agents in India.",
    body: "Hyderabad-based. Project launches, agent brands, and WhatsApp enquiries that don't die in a chat thread.",
    primaryCta: { label: "Book a free website review", href: "/get-started" },
    secondaryCta: { label: "See sample sites", href: "/work" },
  },
  trust: [
    "Built for real estate",
    "Hyderabad",
    "One-off packages",
    "WhatsApp-first",
  ],
  problem: {
    h2: "What's costing you enquiries right now",
    intro:
      "Most real estate sites look fine until a buyer asks for a site visit.",
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
    h2: "One stack for builders and agents",
    intro:
      "Website + CRM + online ads — productized so you know what ships before you start.",
    cards: [
      {
        h3: "Website",
        body: "Custom design and copy for projects or your personal brand. Mobile-first, hosted, SSL, unlimited updates listed in your package.",
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
      "Starter, Growth, or Pro — one-off project fees for builders and agents. Deliverables and INR up front.",
    cta: { label: "See full pricing", href: "/pricing" },
  },
  niche: {
    h2: "Two paths. Same delivery.",
    panels: [
      {
        h3: "Project sites that book site visits",
        audience: "Builders & projects",
        body: "Inventory, towers, amenities, and enquiry forms for Indian buyers and channel partners.",
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
    body: "Discovery → design → build → launch. Packages are one-off project fees. After go-live, optional monthly maintenance keeps launches and inventory current — amount TBD, separate from the package.",
  },
  /** Hide until real quotes — do not invent social proof */
  testimonials: {
    visible: false,
    h2: "What clients say",
    note: "Section omitted until we have client permission to publish.",
  },
  finalCta: {
    h2: "Book a free website review",
    body: "No sales pitch. We'll show what's costing you enquiries — and the clear next step on WhatsApp.",
    primaryCta: { label: "Book a free website review", href: "/get-started" },
    secondaryCta: { label: "Chat on WhatsApp", href: "whatsapp" },
  },
} as const;
