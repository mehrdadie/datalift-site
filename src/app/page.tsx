import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import ProblemSection from "@/components/ProblemSection";
import ServicePreview from "@/components/ServicePreview";
import FeatureSection from "@/components/FeatureSection";
import CaseStudyTeaser from "@/components/CaseStudyTeaser";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Make your data work harder.",
  description:
    "Datalift connects business systems, builds reliable reporting and automates repetitive work so growing teams can make faster, clearer decisions.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 py-16">
      <HeroSection />
      <StatsStrip />
      <ProblemSection />
      <ServicePreview />
      <FeatureSection />
      <CaseStudyTeaser />
      <CtaSection />
    </div>
  );
}
