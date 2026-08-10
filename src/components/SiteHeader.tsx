"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav, site } from "@/content/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="section-content">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="text-sm font-bold uppercase tracking-[0.18em]">
            {site.name}
          </Link>

          <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-secondary transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full bg-foreground px-5 font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              {site.cta}
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M5 8h14M5 16h14" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" className="border-t border-border pb-6 pt-5 md:hidden" aria-label="Mobile">
            <div className="flex flex-col">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-border py-4 text-2xl font-medium tracking-[-0.03em]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background"
                onClick={() => setOpen(false)}
              >
                {site.cta}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
