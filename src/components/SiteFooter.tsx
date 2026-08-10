import Link from "next/link";
import { footerLinks } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-border bg-white">
      <div className="section-content py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <Link href="/" className="text-sm font-bold uppercase tracking-[0.18em]">Datalift</Link>
            <p className="mt-6 max-w-[13ch] text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl">
              Data should make the next move easier.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="eyebrow">Explore</p>
              <ul className="mt-5 space-y-3 text-sm">
                {footerLinks.slice(0, 4).map((item) => (
                  <li key={item.href}><Link href={item.href} className="text-secondary transition-colors hover:text-foreground">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">More</p>
              <ul className="mt-5 space-y-3 text-sm">
                {footerLinks.slice(4, 8).map((item) => (
                  <li key={item.href}><Link href={item.href} className="text-secondary transition-colors hover:text-foreground">{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Connect</p>
              <ul className="mt-5 space-y-3 text-sm text-secondary">
                <li><Link href="/contact" className="transition-colors hover:text-foreground">Start a conversation</Link></li>
                <li><Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Datalift. All rights reserved.</span>
          <span>AI · Data · Automation</span>
        </div>
      </div>
    </footer>
  );
}
