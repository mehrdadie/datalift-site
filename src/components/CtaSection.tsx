import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="section-content pb-10 pt-4 sm:pb-16">
      <div className="overflow-hidden rounded-[1.75rem] bg-foreground px-6 py-14 text-background sm:rounded-[2.5rem] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-background/60">Start with the friction</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <h2 className="max-w-[11ch] text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.93] tracking-[-0.06em]">
            What part of your business feels harder than it should?
          </h2>
          <div className="lg:pb-2">
            <p className="max-w-lg text-base leading-7 text-background/70 sm:text-lg sm:leading-8">
              Show us the workflow, the messy data or the manual process. We will help you find the most valuable place to simplify, connect or automate.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-background px-6 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              Talk to Datalift
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
