import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "A Practical Data Systems Approach",
  description:
    "Learn how Datalift moves from messy data and manual processes to reliable reporting, useful automation and measurable operational improvement.",
};

const steps = [
  { title: "Understand", image: "/images/datalift-approach-understand.webp" },
  { title: "Define", image: "/images/datalift-approach-define.webp" },
  { title: "Connect", image: "/images/datalift-approach-connect.webp" },
  { title: "Build", image: "/images/datalift-approach-build.webp" },
  { title: "Improve", image: "/images/datalift-approach-improve.webp" },
];

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
    <div className="section-content py-20">
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Start with the decision, then build the system.</h1>
        <p className="mt-4 text-secondary text-lg leading-relaxed max-w-2xl">
          We begin with the decisions your team needs to make. From there, we work backwards through the data, definitions and workflows required to make those decisions easier.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-white overflow-hidden mb-16">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src="/images/datalift-approach-process.webp"
            alt="Five-step data systems process"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <p className="text-xs text-secondary uppercase tracking-widest">{step.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
