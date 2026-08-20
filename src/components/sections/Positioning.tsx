"use client"

import { motion, useReducedMotion } from "framer-motion"
import { positioning } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

const R = 38 // orbit radius, in % of the box

function polar(i: number, total: number) {
  const angle = (i / total) * Math.PI * 2 - Math.PI / 2
  return { x: 50 + R * Math.cos(angle), y: 50 + R * Math.sin(angle) }
}

export default function Positioning() {
  const reduced = useReducedMotion()
  const total = positioning.satellites.length
  const points = positioning.satellites.map((label, i) => ({ label, ...polar(i, total) }))

  return (
    <section className="section border-t border-line">
      <div className="shell grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <Reveal>
          <div>
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-accent/60" />
              Positioning
            </p>
            <h2 className="display-2">
              {positioning.titleLead}
              <br />
              <span className="text-accent">{positioning.titleAccent}</span>
            </h2>
            <p className="lead prose-w mt-7">{positioning.body}</p>

            <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:hidden">
              {positioning.satellites.map((s) => (
                <li key={s} className="mono-label flex items-center gap-2">
                  <span aria-hidden className="h-1 w-1 rounded-full bg-accent/70" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className="relative mx-auto hidden aspect-square w-full max-w-[520px] sm:block"
            role="img"
            aria-label={`Diagram: ${positioning.satellites.join(", ")} all connecting into one connected business system at the centre.`}
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(46% 46% at 50% 50%, rgba(76,141,255,0.13), transparent 70%)",
              }}
            />

            <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              <circle
                cx="50"
                cy="50"
                r={R}
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="0.3"
              />
              {points.map((p, i) => (
                <motion.line
                  key={p.label}
                  x1={50}
                  y1={50}
                  x2={p.x}
                  y2={p.y}
                  stroke="#4C8DFF"
                  strokeOpacity="0.34"
                  strokeWidth="0.4"
                  initial={
                    reduced
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { duration: 0.9, delay: 0.12 * i, ease: "easeOut" }
                  }
                />
              ))}
            </svg>

            {points.map((p) => (
              <span
                key={p.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border border-line bg-card px-2.5 py-1.5 font-mono text-[10px] tracking-[0.12em] whitespace-nowrap text-ink-2 uppercase"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                {p.label}
              </span>
            ))}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-2xl border border-accent/35 bg-accent-soft px-5 py-4 text-center backdrop-blur-sm">
                {positioning.centre.map((line, i) => (
                  <p
                    key={line}
                    className={
                      i === 0
                        ? "font-display text-[13px] font-semibold tracking-[0.02em] text-ink"
                        : "font-display text-[13px] font-semibold tracking-[0.02em] text-accent"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
