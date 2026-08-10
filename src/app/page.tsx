import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import ProblemSection from "@/components/ProblemSection";
import ServicePreview from "@/components/ServicePreview";
import FeatureSection from "@/components/FeatureSection";
import CaseStudyTeaser from "@/components/CaseStudyTeaser";
import CtaSection from "@/components/CtaSection";
import SectionLabel from "@/components/SectionLabel";
import PrimaryButton from "@/components/PrimaryButton";

export const metadata: Metadata = {
  title: "Make your data work harder.",
  description:
    "Datalift connects business systems, builds reliable reporting and automates repetitive work so growing teams can make faster, clearer decisions.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsStrip />
      <ProblemSection />
      <ServicePreview />
      <FeatureSection />
      <CaseStudyTeaser />
      <CtaSection />

      <section className="section-full border-t border-border bg-white">
        <div className="section-content py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <SectionLabel>Work</SectionLabel>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                Real systems. Useful outcomes.
              </h2>
              <p className="mt-4 text-secondary text-lg leading-relaxed">
                Explore how Datalift approaches reporting, reconciliation, operational visibility and automation across real business workflows.
              </p>
            </div>
            <PrimaryButton href="/work">View all work</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
