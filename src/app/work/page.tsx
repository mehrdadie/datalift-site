import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/content/case-studies";

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Selected work</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Systems that make progress visible.</h1>
        <p className="mt-4 text-secondary text-lg leading-relaxed max-w-2xl">
          Our work sits where data, operations and decision-making meet. We build systems that make performance easier to understand and improvement easier to repeat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {caseStudies.map((item) => (
          <article key={item.slug} className="rounded-2xl border border-border p-5 bg-white">
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary">{item.category}</p>
            <h3 className="mt-2 font-medium leading-snug">{item.title}</h3>
            <p className="mt-2 text-sm text-secondary">{item.summary}</p>
            <Link href={`/work/${item.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
              Read case study <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-white p-8 md:p-12">
        <h2 className="text-2xl font-semibold tracking-tight">Have a system that feels harder than it should?</h2>
        <p className="mt-3 text-secondary text-lg leading-relaxed max-w-2xl">
          We can help map the gaps, define the logic and build a practical next version.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-secondary transition-colors"
        >
          Talk to Datalift
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
