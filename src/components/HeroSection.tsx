"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const stats = [
  { value: "11 hrs", label: "saved per team, weekly" },
  { value: "40+", label: "systems connected" },
  { value: "99.9%", label: "pipeline uptime" },
];

const nodes = [
  { className: "left-[12%] top-[36%] h-3 w-3", color: "blue", delay: "0s" },
  { className: "left-[24%] top-[18%] h-2.5 w-2.5", color: "cyan", delay: "0.6s" },
  { className: "left-[34%] top-[66%] h-3.5 w-3.5", color: "blue", delay: "1.1s" },
  { className: "right-[16%] top-[24%] h-2.5 w-2.5", color: "cyan", delay: "0.3s" },
  { className: "right-[9%] top-[58%] h-3 w-3", color: "blue", delay: "1.4s" },
  { className: "right-[28%] bottom-[16%] h-2.5 w-2.5", color: "cyan", delay: "0.9s" },
];

const rings = [
  {
    className: "left-[2%] top-[34%] h-[150px] w-[620px]",
    style: { "--hero-start": "-9deg", "--hero-end": "-5deg", "--hero-duration": "12s" },
  },
  {
    className: "left-[5%] top-[31%] h-[220px] w-[590px] hero-ring-cyan",
    style: { "--hero-start": "10deg", "--hero-end": "6deg", "--hero-duration": "15s" },
  },
  {
    className: "left-[0%] top-[25%] h-[330px] w-[660px] hero-ring-soft",
    style: { "--hero-start": "-18deg", "--hero-end": "-13deg", "--hero-duration": "18s" },
  },
];

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-headline"
      className="home-hero relative isolate overflow-hidden bg-[#F4F6F3]"
    >
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div className="hero-field absolute inset-0" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-[72px] md:px-10 md:py-24 lg:min-h-[820px] lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,700px)_minmax(430px,1fr)] lg:items-center">
          <div className="relative z-10 max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-3"
            >
              <span className="h-0.5 w-6 bg-[#075CFF]" aria-hidden />
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#101416]">
                Data systems for growing businesses
              </p>
            </motion.div>

            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-7 max-w-[720px] text-[clamp(3.25rem,7vw,5.875rem)] font-semibold leading-[0.92] text-[#101416]"
            >
              Your data is there.
              <span className="block text-[#075CFF]">Let's make it useful.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-8 max-w-[560px] text-base leading-8 text-[#5F696D] md:text-[17px]"
            >
              We connect the systems, reports, and workflows your team relies on so people spend less
              time chasing answers and more time acting on them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/contact"
                className="inline-flex h-[52px] items-center gap-4 rounded-full bg-[#075CFF] py-1.5 pl-6 pr-2 text-sm font-bold text-white shadow-[0_10px_26px_rgba(7,92,255,0.30)] transition-transform hover:-translate-y-0.5 focus-visible:outline-[#075CFF]"
              >
                See how we can help
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#075CFF]">
                  <ArrowRight className="h-[18px] w-[18px]" aria-hidden />
                </span>
              </Link>

              <Link
                href="/work"
                className="inline-flex h-11 items-center gap-3 text-sm font-medium text-[#101416] transition-colors hover:text-[#075CFF] focus-visible:outline-[#075CFF]"
              >
                <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#D9DFE0] bg-white/40">
                  <Play className="h-3.5 w-3.5 fill-[#101416]" aria-hidden />
                </span>
                Watch the 2-min tour
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-12 flex max-w-2xl flex-wrap gap-y-5 border-t border-[#D9DFE0] pt-6"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-[150px] pr-8 first:pl-0 md:border-r md:border-[#D9DFE0] md:px-8 md:first:pl-0 md:last:border-r-0"
                >
                  <div className="text-2xl font-semibold text-[#101416]">{stat.value}</div>
                  <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-[#5F696D]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="relative z-0 mx-auto h-[430px] w-full max-w-[680px] lg:h-[620px] lg:max-w-none"
            aria-hidden
          >
            <div className="hero-orbit-scene absolute inset-0">
              {rings.map((ring) => (
                <div
                  key={ring.className}
                  className={`hero-motion hero-ring absolute ${ring.className}`}
                  style={ring.style as CSSProperties}
                />
              ))}

              <div className="hero-motion hero-sphere absolute left-[23%] top-[17%] h-[320px] w-[320px] md:h-[390px] md:w-[390px] lg:left-[19%] lg:top-[16%] lg:h-[470px] lg:w-[470px]">
                <div className="hero-sphere-shine" />
              </div>

              {nodes.map((node) => (
                <span
                  key={`${node.className}-${node.delay}`}
                  className={`hero-motion hero-node absolute ${node.className} ${node.color === "cyan" ? "hero-node-cyan" : ""}`}
                  style={{ "--hero-delay": node.delay } as CSSProperties}
                />
              ))}

              <div className="hero-motion hero-chip absolute left-[4%] top-[9%] hidden sm:flex">
                <span className="h-2 w-2 rounded-full bg-[#12B76A] shadow-[0_0_8px_rgba(18,183,106,0.55)]" />
                <span>
                  <strong>All pipelines healthy</strong>
                  <small>Synced 4 min ago</small>
                </span>
              </div>

              <div className="hero-motion hero-chip absolute bottom-[8%] right-[1%] hidden md:flex">
                <span className="hero-bars" aria-hidden>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span>
                  <strong>+18.4% reporting speed</strong>
                  <small>Last 30 days</small>
                </span>
              </div>

              <div className="hero-motion absolute right-[7%] top-[5%] hidden items-center gap-2 rounded-full bg-[#101416] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-white shadow-[0_12px_28px_rgba(16,20,22,0.24)] md:flex">
                Warehouse
                <ArrowRight className="h-3.5 w-3.5 text-[#22C9F0]" aria-hidden />
                Decisions
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
