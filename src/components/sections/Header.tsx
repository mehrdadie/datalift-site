"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"
import { nav, profile } from "@/content/profile"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-base/72 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-[68px] items-center justify-between gap-6">
        <a href="#top" className="group flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
            {profile.name}
          </span>
          <span className="mono-label hidden sm:inline">{profile.shortRole}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[14.5px] text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm">
            Discuss a project
            <ArrowRight size={15} strokeWidth={2} aria-hidden />
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-base/97 backdrop-blur-xl md:hidden"
      >
        <div className="shell flex flex-col gap-1 py-5">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 py-3.5 font-display text-xl text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-5 w-full"
          >
            Discuss a project
            <ArrowRight size={16} strokeWidth={2} aria-hidden />
          </a>
        </div>
      </div>
    </header>
  )
}
