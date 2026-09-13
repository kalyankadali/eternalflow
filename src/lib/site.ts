export const siteConfig = {
  name: "EternalFlow",
  legalName: "EternalFlow",
  tagline: "Better Websites For Real Estate Builders & Agents",
  description:
    "EternalFlow builds productized websites, CRM & ads for real estate builders and agents in India. Clear one-off packages. Book a free website review.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://eternalflow.co",
  locale: "en_IN",
  location: {
    city: "Hyderabad",
    region: "Telangana",
    country: "IN",
    addressCountry: "IN",
  },
  email: "hello@eternalflow.co",
  defaultWhatsAppMessage:
    "Hi Eternalflow — I'd like a free website review.",
  titleTemplate: "%s | EternalFlow",
  defaultTitle: "Better Websites for Real Estate Builders & Agents | EternalFlow",
} as const;

export function pageTitle(page: string) {
  return `${page} | EternalFlow`;
}
