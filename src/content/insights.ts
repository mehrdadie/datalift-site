export const insights = [
  {
    slug: "why-dashboards-fail",
    title: "Why dashboards fail when KPI definitions are unclear",
    date: "2025-01-15",
  },
  {
    slug: "data-integration-vs-visibility",
    title: "The practical difference between data integration and data visibility",
    date: "2025-02-02",
  },
  {
    slug: "designing-useful-daily-sales-report",
    title: "How to design a useful daily sales report",
    date: "2025-03-10",
  },
  {
    slug: "what-to-automate-first",
    title: "What to automate first in a growing operations team",
    date: "2025-04-05",
  },
  {
    slug: "reconcile-multiple-billing-platforms",
    title: "How to reconcile data from multiple billing platforms",
    date: "2025-05-20",
  },
  {
    slug: "exception-handling-matters",
    title: "Why exception handling matters more than perfect automation",
    date: "2025-06-11",
  },
  {
    slug: "meaningful-call-metrics",
    title: "Meaningful call metrics: measuring conversations instead of activity alone",
    date: "2025-07-08",
  },
  {
    slug: "ai-support-crm-without-black-box",
    title: "How AI can support CRM operations without creating a black box",
    date: "2025-08-19",
  },
  {
    slug: "from-spreadsheet-to-dependable-reporting",
    title: "From spreadsheet maintenance to a dependable reporting workflow",
    date: "2025-09-14",
  },
  {
    slug: "questions-before-dashboard",
    title: "The five questions to ask before building a dashboard",
    date: "2025-10-03",
  },
] as const;

export type Insight = typeof insights[number];
