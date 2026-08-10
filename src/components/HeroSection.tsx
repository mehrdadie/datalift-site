"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-headline" className="section-content pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary"
          >
            AI · Data · Automation
          </motion.p>

          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 max-w-5xl text-[clamp(3.4rem,8vw,7.4rem)] font-semibold leading-[0.92] tracking-[-0.055em]"
          >
            Make the work behind your business work better.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1fr_auto] md:items-end"
          >
            <p className="max-w-2xl text-lg leading-relaxed text-secondary md:text-xl">
              Datalift connects your systems, turns messy operational data into a clear picture,
              and automates the repetitive work that slows teams down.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/work"
                className="inline-flex h-12 items-center rounded-full border border-border bg-white px-6 text-sm font-medium transition-colors hover:border-foreground"
              >
                See the work
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="lg:translate-y-8"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white p-2 shadow-[0_20px_70px_rgba(17,17,17,0.07)]">
            <Image
              src="/images/datalift-hero-system-map.webp"
              alt="A connected Datalift system linking business data, calls, CRM, payments, marketing and reporting"
              width={1200}
              height={675}
              className="h-auto w-full rounded-[1.6rem]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
