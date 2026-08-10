import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Practical Data Systems Approach",
  description:
    "Learn how Datalift moves from messy data and manual processes to reliable reporting, useful automation and measurable operational improvement.",
};

const principles = [
  "Clarity before complexity.",
  "Evidence before assumptions.",
  "Automation with an audit trail.",
  "Human review where judgement matters.",
  "Small improvements that compound.",
  "Documentation that outlives the project.",
];

const faqs = [
  {
    q: "Do you replace our existing tools?",
    a: "Usually, no. We first look at how to make the systems you already use work together more effectively.",
  },
  {
    q: "Can you work with messy or incomplete data?",
    a: "Yes. Messy data is often the starting point. We make the gaps visible, establish rules and separate reliable results from records that need review.",
  },
  {
    q: "Do you only build dashboards?",
    a: "No. A dashboard is often the visible part of a larger system. We can help with the data flow, definitions, automation and operational process behind it.",
  },
  {
    q: "How quickly can we start?",
    a: "The first step is a focused conversation about the process you want to improve. From there, we can recommend a small, valuable starting point.",
  },
];

export default function ApproachPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Start with the decision, then build the system.</h1>
        <p className="mt-4 text-secondary text-lg leading-relaxed max-w-2xl">
          We begin with the decisions your team needs to make. From there, we work backwards through the data, definitions and workflows required to make those decisions easier.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-border p-4 bg-white">
            <p className="text-xs text-secondary">0{i + 1}</p>
            <p className="mt-1 font-medium">
              {["Understand", "Define", "Connect", "Build", "Improve"][i]}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Principles</h2>
          <ul className="mt-4 space-y-2 text-sm text-secondary list-disc list-inside">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Common questions</h2>
          <dl className="mt-4 space-y-3">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-border p-4 bg-white">
                <dt className="font-medium">{item.q}</dt>
                <dd className="mt-1 text-sm text-secondary">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
