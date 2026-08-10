import Link from "next/link";

const cases = [
  {
    title: "One operating view for a multi-channel sales team",
    category: "Reporting Systems",
    summary:
      "Connected event, sales, registration and telesales data into a clearer management reporting experience.",
    outcome: "From separate reports to one decision layer.",
  },
  {
    title: "Making subscription data reconcile",
    category: "Data Foundations",
    summary:
      "Structured data from multiple subscription and payment platforms into a repeatable daily reporting model.",
    outcome: "From conflicting counts to an explainable source of truth.",
  },
  {
    title: "Turning conversations into operational insight",
    category: "AI Intelligence",
    summary:
      "Combined call activity, contact records and message history to give teams a more complete view of customer conversations.",
    outcome: "From isolated interactions to useful context.",
  },
  {
    title: "Removing the manual work between systems",
    category: "Workflow Automation",
    summary:
      "Automated routine data cleaning, enrichment, alerts and updates across CRM and reporting workflows.",
    outcome: "From recurring admin to dependable automation.",
  },
];

export default function CaseStudyTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Real systems. Useful outcomes.
        </h2>
        <p className="mt-4 text-secondary text-lg leading-relaxed max-w-2xl">
          Explore how Datalift approaches reporting, reconciliation, operational
          visibility and automation across real business workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cases.map((item) => (
          <article key={item.title} className="rounded-2xl border border-border p-5 bg-white">
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary">{item.category}</p>
            <h3 className="mt-2 font-medium leading-snug">{item.title}</h3>
            <p className="mt-2 text-sm text-secondary">{item.summary}</p>
            <p className="mt-3 text-sm font-medium">{item.outcome}</p>
            <Link href="/work" className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
              Read case study <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
