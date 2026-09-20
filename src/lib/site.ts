export const siteConfig = {
  name: "EternalFlow",
  legalName: "EternalFlow",
  tagline: "Better Websites For Real Estate Builders & Agents",
  description:
    "EternalFlow builds productized websites, CRM & ads for real estate builders and agents in India. Clear one-off packages. Talk to Kalyan on WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://eternalflow.co",
  locale: "en_IN",
  location: {
    city: "Hyderabad",
    region: "Telangana",
    country: "IN",
    addressCountry: "IN",
  },
  email: "hello@eternalflow.co",
  publicContactName: "Kalyan",
  cta: {
    bookReview: "Talk to Kalyan",
    bookReviewShort: "Talk to Kalyan",
    whatsapp: "Chat on WhatsApp",
  },
  defaultWhatsAppMessage: "Hi Kalyan — I'd like a free website review.",
  monthlyCareLabel: "₹4,999/mo",
  titleTemplate: "%s | EternalFlow",
  defaultTitle: "Better Websites for Real Estate Builders & Agents | EternalFlow",
} as const;

export const commercialClarity = {
  title: "How pricing works",
  body: "Starter, Growth, and Pro are one-off project fees. What's listed in your package — including unlimited updates in that scope — is part of the build you paid for. After launch, optional monthly care is ₹4,999/mo if you want ongoing copy, launches, and inventory kept current. You own the deliverables from your one-off project; optional monthly care does not change ownership.",
} as const;

export function pageTitle(page: string) {
  return `${page} | EternalFlow`;
}
