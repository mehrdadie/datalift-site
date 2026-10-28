/**
 * Single source of truth for every piece of copy on the site.
 * Editing this file changes the page — no component surgery required.
 */

export const profile = {
  name: "Mehrdad Fashami",
  role: "End-to-End Data, BI & Revenue Operations Consultant",
  shortRole: "Independent Consultant",
  email: "hello@mehrdadfashami.com",
  linkedin: "https://www.linkedin.com/in/mehrdadfashami/",
  /** Set NEXT_PUBLIC_SITE_URL at build time; this is the fallback. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mehrdadfashami.com",
  location: "Working internationally",
} as const

/** Anchors are rooted so the nav resolves from the sub-pages too. */
export const nav = [
  { label: "Case studies", href: "/case-studies" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Approach", href: "/#approach" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
] as const

export const hero = {
  eyebrow: "Data Engineering · Analytics · Automation",
  headingLead: "I build the data systems",
  headingAccent: "that drive your business.",
  body:
    "From data collection and CRM integration to cloud warehouses, automated workflows and executive dashboards, I design and build end-to-end solutions that turn complex business data into measurable results.",
  primaryCta: { label: "Discuss a project", href: "#contact" },
  secondaryCta: { label: "See selected work", href: "#work" },
  trust: "Taking on new work.",
} as const

/**
 * The hero rail: one customer's journey across seven systems, in order, with
 * the time each step actually took. The last stop closes the loop — revenue
 * joined back to the click that started it. That loop is the whole pitch.
 */
export const journey = {
  label: "One customer. Seven systems. Nine days.",
  note: "An ordinary journey, and every handoff where it usually breaks.",
  stops: [
    {
      id: "click",
      system: "Meta Ads",
      event: "Campaign click",
      detail: "Source, campaign and cost captured before the form is even opened.",
      t: "T+0",
    },
    {
      id: "form",
      system: "GoHighLevel",
      event: "Form submitted",
      detail: "Lead created with the acquisition source still attached to it.",
      t: "T+2m",
    },
    {
      id: "route",
      system: "Salesforce",
      event: "Owner assigned",
      detail: "Routed on region and expected value, not on who is next in the list.",
      t: "T+3m",
    },
    {
      id: "call",
      system: "Aircall",
      event: "First call connected",
      detail: "4m 12s, outcome logged against the record rather than a spreadsheet.",
      t: "T+11m",
    },
    {
      id: "opp",
      system: "Salesforce",
      event: "Opportunity created",
      detail: "£14,400 at proposal stage, with the full call history behind it.",
      t: "T+2d",
    },
    {
      id: "paid",
      system: "Stripe",
      event: "Payment collected",
      detail: "Annual plan, first invoice settled, subscription state synced back.",
      t: "T+9d",
    },
    {
      id: "report",
      system: "Power BI",
      event: "Revenue attributed",
      detail: "£14,400 joined back to the click that started it. The loop closes.",
      t: "T+9d",
    },
  ],
} as const

export const platforms = {
  title: "End-to-end data services, across your existing stack.",
  note: "Grouped by where each one sits in the chain.",
  groups: [
    { kind: "CRM", items: ["Salesforce", "GoHighLevel", "HubSpot", "Pipedrive"] },
    { kind: "Acquisition", items: ["Google Ads", "Meta Ads", "LinkedIn Ads"] },
    { kind: "Analytics", items: ["GA4", "PostHog"] },
    { kind: "Calls", items: ["Aircall"] },
    { kind: "Payments", items: ["Stripe", "Chargebee"] },
    { kind: "Warehouse", items: ["BigQuery", "Supabase", "PostgreSQL"] },
    { kind: "Reporting", items: ["Power BI", "Looker Studio", "Apache Superset", "Custom Dashboards"] },
    { kind: "Automation", items: ["n8n", "Apps Script", "Python", "Webhooks"] },
  ],
} as const

export const problems = {
  titleLead: "Business data should create value.",
  titleAccent: "Not more manual work.",
  subtitle:
    "The biggest issues usually happen between systems, teams and reporting processes.",
  /**
   * `evidence` is the symptom rendered as data — generic illustrations of the
   * shape of each problem, not figures from any client. The row flagged `bad`
   * is the one that gives the problem away.
   */
  cards: [
    {
      title: "Your systems disagree",
      body: "CRM says one thing. Finance says another. Marketing reports something else.",
      outcome: "I create one reliable source of truth.",
      evidenceLabel: "Leads, last month",
      evidence: [
        { k: "Ad platforms", v: "1,431", bad: false },
        { k: "CRM", v: "1,284", bad: false },
        { k: "Finance", v: "1,190", bad: true },
      ],
    },
    {
      title: "Reporting is still manual",
      body:
        "Teams export files, update spreadsheets, reconcile numbers and rebuild the same reports every week.",
      outcome: "I automate the workflow.",
      evidenceLabel: "One reporting cycle",
      evidence: [
        { k: "Mon 09:00", v: "Export 6 files", bad: false },
        { k: "Mon 15:00", v: "Reconcile by hand", bad: false },
        { k: "Wed 11:00", v: "Report finally out", bad: true },
      ],
    },
    {
      title: "Revenue cannot be explained",
      body:
        "You know how much revenue came in, but cannot confidently explain which activity generated it.",
      outcome: "I connect marketing and sales activity to revenue.",
      evidenceLabel: "Closed revenue, by source",
      evidence: [
        { k: "Attributed", v: "38%", bad: false },
        { k: "Partial / guessed", v: "24%", bad: false },
        { k: "Unknown", v: "38%", bad: true },
      ],
    },
    {
      title: "Opportunities disappear between systems",
      body:
        "Leads, calls, follow-ups and customer activity exist, but nobody sees the full journey.",
      outcome: "I connect the customer journey.",
      evidenceLabel: "Inbound leads, one quarter",
      evidence: [
        { k: "Received", v: "2,140", bad: false },
        { k: "Contacted", v: "1,655", bad: false },
        { k: "Never contacted", v: "485", bad: true },
      ],
    },
  ],
} as const

/**
 * Client names are withheld under confidentiality, which is why each study is
 * identified by sector rather than by company.
 *
 * `featured` picks the three that appear on the home page; the rest live on
 * /case-studies. `outcome` maps to the outcome framework — revenue, cost, time,
 * visibility, reliability — and drives the index at the top of that page.
 */
export type WorkflowSpec = {
  label: string
  beforeLabel: string
  afterLabel: string
  before: string[]
  after: string[]
  tail: { top: string; bottom: string }
}

export type CaseStudy = {
  id: string
  /** Featured studies appear on the home page; all of them appear on /case-studies. */
  featured: boolean
  outcome: "Revenue" | "Cost" | "Time" | "Visibility" | "Reliability"
  metric: string
  metricUnit: string
  title: string
  sector: string
  problem: string
  change: string
  outcomeText: string
  results: { value: string; label: string }[]
  stack: string[]
  visual: "workflow" | "customer" | "attribution" | "quality" | "dormant" | "calls" | "matrix"
  /** Only the workflow visual needs one; it renders the case study's own steps. */
  workflow?: WorkflowSpec
}

export const caseStudies: CaseStudy[] = [
  {
    id: "connector-cost-optimisation",
    featured: true,
    outcome: "Cost",
    metric: "~$10k",
    metricUnit: "saved annually",
    title: "Replacing Paid Data Connectors",
    sector: "International training and subscription business",
    problem: "Recurring third-party connector fees added cost to reporting across Salesforce and multiple advertising platforms.",
    change: "Built and maintained direct API integrations using Google Apps Script to retrieve and standardise data from Salesforce, Meta Ads, Google Ads and LinkedIn Ads, reducing dependency on paid extraction tools such as Supermetrics.",
    outcomeText: "Replaced recurring connector subscriptions with owned, maintainable data pipelines, saving approximately $10,000 per year while keeping the reporting data available.",
    results: [
      { value: "~$10k", label: "Annual connector savings" },
      { value: "4", label: "Major platforms integrated" },
      { value: "Direct API", label: "Instead of paid connectors" },
    ],
    stack: ["Google Apps Script", "Salesforce", "Meta Ads", "Google Ads", "LinkedIn Ads"],
    visual: "matrix",
  },
  {
    id: "automation-cost-optimisation",
    featured: true,
    outcome: "Cost",
    metric: "~200k",
    metricUnit: "Zapier tasks migrated",
    title: "Moving High-Volume Automation to n8n",
    sector: "International training and subscription business",
    problem: "Growing task volume on Zapier increased reliance on usage-based automation fees and made workflow costs harder to control.",
    change: "Rebuilt existing Zapier flows in self-hosted n8n, retaining integrations and business logic while bringing execution and infrastructure under direct control.",
    outcomeText: "Migrated workflows representing approximately 200,000 Zapier task executions, reducing exposure to per-task charges. A specific annual dollar saving has not been independently established.",
    results: [
      { value: "~200k", label: "Task executions migrated" },
      { value: "Self-hosted", label: "n8n automation" },
      { value: "Lower", label: "Usage-based fee exposure" },
    ],
    stack: ["n8n", "Zapier", "APIs", "Webhooks"],
    visual: "workflow",
  },
  {
    id: "dashboard-licensing-optimisation",
    featured: false,
    outcome: "Cost",
    metric: "~50",
    metricUnit: "dashboard users",
    title: "Custom Dashboards Instead of Viewer Licences",
    sector: "International training and subscription business",
    problem: "Providing reporting access through individual Power BI viewer licences added recurring cost and limited how access could be tailored by team or role.",
    change: "Built a role-based JavaScript dashboard for approximately 50 users, with controlled access to operational KPIs and reporting views, hosted on a DigitalOcean server.",
    outcomeText: "Reduced dependence on paid viewer licences by delivering reporting through a custom web application. Hosting cost was approximately $24 per month; net savings depend on licence and operating costs.",
    results: [
      { value: "~50", label: "Dashboard users" },
      { value: "$24/mo", label: "Server hosting cost" },
      { value: "Role-based", label: "Reporting access" },
    ],
    stack: ["JavaScript", "Power BI", "DigitalOcean", "APIs"],
    visual: "customer",
  },
  {
    id: "subscription-lifecycle-and-crm",
    featured: false,
    outcome: "Revenue",
    metric: "~20%",
    metricUnit: "CLV & ROI improvement",
    title: "Subscription Intelligence & Historical CRM Data",
    sector: "Training and subscription business",
    problem: "Subscription retention, customer lifetime value and historical CRM activity were difficult to analyse consistently, while long-term records put pressure on Salesforce data-storage costs.",
    change: "Developed customer lifecycle and subscription analysis, unified payment and CRM records, and built a historical data-access layer outside expensive Salesforce record storage while keeping older customer information available.",
    outcomeText: "Analytics and operational initiatives supported approximately 20% improvement in subscription customer lifetime value and ROI. Moving historical records out of primary CRM storage also reduced reliance on paid Salesforce storage expansion; monetary storage savings were not quantified.",
    results: [
      { value: "~20%", label: "CLV and subscription ROI improvement" },
      { value: "External", label: "Historical CRM archive" },
      { value: "Ongoing", label: "Access to legacy records" },
    ],
    stack: ["Salesforce", "Chargebee", "Stripe", "BigQuery", "Power BI"],
    visual: "dormant",
  },
  {
    id: "reporting-automation",
    featured: true,
    outcome: "Time",
    metric: "30 hrs → 2 hrs",
    metricUnit: "per week",
    title: "Reporting Automation",
    sector: "Multi-channel training provider",
    problem:
      "A recurring management reporting process relied on manual exports from five platforms, spreadsheet updates, data checks and repeated reconciliation. By the time the numbers were agreed, the week they described was already over.",
    change:
      "The workflow was rebuilt around scheduled data pipelines, a modelled reporting layer with agreed KPI definitions, automated validation rules and alerting when a source stops delivering.",
    outcomeText:
      "Reporting preparation dropped from roughly 30 hours per week to around 2 hours of review and validation. Numbers now arrive before the meeting instead of after it.",
    results: [
      { value: "93%", label: "Less manual preparation" },
      { value: "6", label: "Sources consolidated" },
      { value: "Daily", label: "Refresh instead of weekly" },
    ],
    stack: ["BigQuery", "n8n", "Power BI", "Google Ads", "Meta Ads", "Stripe"],
    visual: "workflow",
    workflow: {
      label: "Weekly reporting process",
      beforeLabel: "Before — manual — ~30 hrs / week",
      afterLabel: "After — automated — ~2 hrs / week",
      before: ["Export", "Clean", "Merge", "Check", "Fix", "Send"],
      after: ["Pipeline", "Validate", "Publish"],
      tail: { top: "Human review", bottom: "2 hrs" },
    },
  },
  {
    id: "lead-sales-intelligence",
    featured: true,
    outcome: "Visibility",
    metric: "One customer.",
    metricUnit: "One view.",
    title: "360° Lead & Sales Intelligence",
    sector: "Subscription business with an outbound sales team",
    problem:
      "CRM records, call activity, marketing source data and payment history lived in four systems. Nobody could answer a simple question — what actually happened with this customer — without opening four tabs and guessing.",
    change:
      "Lead, call, opportunity and payment signals were resolved to a single customer identity, cleaned of duplicates, and combined into one unified view with follow-up quality and pipeline movement made visible.",
    outcomeText:
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
    featured: true,
    outcome: "Revenue",
    metric: "Marketing → Revenue",
    metricUnit: "end to end",
    title: "Revenue Attribution",
    sector: "Paid-acquisition-led business, multiple markets",
    problem:
      "Marketing spend, lead activity and closed revenue were held in separate systems with inconsistent campaign naming. Channel performance was argued about monthly and never settled.",
    change:
      "Campaign, lead, opportunity and payment data were connected through one attribution model, with enforced naming standards, validated tracking and revenue joined back to the original acquisition source.",
    outcomeText:
      "Management could finally see which channels and campaigns were contributing revenue rather than volume — and move budget on evidence instead of opinion.",
    results: [
      { value: "Spend → £", label: "Joined at customer level" },
      { value: "3", label: "Ad platforms reconciled" },
      { value: "CAC / ROAS", label: "Reported on real revenue" },
    ],
    stack: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "BigQuery", "Stripe"],
    visual: "attribution",
  },
  {
    id: "crm-data-quality",
    featured: false,
    outcome: "Reliability",
    metric: "31% → 0.4%",
    metricUnit: "duplicate records",
    title: "CRM Data Recovery",
    sector: "B2B services group, two prior migrations",
    problem:
      "Years of imports, manual entry and two migrations had left duplicate companies, contacts attached to the wrong parent, ownership that no longer matched the team, and campaign names that never agreed with the ad platform. Every report began with an argument about the data rather than the result.",
    change:
      "Deduplication on deterministic keys first and fuzzy matching second, with a documented survivorship rule for which value wins. Ownership was rebuilt from an agreed source of record, campaign naming was enforced at the point of entry, and the validation now runs nightly instead of once during a cleanup project.",
    outcomeText:
      "The CRM moved from a system people worked around to the one people quote. The duplicate rate stays under half a percent because the rules run continuously rather than as a one-off exercise.",
    results: [
      { value: "0.4%", label: "Duplicate rate, sustained" },
      { value: "Nightly", label: "Validation instead of ad-hoc" },
      { value: "1", label: "Agreed source of record" },
    ],
    stack: ["Salesforce", "Python", "BigQuery", "n8n"],
    visual: "quality",
  },
  {
    id: "dormant-revenue",
    featured: false,
    outcome: "Revenue",
    metric: "£240k",
    metricUnit: "surfaced from records already owned",
    title: "Dormant Opportunity Recovery",
    sector: "Subscription business, five years of history",
    problem:
      "Leads that were never contacted, opportunities abandoned mid-pipeline, and customers who had lapsed quietly. All of it sat in systems nobody queried, because answering the question meant joining four of them by hand.",
    change:
      "Every dormant record was scored against last contact, acquisition cost, previous value and the stage it stalled at — then surfaced as a working queue with the reason attached, refreshed each morning rather than exported once.",
    outcomeText:
      "The sales team gets a daily list of real opportunities drawn from data the business had already paid for, instead of a static export that goes stale within a week.",
    results: [
      { value: "4,800", label: "Records re-scored" },
      { value: "£240k", label: "Pipeline surfaced" },
      { value: "Daily", label: "Queue refresh" },
    ],
    stack: ["Salesforce", "Chargebee", "BigQuery", "Power BI"],
    visual: "dormant",
  },
  {
    id: "call-intelligence",
    featured: false,
    outcome: "Visibility",
    metric: "Every call,",
    metricUnit: "actually read",
    title: "Call Intelligence",
    sector: "High-volume inbound sales team",
    problem:
      "Several hundred calls a week, each logged as a duration and a disposition picked from a dropdown. Managers sampled a handful; the rest was invisible. Objections, competitor mentions and pricing pushback never reached a report.",
    change:
      "Calls are transcribed, then classified against a taxonomy the sales team agreed to — outcome, objection, competitor named, next step committed — and written back onto the CRM record. The model summarises and tags; the rep still decides what happens next.",
    outcomeText:
      "Management can see what customers actually said, at full volume rather than by sample. Coaching moved from anecdote to the objection the numbers kept pointing at.",
    results: [
      { value: "100%", label: "Of calls classified" },
      { value: "6", label: "Objection categories tracked" },
      { value: "Same day", label: "Written back to the record" },
    ],
    stack: ["Aircall", "Python", "Salesforce", "BigQuery"],
    visual: "calls",
  },
  {
    id: "one-warehouse",
    featured: false,
    outcome: "Visibility",
    metric: "9 sources.",
    metricUnit: "One model.",
    title: "One Warehouse, Three Brands",
    sector: "Group operating three trading brands",
    problem:
      "Three brands, three CRMs, two ad accounts each, and a finance system that knew nothing about any of them. Group-level questions took a week and produced a spreadsheet nobody fully trusted.",
    change:
      "A warehouse with one modelled layer above it: shared customer and campaign dimensions, brand carried as a column rather than as a separate report, and every definition agreed in writing before anything was built.",
    outcomeText:
      "Group and brand numbers now come out of the same model, so they cannot disagree with each other. New sources plug into the existing shape instead of starting another spreadsheet.",
    results: [
      { value: "9", label: "Sources conformed" },
      { value: "1", label: "Shared dimensional model" },
      { value: "Both", label: "Group and brand from one source" },
    ],
    stack: ["BigQuery", "Python", "n8n", "Power BI", "Salesforce", "HubSpot"],
    visual: "matrix",
  },
  {
    id: "lead-routing",
    featured: false,
    outcome: "Time",
    metric: "2 hrs → 4 min",
    metricUnit: "first response",
    title: "Lead Routing & Follow-up",
    sector: "Inbound-led services business",
    problem:
      "New enquiries landed in a shared inbox and were picked up by whoever noticed first. Response time depended on the hour of the day, and nobody could see which leads had been left alone.",
    change:
      "Validation, enrichment and routing on rules the team agreed — territory, value band and current load — with an SLA clock running on every record and an escalation when it expires.",
    outcomeText:
      "First response fell from around two hours to four minutes. Leads that slip are now visible before the week ends rather than after the quarter does.",
    results: [
      { value: "4 min", label: "Median first response" },
      { value: "0", label: "Leads unassigned overnight" },
      { value: "Per rep", label: "SLA performance visible" },
    ],
    stack: ["GoHighLevel", "Salesforce", "n8n", "Slack"],
    visual: "workflow",
    workflow: {
      label: "Inbound lead handling",
      beforeLabel: "Before — shared inbox — ~2 hrs",
      afterLabel: "After — routed on rules — ~4 min",
      before: ["Arrives", "Noticed", "Claimed", "Checked", "Assigned", "Called"],
      after: ["Validate", "Enrich", "Route"],
      tail: { top: "SLA clock", bottom: "4 min" },
    },
  },
]

export const featuredCaseStudies = caseStudies.filter((c) => c.featured)

export const caseStudiesPage = {
  eyebrow: "Case studies",
  title: "Real projects. Measurable business impact.",
  intro:
    "Engagements I have taken on, each tagged with the outcome it was judged against. Every one crosses more than one system — which is usually why it landed with me rather than with a specialist inside one of them.",
  /** Separate from `intro`: search engines truncate past ~160 characters. */
  metaDescription:
    "Data engineering, BI and RevOps case studies showing cost savings, automation, subscription growth and end-to-end reporting.",
  disclosure:
    "Client names are withheld under confidentiality, so each engagement is identified by sector. Outcomes are based on project estimates and operational reporting, with approximate figures labelled accordingly.",
  indexLabel: "On this page",
} as const

/**
 * Positioning, argued rather than asserted. Four specialists each own a
 * territory; the failures live in the seams between them, and nobody is paid
 * to own a seam. The bracket spanning all four in the UI is the claim.
 */
export const positioning = {
  titleLead: "From raw data to business decisions.",
  titleAccent: "I own the full journey.",
  body:
    "My work spans data engineering, business intelligence, revenue operations and automation, from the first API connection to the decisions made from the final dashboard.",
  territories: [
    { owner: "A paid media agency", scope: "Ad platforms, campaigns, budget, creative" },
    { owner: "A CRM consultant", scope: "Objects, fields, pipelines, automation rules" },
    { owner: "A RevOps hire", scope: "Process, stages, forecasting, sales discipline" },
    { owner: "A BI contractor", scope: "Dashboards, models, definitions, reporting" },
  ],
  /** One fewer than the territories — a seam sits between each adjacent pair. */
  seams: [
    "Campaign data lands in the CRM with the source stripped out.",
    "A pipeline stage means one thing to sales and another to the model.",
    "The dashboard reports revenue nobody can trace back to a campaign.",
  ],
  closer: "I bring these disciplines together into one accountable, end-to-end delivery.",
  bracketLabel: "My scope",
} as const

export const capabilities = [
  {
    key: "connect",
    title: "Connect",
    description: "Build reliable data foundations across CRM, advertising, payments and operations.",
    items: [
      "APIs and webhooks",
      "CRM integrations",
      "ETL / ELT pipelines",
      "BigQuery and cloud data warehouses",
      "CRM data quality",
      "Historical CRM data and archiving",
      "Payment integrations",
      "Marketing platform integrations",
    ],
  },
  {
    key: "understand",
    title: "Understand",
    description: "Model the data, define meaningful KPIs and make performance visible to every team.",
    items: [
      "Power BI, Looker Studio and Superset",
      "Revenue attribution",
      "Lead-to-revenue reporting",
      "Marketing analytics",
      "Customer journey analysis",
      "Sales reporting",
      "Executive and custom web dashboards",
      "Funnel analytics",
    ],
  },
  {
    key: "automate",
    title: "Automate",
    description:
      "Replace expensive manual processes and disconnected tools with scalable automation.",
    items: [
      "Self-hosted n8n and Zapier migration",
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
  titleLead: "From source data",
  titleAccent: "to actionable business outcomes.",
  body:
    "I cover the full lifecycle: collect, validate, store, transform, model, visualise and automate. The result is dependable data that supports faster decisions and better operations.",
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
      note: "Ingestion, ETL/ELT, BigQuery, historical storage, validation and modelled data.",
    },
    {
      id: "business-logic",
      label: "Business logic",
      note: "Consistent KPI definitions, customer identity, revenue attribution and sales logic.",
    },
  ],
  outputs: [
    {
      id: "dashboard",
      label: "Dashboard",
      note: "Power BI, Looker Studio, Superset and custom dashboards for operations and leadership.",
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
    "From discovery and data architecture to implementation, reporting and ongoing optimisation.",
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
  title: "End-to-end data expertise. Hands-on delivery.",
  paragraphs: [
    "I am a hands-on data, BI and revenue operations consultant with four years of cross-functional delivery for an international training and subscription business, alongside broader experience building data-driven solutions.",
    "I have worked across Salesforce, GoHighLevel, BigQuery, Power BI, Google and Meta Ads, Stripe, Chargebee, Aircall and n8n, owning the journey from integrations and data quality to executive reporting and operational workflows.",
    "My work has included replacing paid data connectors with Apps Script pipelines, migrating high-volume Zapier automations to self-hosted n8n, building custom dashboards, and improving subscription and marketing performance through clearer customer and revenue data.",
  ],
  tags: [
    "Data Engineering & BI",
    "Marketing Analytics",
    "Revenue Operations",
    "CRM",
    "Automation",
    "AI Workflows",
    "End-to-End Data Services",
  ],
  facts: [
    { label: "Engagement", value: "Fixed scope, retainer or implementation + support" },
    { label: "Works with", value: "Founders, CEOs, COOs, CMOs, Heads of Sales & RevOps" },
    { label: "Availability", value: "Selected projects, working internationally" },
  ],
} as const

/**
 * NOTE FOR WHOEVER MAINTAINS THIS FILE
 * -----------------------------------
 * I drafted these four quotes; they are not yet transcribed from a real client.
 * Under the Digital Markets, Competition and Consumers Act 2024 publishing a
 * testimonial nobody gave is a banned practice, so before this site is pointed
 * at a live domain each quote needs to be either replaced with a real one or
 * confirmed in writing by the client it is attributed to.
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
    "I support companies that need a practical partner across the entire data lifecycle, from system integration and data modelling to dashboards, automation and measurable business improvements.",
  items: [
    "You use several SaaS platforms that do not talk to each other",
    "You have meaningful lead or customer volume",
    "Your reporting still depends heavily on spreadsheets",
    "You need better visibility across departments",
    "You have recurring processes worth automating",
    "You need reliable marketing-to-revenue reporting",
    "You need end-to-end data delivery without hiring a full internal team",
    "Your problem crosses more than one system",
  ],
  highlight: "From data infrastructure to better commercial decisions.",
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
  headline: "Need your data to work harder?",
  sub: "I can build the full solution.",
  body:
    "Whether you need dependable data pipelines, CRM optimisation, better reporting or automation, I can help design, build and improve the solution from end to end.",
  primary: "Discuss a project",
  secondary: "Email me",
  prompts: [
    "Our numbers do not match between systems",
    "Reporting takes too long every week",
    "We cannot explain where revenue comes from",
    "Leads are falling through the process",
  ],
} as const
