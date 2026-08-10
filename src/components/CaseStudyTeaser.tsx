"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import PrimaryButton from "@/components/PrimaryButton";

const cases = [
  {
    slug: "one-operating-view",
    title: "One operating view for a multi-channel sales team",
    category: "Reporting Systems",
    summary:
      "Connected event, sales, registration and telesales data into a clearer management reporting experience.",
    outcome: "From separate reports to one decision layer.",
    image: "/images/datalift-work-reporting.webp",
  },
  {
    slug: "making-subscription-data-reconcile",
    title: "Making subscription data reconcile",
    category: "Data Foundations",
    summary:
      "Structured data from multiple subscription and payment platforms into a repeatable daily reporting model.",
    outcome: "From conflicting counts to an explainable source of truth.",
    image: "/images/datalift-work-reconciliation.webp",
  },
  {
    slug: "turning-conversations-into-insight",
    title: "Turning conversations into operational insight",
    category: "AI Intelligence",
    summary:
      "Combined call activity, contact records and message history to give teams a more complete view of customer conversations.",
    outcome: "From isolated interactions to useful context.",
    image: "/images/datalift-work-conversation-intelligence.webp",
  },
  {
    slug: "removing-the-manual-work",
    title: "Removing the manual work between systems",
    category: "Workflow Automation",
    summary:
      "Automated routine data cleaning, enrichment, alerts and updates across CRM and reporting workflows.",
    outcome: "From recurring admin to dependable automation.",
    image: "/images/datalift-work-automation.webp",
  },
];

export default function CaseStudyTeaser() {
  return (
    <section className="section-content py-20" aria-labelledby="case-studies-heading">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div className="max-w-xl">
          <SectionLabel>Selected work</SectionLabel>
          <h2 id="case-studies-heading" className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Real systems. Useful outcomes.
          </h2>
          <p className="mt-4 text-secondary text-lg leading-relaxed">
            Explore how Datalift approaches reporting, reconciliation, operational visibility and automation across real business workflows.
          </p>
        </div>
        <PrimaryButton href="/work">View all work</PrimaryButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cases.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <article className="rounded-2xl border border-border bg-white overflow-hidden h-full flex flex-col">
              <div className="relative h-48 w-full overflow-hidden bg-background">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">{item.category}</p>
                <h3 className="mt-2 font-medium leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-secondary">{item.summary}</p>
                <p className="mt-3 text-sm font-medium">{item.outcome}</p>
                <Link href={`/work/${item.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                  Read case study <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
