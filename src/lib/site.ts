export const siteConfig = {
  name: "Eternalflow",
  legalName: "Eternalflow",
  tagline: "Eternal Flow Builds Better Websites, Every Time.",
  description:
    "Productized websites, CRM & ads for real estate businesses and agents in India. Based in Hyderabad.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://eternalflow.in",
  locale: "en_IN",
  location: {
    city: "Hyderabad",
    region: "Telangana",
    country: "IN",
    addressCountry: "IN",
  },
  email: "hello@eternalflow.in",
  defaultWhatsAppMessage:
    "Hi Eternalflow — I'd like a free website review.",
  titleTemplate: "%s | Eternalflow — Websites for Real Estate",
  defaultTitle: "Eternalflow — Websites for Real Estate",
} as const;

export function pageTitle(page: string) {
  return `${page} | Eternalflow — Websites for Real Estate`;
}
