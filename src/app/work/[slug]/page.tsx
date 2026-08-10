import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { ArrowLeft } from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton";
import { caseStudies } from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = caseStudies.find((c) => c.slug === params.slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: `/work/${params.slug}`,
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const item = caseStudies.find((c) => c.slug === params.slug);

  if (!item) {
    return (
      <div className="section-content py-20">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Case study not found</h1>
        <Link href="/work" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to work
        </Link>
      </div>
    );
  }

  return (
    <article className="section-content py-20">
      <Link href="/work" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to work
      </Link>

      <header className="mt-6">
        <SectionLabel>{item.eyebrow}</SectionLabel>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">{item.title}</h1>
        <p className="mt-4 text-secondary text-lg leading-relaxed max-w-2xl">{item.summary}</p>
      </header>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-xl font-semibold tracking-tight">The challenge</h2>
            <p className="mt-3 text-sm text-secondary leading-relaxed">
              The operation needed a clearer way to understand performance across multiple channels and platforms. Important information was scattered across systems, and managers had to move between views to understand what was happening.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-xl font-semibold tracking-tight">The system</h2>
            <p className="mt-3 text-sm text-secondary leading-relaxed">
              Datalift designed a reporting layer that brought the relevant activity together, separated event sales from telesales, supported regional analysis and made the operational detail available behind the headline KPIs.
            </p>
          </section>

          <section className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-xl font-semibold tracking-tight">How it works</h2>
            <ol className="mt-3 text-sm text-secondary list-decimal list-inside space-y-1">
              <li>Capture — Collect the relevant records from connected systems.</li>
              <li>Clean — Standardise names, dates, statuses and definitions.</li>
              <li>Reconcile — Match records and identify exceptions.</li>
              <li>Explain — Present the result in a human-readable reporting layer.</li>
              <li>Act — Trigger an alert, task or follow-up when action is needed.</li>
            </ol>
          </section>

          <section className="rounded-2xl border border-border bg-white p-6">
            <h2 className="text-xl font-semibold tracking-tight">The result</h2>
            <p className="mt-3 text-sm text-secondary leading-relaxed">
              The team gained a more consistent view of performance, a clearer route from high-level KPI to record-level detail and a better foundation for future alerts and forecasting.
            </p>
          </section>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-white p-5">
            <p className="text-xs text-secondary">Impact</p>
            <ul className="mt-2 text-sm space-y-2">
              <li>Consolidated reporting layer</li>
              <li>Faster management review</li>
              <li>Repeatable analysis</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <p className="text-xs text-secondary">Quote</p>
            <blockquote className="mt-2 text-sm italic text-secondary">“More consistent view of performance.”</blockquote>
            <p className="mt-1 text-xs text-secondary">Client name withheld.</p>
          </div>
        </aside>
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-white p-8 md:p-12">
        <p className="text-xl font-semibold tracking-tight">Build a clearer version of your operation.</p>
        <PrimaryButton href="/contact" className="mt-4">
          Start a conversation
        </PrimaryButton>
      </div>
    </article>
  );
}
