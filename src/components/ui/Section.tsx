import type { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly tint?: boolean;
}

export default function Section({ children, className = "", tint = false }: SectionProps) {
  return (
    <section className={`section-full ${tint ? "bg-[#F4F6F3]" : "bg-background"} ${className}`}>
      <Container className="py-20 md:py-28">{children}</Container>
    </section>
  );
}
