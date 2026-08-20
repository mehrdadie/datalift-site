"use client"

import { useMemo } from "react"
import { useReducedMotion } from "framer-motion"
import { heroEdges, heroNodes } from "@/content/profile"

/**
 * The hero visualisation: eight business systems, one shared data layer,
 * and slow pulses moving along the connections. Positions come from the
 * content file so the labels and the lines can never drift apart.
 */
export default function SystemsGraph() {
  const reduced = useReducedMotion()

  const byId = useMemo(
    () => Object.fromEntries(heroNodes.map((n) => [n.id, n])),
    [],
  )

  return (
    <div
      className="relative isolate aspect-[4/5] w-full sm:aspect-square"
      role="img"
      aria-label="Diagram: marketing, CRM, sales, calls and payments systems connected through a central data layer into reporting and automation."
    >
      {/* soft field behind the graph */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(56% 50% at 50% 50%, rgba(229,160,60,0.10), transparent 72%)",
        }}
      />

      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E5A03C" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#E5A03C" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#E5A03C" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {heroEdges.map(([from, to], i) => {
          const a = byId[from]
          const b = byId[to]
          if (!a || !b) return null
          const hub = to === "data" || from === "data"

          return (
            <g key={`${from}-${to}`}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="rgba(236,229,217,0.13)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="url(#edge)"
                strokeWidth={hub ? 1.6 : 1}
                strokeLinecap="round"
                strokeDasharray="3 14"
                vectorEffect="non-scaling-stroke"
                style={
                  reduced
                    ? undefined
                    : {
                        animation: `dash-flow ${13 + (i % 5) * 3.5}s linear infinite`,
                        animationDelay: `${i * -1.6}s`,
                      }
                }
              />
            </g>
          )
        })}
      </svg>

      {heroNodes.map((node) => {
        const hub = node.id === "data"
        return (
          <div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span
              className={
                hub
                  ? "relative flex items-center gap-2 border border-signal/45 bg-signal-soft px-3.5 py-2 font-mono text-[11px] font-medium tracking-[0.14em] text-bone uppercase backdrop-blur-sm"
                  : "relative flex items-center gap-2 border border-rule bg-panel/90 px-3 py-1.5 font-mono text-[10.5px] tracking-[0.12em] text-bone-2 uppercase backdrop-blur-sm"
              }
            >
              <span
                aria-hidden
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                  hub ? "bg-signal" : "bg-bone-3"
                }`}
              />
              {node.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
