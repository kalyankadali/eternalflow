/** Home — R1 hero lock + Section C + Design B */
export const homeCopy = {
  meta: {
    title: "Better Websites for Real Estate Builders & Agents | EternalFlow",
    description:
      "EternalFlow builds productized websites, CRM & ads for real estate builders and agents in India. Clear one-off packages. Book a free review with Kalyan.",
  },
  hero: {
    brand: "EternalFlow",
    h1: "Better Websites For Real Estate Builders & Agents",
    sub: "Productized websites, CRM & ads for real estate builders and agents in India.",
    body: "Hyderabad-based. Project launches, agent brands, and WhatsApp enquiries that don't die in a chat thread.",
    primaryCta: { label: "Book a free review with Kalyan", href: "/get-started" },
    secondaryCta: { label: "See sample sites", href: "/work" },
  },
  trust: [
    "Hyderabad",
    "Builders & agents only",
    "One-off packages",
    "WhatsApp-first",
  ],
  problem: {
    h2: "What's costing you enquiries right now",
    intro:
      "Most real estate sites look fine until a buyer asks for a site visit.",
    cards: [
      {
        quote: "The brochure is in a PDF. Can you just WhatsApp the price list?",
        label: "Project pages that don't convert",
        body: "Towers and inventory updates sit in files buyers never open. Site visits never get booked.",
      },
      {
        quote: "I saw you on the portal — do you have your own site?",
        label: "Agents lost behind portal ads",
        body: "Your name should own the conversation — not another listing card in a feed.",
      },
      {
        quote: "I messaged last week about the 3BHK. Did anyone follow up?",
        label: "Enquiries dying on WhatsApp",
        body: "Numbers arrive. Nobody owns the pipeline. Hot leads go cold by Friday.",
      },
    ],
  },
  offer: {
    h2: "One stack for builders and agents",
    intro:
      "Website + CRM + enquiry-ready pages — productized so you know what ships before you start.",
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
        h3: "Enquiry-ready pages",
        body: "Sites built to book site visits — so when traffic comes (organic, referral, or ads you already run), it lands somewhere that converts.",
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
    steps: ["Discovery", "Design", "Build", "Launch", "Optional monthly care"],
    body: "Discovery → design → build → launch. Packages are one-off project fees. After go-live, optional monthly care at ₹4,999/mo keeps launches and inventory current — separate from the package.",
  },
  testimonials: {
    visible: true,
    h2: "What clients say",
    note: "Example quotes — labeled until we have permission to publish real ones.",
  },
  finalCta: {
    h2: "Book a free review with Kalyan",
    body: "No sales pitch. Gaps on your enquiry path → which package fits → clear next step on WhatsApp.",
    steps: [
      {
        title: "You reach out",
        body: "WhatsApp Kalyan or the short form.",
      },
      {
        title: "We review",
        body: "Site (or no site), enquiry path, package fit.",
      },
      {
        title: "Clear next step",
        body: "Gaps, Starter / Growth / Pro, and how we start.",
      },
    ],
    primaryCta: { label: "Book a free review with Kalyan", href: "/get-started" },
    secondaryCta: { label: "WhatsApp Kalyan", href: "whatsapp" },
  },
} as const;
