import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SecondaryButtonProps {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly className?: string;
}

export default function SecondaryButton({ href, children, className = "" }: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium hover:border-foreground transition-colors ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}
