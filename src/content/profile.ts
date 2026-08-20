/**
 * Single source of truth for every piece of copy on the site.
 * Editing this file changes the page — no component surgery required.
 */

export const profile = {
  name: "Mehrdad Fashami",
  role: "Independent Data, Automation & Growth Systems Consultant",
  shortRole: "Independent Consultant",
  email: "hello@mehrdadfashami.com",
  linkedin: "https://www.linkedin.com/in/mehrdadfashami/",
  /** Set NEXT_PUBLIC_SITE_URL at build time; this is the fallback. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mehrdadfashami.com",
  location: "Working internationally",
} as const

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
] as const

export const hero = {
  eyebrow: "Independent Data, Automation & Growth Systems Consultant",
  headingLead: "I connect the systems",
  headingAccent: "behind your business.",
  body:
    "Data, CRM, marketing, sales and operations — connected into one system that gives you clearer decisions, better visibility and less manual work.",
  primaryCta: { label: "Discuss a project", href: "#contact" },
  secondaryCta: { label: "See selected work", href: "#work" },
  trust: "Available for selected consulting and implementation projects.",
} as const

/** Nodes for the hero systems visualisation. Coordinates are on a 0–100 grid. */
export const heroNodes = [
  { id: "marketing", label: "Marketing", x: 17, y: 13 },
  { id: "crm", label: "CRM", x: 50, y: 8 },
  { id: "sales", label: "Sales", x: 84, y: 17 },
  { id: "calls", label: "Calls", x: 13, y: 47 },
  { id: "data", label: "Data", x: 50, y: 50 },
  { id: "payments", label: "Payments", x: 86, y: 52 },
  { id: "reporting", label: "Reporting", x: 22, y: 85 },
  { id: "automation", label: "Automation", x: 76, y: 87 },
] as const

export const heroEdges = [
  ["marketing", "data"],
  ["crm", "data"],
  ["sales", "data"],
  ["calls", "data"],
  ["payments", "data"],
  ["data", "reporting"],
  ["data", "automation"],
  ["marketing", "crm"],
  ["crm", "sales"],
  ["sales", "payments"],
  ["reporting", "automation"],
] as const

export const platforms = {
  title: "I work across the full business data chain.",
  items: [
    "Salesforce",
    "GoHighLevel",
    "HubSpot",
    "BigQuery",
    "Power BI",
    "n8n",
    "Aircall",
    "Stripe",
    "Chargebee",
    "GA4",
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "PostHog",
    "Supabase",
    "Python",
  ],
} as const

export const problems = {
  titleLead: "Businesses rarely have a data problem.",
  titleAccent: "They have a connection problem.",
  subtitle:
    "The biggest issues usually happen between systems, teams and reporting processes.",
  cards: [
    {
      icon: "split",
      title: "Your systems disagree",
      body: "CRM says one thing. Finance says another. Marketing reports something else.",
      outcome: "I create one reliable source of truth.",
    },
    {
      icon: "repeat",
      title: "Reporting is still manual",
      body:
        "Teams export files, update spreadsheets, reconcile numbers and rebuild the same reports every week.",
      outcome: "I automate the workflow.",
    },
    {
      icon: "revenue",
      title: "Revenue cannot be explained",
      body:
        "You know how much revenue came in, but cannot confidently explain which activity generated it.",
      outcome: "I connect marketing and sales activity to revenue.",
    },
    {
      icon: "gap",
      title: "Opportunities disappear between systems",
      body:
        "Leads, calls, follow-ups and customer activity exist, but nobody sees the full journey.",
      outcome: "I connect the customer journey.",
    },
  ],
} as const

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * DRAFT CONTENT — written as illustrative examples of the type of work, not as
 * claims about identified clients. Figures are representative. Replace with real
 * engagement numbers (and named clients, where permitted) before publishing.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const caseStudies = [
  {
    id: "reporting-automation",
    index: "01",
    metric: "30 hrs → 2 hrs",
    metricUnit: "per week",
    title: "Reporting Automation",
    sector: "Multi-channel training provider",
    problem:
      "A recurring management reporting process relied on manual exports from five platforms, spreadsheet updates, data checks and repeated reconciliation. By the time the numbers were agreed, the week they described was already over.",
    change:
      "The workflow was rebuilt around scheduled data pipelines, a modelled reporting layer with agreed KPI definitions, automated validation rules and alerting when a source stops delivering.",
    outcome:
      "Reporting preparation dropped from roughly 30 hours per week to around 2 hours of review and validation. Numbers now arrive before the meeting instead of after it.",
    results: [
      { value: "93%", label: "Less manual preparation" },
      { value: "6", label: "Sources consolidated" },
      { value: "Daily", label: "Refresh instead of weekly" },
    ],
    stack: ["BigQuery", "n8n", "Power BI", "Google Ads", "Meta Ads", "Stripe"],
    visual: "workflow",
  },
  {
    id: "lead-sales-intelligence",
    index: "02",
    metric: "One customer.",
    metricUnit: "One view.",
    title: "360° Lead & Sales Intelligence",
    sector: "Subscription business with an outbound sales team",
    problem:
      "CRM records, call activity, marketing source data and payment history lived in four systems. Nobody could answer a simple question — what actually happened with this customer — without opening four tabs and guessing.",
    change:
      "Lead, call, opportunity and payment signals were resolved to a single customer identity, cleaned of duplicates, and combined into one unified view with follow-up quality and pipeline movement made visible.",
    outcome:
      "Sales teams and management gained one clear picture of customer activity, follow-up and opportunity status — including the leads that had never been contacted at all.",
    results: [
      { value: "4 → 1", label: "Systems to check" },
      { value: "100%", label: "Calls matched to CRM records" },
      { value: "Visible", label: "Follow-up quality per rep" },
    ],
    stack: ["Salesforce", "Aircall", "GoHighLevel", "Chargebee", "PostgreSQL"],
    visual: "customer",
  },
  {
    id: "revenue-attribution",
    index: "03",
    metric: "Marketing → Revenue",
    metricUnit: "end to end",
    title: "Revenue Attribution",
    sector: "Paid-acquisition-led business, multiple markets",
    problem:
      "Marketing spend, lead activity and closed revenue were held in separate systems with inconsistent campaign naming. Channel performance was argued about monthly and never settled.",
    change:
      "Campaign, lead, opportunity and payment data were connected through one attribution model, with enforced naming standards, validated tracking and revenue joined back to the original acquisition source.",
    outcome:
      "Management could finally see which channels and campaigns were contributing revenue rather than volume — and move budget on evidence instead of opinion.",
    results: [
      { value: "Spend → £", label: "Joined at customer level" },
      { value: "3", label: "Ad platforms reconciled" },
      { value: "CAC / ROAS", label: "Reported on real revenue" },
    ],
    stack: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "BigQuery", "Stripe"],
    visual: "attribution",
  },
] as const

export const positioning = {
  titleLead: "Most specialists work inside one system.",
  titleAccent: "I work between them.",
  body:
    "The value is not in another dashboard or another automation. It is in connecting the entire business journey — from the first click to the invoice, and back into the decision that follows.",
  centre: ["Connected", "Business System"],
  satellites: [
    "Marketing",
    "CRM",
    "Sales",
    "Calls",
    "Payments",
    "Customer",
    "Operations",
    "AI",
    "Reporting",
  ],
} as const

export const capabilities = [
  {
    key: "connect",
    title: "Connect",
    description: "Connect the platforms your business already relies on.",
    items: [
      "APIs and webhooks",
      "CRM integrations",
      "Data pipelines",
      "Data warehouses",
      "System architecture",
      "Payment integrations",
      "Marketing platform integrations",
    ],
  },
  {
    key: "understand",
    title: "Understand",
    description: "Turn disconnected activity into useful business intelligence.",
    items: [
      "Business intelligence",
      "Revenue attribution",
      "Marketing analytics",
      "Customer journey analysis",
      "Sales reporting",
      "Executive dashboards",
      "Funnel analytics",
    ],
  },
  {
    key: "automate",
    title: "Automate",
    description:
      "Remove repetitive work and automate the processes that should not be manual.",
    items: [
      "Operational workflows",
      "CRM automation",
      "AI workflows",
      "Data validation",
      "Alerts and monitoring",
      "Reporting automation",
      "Lead routing",
    ],
  },
] as const

export const architecture = {
  titleLead: "From disconnected tools",
  titleAccent: "to one working system.",
  body:
    "Every engagement ends up looking like some version of this. The names change; the shape rarely does.",
  sources: [
    { id: "google-ads", label: "Google Ads", note: "Spend, campaigns, clicks" },
    { id: "meta-ads", label: "Meta Ads", note: "Spend, campaigns, creative" },
    { id: "salesforce", label: "Salesforce", note: "Leads, opportunities, owners" },
    { id: "gohighlevel", label: "GoHighLevel", note: "Contacts, pipelines, funnels" },
    { id: "aircall", label: "Aircall", note: "Calls, outcomes, follow-up" },
    { id: "stripe", label: "Stripe", note: "Payments, refunds, subscriptions" },
    { id: "ga4", label: "GA4", note: "Sessions, sources, conversions" },
  ],
  stages: [
    {
      id: "data-layer",
      label: "Data layer",
      note: "One warehouse. Deduplicated, standardised, identity-resolved, versioned.",
    },
    {
      id: "business-logic",
      label: "Business logic",
      note: "Agreed KPI definitions, attribution rules, segments and thresholds.",
    },
  ],
  outputs: [
    {
      id: "dashboard",
      label: "Dashboard",
      note: "Executive, marketing, sales, revenue and customer journey reporting.",
      children: ["Executive view", "Marketing performance", "Sales performance", "Revenue attribution"],
    },
    {
      id: "automation",
      label: "Automation",
      note: "Triggers that act on the data instead of waiting for someone to notice.",
      children: ["Lead routing", "Follow-up triggers", "Data validation alerts", "Anomaly detection"],
    },
  ],
} as const

export const approach = {
  title: "How I work",
  subtitle:
    "Four stages. Each one ends with something you can see, use or hand to your team.",
  steps: [
    {
      n: "01",
      title: "Diagnose",
      body: "Understand what is broken, unclear, duplicated or unnecessarily manual.",
      deliverable: "A written map of your systems, data gaps and the cost of each one.",
    },
    {
      n: "02",
      title: "Design",
      body: "Define the simplest architecture that solves the actual business problem.",
      deliverable: "An architecture and KPI definition your team agrees with before build.",
    },
    {
      n: "03",
      title: "Build",
      body: "Connect, automate, validate and document the solution.",
      deliverable: "A working system, monitored, documented and handed over.",
    },
    {
      n: "04",
      title: "Improve",
      body: "Use the resulting data to identify the next opportunity.",
      deliverable: "A prioritised shortlist of what is now worth fixing next.",
    },
  ],
  statement: {
    lead: "You do not need to manage the technical details.",
    accent: "That is part of the job.",
  },
} as const

export const about = {
  title: "Independent by design.",
  paragraphs: [
    "I work directly with businesses that need senior-level data, analytics and automation capability without building another internal department.",
    "My work combines business intelligence, marketing analytics, CRM architecture, automation and system integration.",
    "I am most useful when the problem crosses multiple platforms, teams or data sources and needs someone who can understand both the business problem and the technical implementation.",
  ],
  tags: [
    "Data & BI",
    "Marketing Analytics",
    "Revenue Operations",
    "CRM",
    "Automation",
    "AI Workflows",
    "System Integration",
  ],
  facts: [
    { label: "Engagement", value: "Fixed scope, retainer or implementation + support" },
    { label: "Works with", value: "Founders, CEOs, COOs, CMOs, Heads of Sales & RevOps" },
    { label: "Availability", value: "Selected projects, working internationally" },
  ],
} as const

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * DRAFT CONTENT — these quotes were written as placeholders to show the section
 * working. They are NOT real client feedback. Replace every quote with a genuine,
 * approved client testimonial before this site goes live. Publishing invented
 * testimonials as real feedback is misleading and, in the UK/EU, unlawful.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const testimonials = [
  {
    quote:
      "We stopped arguing about whose number was right. That sounds small. It changed how the whole leadership meeting runs.",
    role: "Commercial Director",
    org: "B2B training group",
  },
  {
    quote:
      "The first two weeks were uncomfortable — he showed us leads we had paid for and never contacted. Then he built the thing that makes sure it cannot happen again.",
    role: "Head of Sales",
    org: "Subscription fintech",
  },
  {
    quote:
      "Monday used to cost me a full day of exports and formatting. Now I spend twenty minutes checking a report that built itself overnight.",
    role: "Marketing Operations Manager",
    org: "Multi-brand e-commerce",
  },
  {
    quote:
      "He is the only external person we have worked with who understood the Salesforce side and the finance side well enough to make them agree with each other.",
    role: "Chief Operating Officer",
    org: "Professional services firm",
  },
] as const

export const bestFit = {
  title: "Where I am most useful",
  intro:
    "I work best with growing businesses where operational complexity has started to outgrow spreadsheets and disconnected tools.",
  items: [
    "You use several SaaS platforms that do not talk to each other",
    "You have meaningful lead or customer volume",
    "Your reporting still depends heavily on spreadsheets",
    "You need better visibility across departments",
    "You have recurring processes worth automating",
    "You need reliable marketing-to-revenue reporting",
    "You want one person to own the problem end-to-end",
    "Your problem crosses more than one system",
  ],
  highlight: "Best suited to projects where the problem crosses more than one system.",
  notFit: {
    title: "Probably not a fit",
    items: [
      "A single one-off chart or spreadsheet formula",
      "Hourly technical support without a defined outcome",
      "Work that stays inside one tool and one team",
    ],
  },
} as const

export const finalCta = {
  headline: "Have a messy system?",
  sub: "That is usually where I can help.",
  body:
    "Tell me what is not working, what is still manual, or what you cannot currently see clearly. If it is not something I should take on, I will tell you that too.",
  primary: "Discuss a project",
  secondary: "Email me",
  prompts: [
    "Our numbers do not match between systems",
    "Reporting takes too long every week",
    "We cannot explain where revenue comes from",
    "Leads are falling through the process",
  ],
} as const
