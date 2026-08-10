import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  readonly href?: string;
  readonly children: React.ReactNode;
  readonly className?: string;
}

export default function PrimaryButton({ href = "/contact", children, className = "" }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-secondary transition-colors ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}
