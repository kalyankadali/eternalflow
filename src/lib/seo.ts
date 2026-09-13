import { siteConfig } from "./site";

export const siteRoutes = [
  "/",
  "/services",
  "/pricing",
  "/real-estate",
  "/for-agents",
  "/work",
  "/process",
  "/about",
  "/get-started",
  "/privacy",
  "/terms",
] as const;

export function absoluteUrl(path: string = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** LocalBusiness / ProfessionalService JSON-LD for Hyderabad */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    areaServed: {
      "@type": "City",
      name: siteConfig.location.city,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.addressCountry,
    },
    knowsAbout: [
      "Real estate websites",
      "Real estate CRM",
      "Online ads for real estate",
      "Agent personal brand websites",
      "Project launch websites",
    ],
    slogan: siteConfig.tagline,
  };
}

export const pageMeta = {
  home: {
    title: "Better Websites for Real Estate Builders & Agents | EternalFlow",
    description:
      "EternalFlow builds productized websites, CRM & ads for real estate builders and agents in India. Clear one-off packages. Book a free website review.",
  },
  pricing: {
    title: "Pricing | EternalFlow — Websites for Real Estate",
    description:
      "One-off Starter, Growth, and Pro packages for real estate builders and agents on eternalflow.co. See what's included. Book a free review.",
  },
  getStarted: {
    title: "Book a Free Website Review | EternalFlow",
    description:
      "Free website review for real estate builders and agents on eternalflow.co. We'll show what's costing you enquiries — on WhatsApp.",
  },
  services: {
    title: "Services | EternalFlow — Websites for Real Estate",
    description:
      "Website, CRM, chat, SEO, and ads for real estate builders and agents — scoped as clear one-off packages.",
  },
  realEstate: {
    title: "Real Estate Solutions | EternalFlow",
    description:
      "Project launch websites, site-visit lead capture, and CRM follow-up for developers and brokerages in India.",
  },
  forAgents: {
    title: "For Agents | EternalFlow",
    description:
      "Personal brand websites for Hyderabad and India real estate agents — WhatsApp CTAs, listing highlights, lead follow-up.",
  },
  work: {
    title: "Work & Samples | EternalFlow",
    description:
      "Sample real estate project and agent websites for cold outreach — Lakeview Residences and Ananya Rao demos.",
  },
  process: {
    title: "Process | EternalFlow",
    description:
      "How EternalFlow delivers: discovery, design, build, and launch in four weeks — then optional monthly maintenance.",
  },
  about: {
    title: "About | EternalFlow",
    description:
      "Hyderabad-based agency building productized websites, CRM, and ads exclusively for real estate.",
  },
  privacy: {
    title: "Privacy Policy | EternalFlow",
    description: "How EternalFlow handles personal data from website enquiries.",
  },
  terms: {
    title: "Terms of Service | EternalFlow",
    description: "Terms for using the EternalFlow website and booking a review.",
  },
} as const;
