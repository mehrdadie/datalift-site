"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="section-content pb-20 pt-14 sm:pb-28 sm:pt-20 lg:pb-36 lg:pt-24" aria-labelledby="hero-headline">
      <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-end lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="eyebrow"
          >
            AI · Data · Automation
          </motion.p>

          <motion.h1
            id="hero-headline"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="display-xl mt-6 max-w-[9.5ch]"
          >
            Make your business run smarter.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-8 max-w-2xl sm:mt-10"
          >
            <p className="max-w-[38rem] text-[1.08rem] leading-[1.65] text-secondary sm:text-xl">
              Datalift connects your data, automates the work between your tools and builds AI systems that help your team move faster with less manual effort.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/work"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-6 text-sm font-medium transition-colors hover:border-foreground"
              >
                See selected work
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="relative lg:translate-y-4"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-white p-2 shadow-[0_24px_80px_rgba(17,17,17,0.08)] sm:rounded-[2.5rem]">
            <Image
              src="/images/datalift-hero-system-map.webp"
              alt="Connected business systems flowing through a Datalift data and automation layer"
              width={1200}
              height={675}
              className="aspect-[4/3] w-full rounded-[1.35rem] object-cover sm:aspect-[16/11] sm:rounded-[2rem]"
              priority
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium shadow-sm sm:left-8">
            One connected operating picture
          </div>
        </motion.div>
      </div>
    </section>
  );
}
