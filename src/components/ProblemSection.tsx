const problems = [
  ["01", "Systems that do not talk", "CRM, payments, ads, calls and spreadsheets each hold a different version of the customer journey."],
  ["02", "Numbers nobody fully trusts", "When definitions and sources drift, reporting becomes a reconciliation exercise instead of a decision tool."],
  ["03", "People filling the gaps", "Manual exports, checks, copy-paste and follow-ups become invisible infrastructure that costs time every week."],
];

export default function ProblemSection() {
  return (
    <section className="border-y border-border bg-white" aria-labelledby="problem-heading">
      <div className="section-content py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">The friction</p>
            <h2 id="problem-heading" className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              More tools should not mean more work.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-xl leading-relaxed text-secondary md:text-2xl">
              Most growing businesses already have the software they need. The problem is the space between those tools: duplicated data, broken handoffs and decisions built on incomplete information.
            </p>

            <div className="mt-14 divide-y divide-border border-y border-border">
              {problems.map(([number, title, body]) => (
                <div key={title} className="grid gap-4 py-7 sm:grid-cols-[56px_220px_1fr] sm:items-start">
                  <span className="text-xs font-semibold tracking-widest text-secondary">{number}</span>
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm leading-relaxed text-secondary">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
