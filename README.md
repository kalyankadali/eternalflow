# Eternalflow

Marketing site for Eternalflow — productized websites, CRM, and ads for real estate businesses and agents in India. Based in Hyderabad.

- **Domain:** [eternalflow.co](https://eternalflow.co)
- **Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS + next-themes
- **Primary CTA:** Book a free website review (form + WhatsApp)

## Packages (one-off)

| Tier | Price | Note |
|------|--------|------|
| Starter | ₹24,999 | one-time project |
| Growth | ₹39,999 | one-time project |
| Pro | ₹59,999 | one-time project |

Optional monthly maintenance after launch is TBD (no public monthly INR yet). CRM copy stays generic — no vendor names.

## Local

```bash
cp .env.example .env.local
# set NEXT_PUBLIC_WHATSAPP_NUMBER=919989470565
npm install
npm run dev
```

## Env (Vercel)

| Name | Notes |
|------|--------|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, e.g. `919989470565` |
| `NEXT_PUBLIC_SITE_URL` | `https://eternalflow.co` |
| `LEAD_NOTIFY_EMAIL` | Optional lead inbox |
| `LEAD_WEBHOOK_URL` | Optional CRM webhook |
| `GOOGLE_SHEET_WEBHOOK_URL` | Optional sheet append |

WhatsApp deep link uses `Hi Eternalflow — I'd like a free website review.`

`.env.local` is gitignored. Do not commit secrets.
