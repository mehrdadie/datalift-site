import Link from "next/link";

interface SectionLabelProps {
  readonly children: React.ReactNode;
  readonly href?: string;
}

export default function SectionLabel({ children, href }: SectionLabelProps) {
  const content = href ? (
    <Link href={href} className="hover:text-foreground transition-colors">
      {children}
    </Link>
  ) : (
    children
  );

  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
      {content}
    </p>
  );
}
