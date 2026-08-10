export const services = [
  {
    title: "Data foundations",
    body: "We organise the sources, fields, statuses and definitions that your reporting depends on. The goal is not complexity. It is a dependable base for everything that follows.",
    includes: [
      "Source mapping",
      "Data models",
      "Field definitions",
      "Cleaning rules",
      "Matching logic",
      "Exception handling",
      "Documentation",
    ],
  },
  {
    title: "Reporting and decision systems",
    body: "We turn operational data into dashboards and reporting views that answer the questions your team actually asks.",
    includes: [
      "KPI design",
      "Management dashboards",
      "Drill-down views",
      "Regional and channel analysis",
      "Scheduled refreshes",
      "Reporting documentation",
    ],
  },
  {
    title: "Workflow automation",
    body: "We remove repeatable manual work between the tools your team already uses.",
    includes: [
      "Data sync",
      "Scheduled workflows",
      "CRM updates",
      "Enrichment",
      "Alerts",
      "Notifications",
      "Exception queues",
      "Audit logs",
    ],
  },
  {
    title: "Sales and CRM operations",
    body: "We help sales teams create cleaner definitions, more useful activity views and better operational follow-through.",
    includes: [
      "Lead and opportunity logic",
      "Sales-type classification",
      "Ownership checks",
      "Campaign enrichment",
      "Pipeline reporting",
      "Follow-up signals",
    ],
  },
  {
    title: "Subscription and revenue intelligence",
    body: "We connect billing and payment data so active, new, lost, renewal and cancellation movements can be monitored with confidence.",
    includes: [
      "Multi-platform ingestion",
      "Cohort logic",
      "Status definitions",
      "Daily summaries",
      "Reconciliation",
      "Anomaly detection",
    ],
  },
  {
    title: "Practical AI intelligence",
    body: "We apply AI where it creates useful context: summarising conversations, identifying patterns, classifying records and helping teams decide what deserves attention.",
    includes: [
      "Call and message summaries",
      "Structured notes",
      "Classification",
      "Prioritisation",
      "Natural-language reporting",
      "Human review controls",
    ],
  },
] as const;

export type Service = typeof services[number];
