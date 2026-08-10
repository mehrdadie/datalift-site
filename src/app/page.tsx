import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import ProblemSection from "@/components/ProblemSection";
import ServicePreview from "@/components/ServicePreview";
import HomeCaseStudies from "@/components/HomeCaseStudies";
import FeatureSection from "@/components/FeatureSection";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "AI, Data & Automation Systems",
  description:
    "Datalift connects business systems, builds reliable reporting and automates repetitive work so growing teams can move faster with less manual effort.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsStrip />
      <ProblemSection />
      <ServicePreview />
      <HomeCaseStudies />
      <FeatureSection />
      <CtaSection />
    </div>
  );
}
