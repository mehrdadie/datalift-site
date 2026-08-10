import Link from "next/link";
import { primaryNav, secondaryNav, footerLinks } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            Datalift
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-secondary hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background hover:bg-secondary transition-colors"
            >
              Start a conversation
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>

        <nav aria-label="Secondary" className="hidden md:flex items-center gap-6 border-t border-border py-2 text-xs text-secondary">
          {secondaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
