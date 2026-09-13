/** Process page — delivery OS from HANDOFF §5.7 */
export const processCopy = {
  meta: {
    title: "Process | Eternalflow",
    description:
      "How Eternalflow delivers: discovery, design, build, launch, and unlimited updates in four weeks.",
  },
  hero: {
    h1: "Four weeks to launch. Then we keep shipping updates.",
    sub: "A clear delivery OS for real estate websites — so project launches and agent brands don't stall in endless revisions.",
  },
  steps: [
    {
      n: 1,
      title: "Discovery call",
      duration: "45–60 min",
      body: "Goals, audiences (buyers vs channel partners), current site gaps, and which package fits how you get enquiries.",
    },
    {
      n: 2,
      title: "Kickoff workshop",
      duration: "Week 0–1",
      body: "Pages, brand assets, inventory notes, WhatsApp number, and success metrics (site visits booked, not vanity traffic).",
    },
    {
      n: 3,
      title: "Design beta",
      duration: "Week 1–2",
      body: "Visual direction and key templates — home, project or agent pages, enquiry paths — for your feedback.",
    },
    {
      n: 4,
      title: "Build + copy",
      duration: "Week 2–3",
      body: "Production build, conversion copy, forms, and (on Growth+) CRM / WhatsApp wiring.",
    },
    {
      n: 5,
      title: "Revision round",
      duration: "Week 3",
      body: "Shared board (ClickUp or equivalent). Focused feedback — not endless redesign loops.",
    },
    {
      n: 6,
      title: "Launch",
      duration: "Week 4",
      body: "DNS, SSL, analytics hooks, and go-live checklist. Soft launch then public.",
    },
    {
      n: 7,
      title: "Unlimited updates",
      duration: "Ongoing membership",
      body: "Copy tweaks, new project announcements, inventory notes — requested via form or WhatsApp → board.",
    },
  ],
  raci: {
    h2: "Who you talk to weekly",
    body: "One delivery lead owns your board and weekly check-in. Design and engineering sit behind that seat so you aren't juggling five chats.",
  },
  cta: {
    label: "Book a free website review",
    href: "/get-started",
  },
} as const;
