"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import PrimaryButton from "@/components/PrimaryButton";
import { caseStudies } from "@/content/case-studies";

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
        {caseStudies.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <article className="rounded-2xl border border-border p-5 bg-white h-full">
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary">{item.category}</p>
              <h3 className="mt-2 font-medium leading-snug">{item.title}</h3>
              <p className="mt-2 text-sm text-secondary">{item.summary}</p>
              <Link href={`/work/${item.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                Read case study <span aria-hidden>→</span>
              </Link>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
