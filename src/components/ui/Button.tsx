import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly href: string;
  readonly variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className = "",
  href,
  variant = "primary",
}: ButtonProps) {
  const variantClass =
    variant === "secondary"
      ? "border border-border bg-white text-foreground hover:border-foreground"
      : "bg-foreground text-background hover:bg-secondary";

  return (
    <Link
      href={href}
      className={`inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors ${variantClass} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}
