"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav, site } from "@/content/site";
import PrimaryButton from "@/components/PrimaryButton";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            {site.name}
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Primary">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
            <PrimaryButton href="/contact">{site.cta}</PrimaryButton>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" className="md:hidden pb-4" aria-label="Mobile">
            <div className="flex flex-col gap-3 text-sm">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-border px-4 py-2 hover:border-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <PrimaryButton href="/contact">{site.cta}</PrimaryButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
