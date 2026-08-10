import Link from "next/link";
import { footerLinks } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-semibold tracking-tight">
              Datalift
            </Link>
            <p className="mt-3 text-sm text-secondary max-w-xs">
              Data should make the next decision easier.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-secondary">
              {footerLinks.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-secondary">
              {footerLinks.slice(6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Social</p>
            <ul className="mt-3 space-y-2 text-sm text-secondary">
              <li>
                <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-xs text-secondary">
          © {new Date().getFullYear()} Datalift. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
