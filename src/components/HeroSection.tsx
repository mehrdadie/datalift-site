"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Boxes } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import PrimaryButton from "@/components/PrimaryButton";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-headline" className="section-content pt-20 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <SectionLabel>Data systems for businesses in motion</SectionLabel>

          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]"
          >
            Make your data work harder.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-lg text-secondary leading-relaxed max-w-xl"
          >
            Datalift connects the systems behind your business, turns scattered
            information into a clear operating picture and automates the work
            that slows your team down.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <PrimaryButton href="/contact">Start a conversation</PrimaryButton>
            <Link
              href="/approach"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium hover:border-foreground transition-colors"
            >
              See how we work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="relative rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs text-secondary">
              <Boxes className="h-4 w-4" aria-hidden />
              System map
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-xs text-secondary">
              {["CRM", "Sales", "Calls", "Payments", "Marketing", "Reporting"].map(
                (node) => (
                  <div
                    key={node}
                    className="rounded-2xl border border-border p-3 bg-background"
                  >
                    <span className="inline-block h-2 w-2 rounded-full bg-[#B8F36B]" />
                    <span className="ml-2">{node}</span>
                  </div>
                )
              )}
            </div>
            <div className="mt-4 rounded-2xl border border-border p-4">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-[#B8F36B]" />
                <span className="text-sm font-medium">Datalift</span>
              </div>
              <p className="mt-1 text-xs text-secondary">
                Connected data layer for your business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
