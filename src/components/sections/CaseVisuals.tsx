/**
 * Case-study visuals. Each one is a diagram of the actual change, drawn in SVG —
 * no stock imagery, no fake screenshots of software that does not exist.
 */

const L = "rgba(255,255,255,0.10)"
const L2 = "rgba(255,255,255,0.18)"
const T = "#6F7682"
const A = "#4C8DFF"

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-line bg-surface">
      <figcaption className="flex items-center gap-2.5 border-b border-line px-4 py-2.5">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ink-3/60" />
        <span className="mono-label">{label}</span>
      </figcaption>
      <div className="p-4 sm:p-5">{children}</div>
    </figure>
  )
}

/** Before / after of a weekly reporting process. */
export function WorkflowVisual() {
  const before = ["Export", "Clean", "Merge", "Check", "Fix", "Send"]
  const after = ["Pipeline", "Validate", "Publish"]

  return (
    <Frame label="Weekly reporting process">
      <svg viewBox="0 0 420 180" className="w-full" role="img" aria-label="Before: six manual steps taking about thirty hours a week. After: three automated steps taking about two hours.">
        <text x="0" y="12" fill={T} fontSize="9" letterSpacing="1.6" fontFamily="monospace">
          BEFORE — MANUAL — ~30 HRS / WEEK
        </text>
        {before.map((step, i) => (
          <g key={step} transform={`translate(${i * 70}, 24)`}>
            <rect width="58" height="34" rx="7" fill="none" stroke={L} strokeDasharray="3 3" />
            <text x="29" y="21" fill={T} fontSize="9" textAnchor="middle" fontFamily="monospace">
              {step.toUpperCase()}
            </text>
            {i < before.length - 1 && (
              <path d="M60 17h9" stroke={L2} strokeWidth="1" markerEnd="" />
            )}
          </g>
        ))}

        <path d="M0 84h420" stroke={L} strokeWidth="1" />

        <text x="0" y="106" fill={A} fontSize="9" letterSpacing="1.6" fontFamily="monospace">
          AFTER — AUTOMATED — ~2 HRS / WEEK
        </text>
        {after.map((step, i) => (
          <g key={step} transform={`translate(${i * 106}, 118)`}>
            <rect width="94" height="40" rx="9" fill="rgba(76,141,255,0.08)" stroke="rgba(76,141,255,0.35)" />
            <text x="47" y="24" fill="#F5F7FA" fontSize="10" textAnchor="middle" fontFamily="monospace">
              {step.toUpperCase()}
            </text>
            {i < after.length - 1 && <path d="M96 20h8" stroke={A} strokeWidth="1" />}
          </g>
        ))}
        <g transform="translate(318, 118)">
          <rect width="94" height="40" rx="9" fill="none" stroke={L} />
          <text x="47" y="19" fill={T} fontSize="9" textAnchor="middle" fontFamily="monospace">
            HUMAN REVIEW
          </text>
          <text x="47" y="31" fill="#8FD7B5" fontSize="9" textAnchor="middle" fontFamily="monospace">
            2 HRS
          </text>
        </g>
      </svg>
    </Frame>
  )
}

/** One customer record assembled from four systems. */
export function CustomerVisual() {
  const rows = [
    { src: "META ADS", event: "Clicked campaign · Q3 Webinar", tone: T },
    { src: "GOHIGHLEVEL", event: "Form submitted · 14:02", tone: T },
    { src: "SALESFORCE", event: "Lead assigned · owner set", tone: T },
    { src: "AIRCALL", event: "Outbound call · 4m 12s · connected", tone: A },
    { src: "SALESFORCE", event: "Opportunity created · £14,400", tone: T },
    { src: "CHARGEBEE", event: "Subscription active · annual", tone: "#8FD7B5" },
  ]

  return (
    <Frame label="Unified customer record">
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { k: "Sources joined", v: "4" },
          { k: "Time to first call", v: "11 min" },
          { k: "Record status", v: "Complete" },
        ].map((tile) => (
          <div key={tile.k} className="rounded-xl border border-line bg-card px-3.5 py-3">
            <p className="mono-label">{tile.k}</p>
            <p className="mt-1.5 font-display text-lg text-ink">{tile.v}</p>
          </div>
        ))}
      </div>

      <ol className="mt-4 space-y-0">
        {rows.map((r, i) => (
          <li
            key={r.event}
            className="flex items-start gap-3 border-b border-line/70 py-2.5 last:border-b-0"
          >
            <span
              aria-hidden
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: r.tone }}
            />
            <span className="mono-label w-[104px] shrink-0 pt-0.5">{r.src}</span>
            <span className="text-[13.5px] leading-snug text-ink-2">{r.event}</span>
            <span className="mono-label ml-auto hidden pt-0.5 sm:block">D+{i}</span>
          </li>
        ))}
      </ol>
    </Frame>
  )
}

/** Spend on the left, revenue on the right, joined in the middle. */
export function AttributionVisual() {
  const channels = [
    { name: "Google Ads", spend: 62, revenue: 88 },
    { name: "Meta Ads", spend: 100, revenue: 41 },
    { name: "LinkedIn Ads", spend: 34, revenue: 76 },
    { name: "Organic / direct", spend: 8, revenue: 52 },
  ]

  return (
    <Frame label="Acquisition to revenue">
      <div className="mb-3.5 flex items-center justify-between">
        <span className="mono-label">Spend</span>
        <span className="mono-label text-accent">Revenue attributed</span>
      </div>

      <ul className="space-y-3.5">
        {channels.map((c) => (
          <li key={c.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[13.5px] text-ink-2">{c.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-2 flex-1 justify-end overflow-hidden rounded-full bg-white/[0.04]">
                <div
                  className="h-full rounded-full bg-white/22"
                  style={{ width: `${c.spend}%` }}
                />
              </div>
              <span aria-hidden className="h-3 w-px bg-line" />
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.04]">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${c.revenue}%`, backgroundColor: A }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-line pt-4 text-[13px] text-ink-3">
        Same spend, redistributed. The channel with the largest budget was not the channel
        producing the revenue.
      </p>
    </Frame>
  )
}

export function CaseVisual({ kind }: { kind: string }) {
  if (kind === "workflow") return <WorkflowVisual />
  if (kind === "customer") return <CustomerVisual />
  return <AttributionVisual />
}
