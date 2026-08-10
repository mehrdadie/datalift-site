import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insights } from "@/content/insights";

export const metadata: Metadata = {
  title: "Data, Automation and AI Operations",
  description:
    "Practical insights on business reporting, data quality, CRM operations, automation and AI workflows for growing teams.",
};

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Insights</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Ideas for making business systems clearer, calmer and more useful.</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((item) => (
          <article key={item.slug} className="rounded-2xl border border-border p-5 bg-white">
            <p className="text-xs text-secondary">{new Date(item.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</p>
            <h3 className="mt-2 font-medium leading-snug">{item.title}</h3>
            <Link href={`/insights/${item.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
              Read article <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-white p-8 md:p-12">
        <p className="text-lg font-medium">Useful ideas for better business systems.</p>
        <Link
          href="/contact"
          className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-secondary transition-colors"
        >
          Subscribe for occasional insights
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
