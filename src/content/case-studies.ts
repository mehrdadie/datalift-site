export const caseStudies = [
  {
    slug: "one-operating-view",
    title: "From scattered sales activity to one management view",
    category: "Reporting Systems",
    summary:
      "A growing events and sales operation needed a clearer way to understand registrations, attendance, conversions, event sales and telesales performance across regions and event formats.",
    eyebrow: "CASE STUDY / Reporting",
  },
  {
    slug: "making-subscription-data-reconcile",
    title: "Making subscription performance explainable",
    category: "Data Foundations",
    summary:
      "Subscription data from multiple payment and billing platforms needed to become a repeatable daily view of active users, new subscriptions, cancellations and renewals.",
    eyebrow: "CASE STUDY / Data Foundations",
  },
  {
    slug: "turning-conversations-into-insight",
    title: "Making customer conversations part of the operating picture",
    category: "AI Intelligence",
    summary:
      "Call records, contacts and messages held valuable context, but the information was difficult to review consistently across the team.",
    eyebrow: "CASE STUDY / AI Intelligence",
  },
  {
    slug: "removing-the-manual-work",
    title: "Quiet data problems, fixed before they become reporting problems",
    category: "Workflow Automation",
    summary:
      "Small inconsistencies in CRM records can create large reporting issues. Datalift built an automated workflow to identify, enrich and correct selected records using documented rules.",
    eyebrow: "CASE STUDY / Automation",
  },
] as const;

export type CaseStudy = typeof caseStudies[number];
