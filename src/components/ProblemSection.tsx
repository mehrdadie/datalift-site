import Link from "next/link";
import { ArrowRight } from "lucide-react";

const problems = [
  {
    title: "Disconnected systems",
    body: "Your CRM, marketing platforms, payment tools and call records each tell part of the story.",
  },
  {
    title: "Unclear numbers",
    body: "Teams spend time debating which figure is correct instead of acting on what it means.",
  },
  {
    title: "Manual work everywhere",
    body: "Copying, cleaning, checking and reconciling data quietly consumes hours every week.",
  },
];

export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20" aria-labelledby="problem-heading">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">
            The problem is rarely a lack of data.
          </h2>
          <p className="mt-4 text-secondary text-lg leading-relaxed max-w-xl">
            Most businesses already have more data than they can comfortably use.
            The real problem is that it lives in different tools, follows
            different definitions and arrives too late to support the next
            decision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {problems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border p-5 bg-white">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
