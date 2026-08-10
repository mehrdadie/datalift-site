export const primaryNav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const secondaryNav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "https://linkedin.com", label: "LinkedIn" },
] as const;

export const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

export const site = {
  name: "Datalift",
  tagline: "Make your data work harder.",
  description:
    "Datalift connects business systems, builds reliable reporting and automates repetitive work so growing teams can make faster, clearer decisions.",
  url: "https://datalift.tech",
  email: "hello@datalift.tech",
  linkedin: "https://linkedin.com/company/datalift",
  cta: "Start a conversation",
  secondaryCta: "See how we work",
  stats: [
    { label: "Built around the systems your team already uses.", value: "" },
  ],
  trust: ["CRM", "Marketing", "Sales", "Calls", "Payments", "Reporting"],
} as const;

export type Site = typeof site;
