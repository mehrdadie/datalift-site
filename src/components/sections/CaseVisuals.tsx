/**
 * Case-study visuals. Each one is a diagram of the actual change, drawn in SVG —
 * no stock imagery, no fake screenshots of software that does not exist.
 *
 * Every colour is a token reference, so these render correctly on the dark
 * ground and on the inverted paper section without a second set of styles.
 */

const RULE = "var(--color-rule)"
const RULE2 = "var(--color-rule-2)"
const DIM = "var(--color-bone-3)"
const SIG = "var(--color-signal)"

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <figure className="border border-rule">
      <figcaption className="tag border-b border-rule px-4 py-2.5">{label}</figcaption>
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
      <svg
        viewBox="0 0 420 180"
        className="w-full"
        role="img"
        aria-label="Before: six manual steps taking about thirty hours a week. After: three automated steps plus two hours of human review."
      >
        <text x="0" y="12" fill={DIM} fontSize="9" letterSpacing="1.6" fontFamily="monospace">
          BEFORE — MANUAL — ~30 HRS / WEEK
        </text>
        {before.map((step, i) => (
          <g key={step} transform={`translate(${i * 70}, 24)`}>
            <rect width="58" height="34" fill="none" stroke={RULE} strokeDasharray="3 3" />
            <text x="29" y="21" fill={DIM} fontSize="9" textAnchor="middle" fontFamily="monospace">
              {step.toUpperCase()}
            </text>
            {i < before.length - 1 && <path d="M60 17h9" stroke={RULE2} strokeWidth="1" />}
          </g>
        ))}

        <path d="M0 84h420" stroke={RULE} strokeWidth="1" />

        <text x="0" y="106" fill={SIG} fontSize="9" letterSpacing="1.6" fontFamily="monospace">
          AFTER — AUTOMATED — ~2 HRS / WEEK
        </text>
        {after.map((step, i) => (
          <g key={step} transform={`translate(${i * 106}, 118)`}>
            <rect width="94" height="40" fill="var(--color-signal-soft)" stroke={SIG} />
            <text
              x="47"
              y="24"
              fill="var(--color-bone)"
              fontSize="10"
              textAnchor="middle"
              fontFamily="monospace"
            >
              {step.toUpperCase()}
            </text>
            {i < after.length - 1 && <path d="M96 20h8" stroke={SIG} strokeWidth="1" />}
          </g>
        ))}
        <g transform="translate(318, 118)">
          <rect width="94" height="40" fill="none" stroke={RULE} />
          <text x="47" y="19" fill={DIM} fontSize="9" textAnchor="middle" fontFamily="monospace">
            HUMAN REVIEW
          </text>
          <text
            x="47"
            y="31"
            fill="var(--color-verdigris)"
            fontSize="9"
            textAnchor="middle"
            fontFamily="monospace"
          >
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
    { src: "META ADS", event: "Clicked campaign · Q3 Webinar", tone: "bg-bone-3" },
    { src: "GOHIGHLEVEL", event: "Form submitted · 14:02", tone: "bg-bone-3" },
    { src: "SALESFORCE", event: "Lead assigned · owner set", tone: "bg-bone-3" },
    { src: "AIRCALL", event: "Outbound call · 4m 12s · connected", tone: "bg-signal" },
    { src: "SALESFORCE", event: "Opportunity created · £14,400", tone: "bg-bone-3" },
    { src: "CHARGEBEE", event: "Subscription active · annual", tone: "bg-verdigris" },
  ]

  return (
    <Frame label="Unified customer record">
      <div className="grid grid-cols-3 gap-px bg-rule">
        {[
          { k: "Sources joined", v: "4" },
          { k: "To first call", v: "11 min" },
          { k: "Record status", v: "Complete" },
        ].map((tile) => (
          <div key={tile.k} className="bg-ground px-3 py-3">
            <p className="tag">{tile.k}</p>
            <p className="mt-2 font-mono text-[15px] text-bone">{tile.v}</p>
          </div>
        ))}
      </div>

      <ol className="mt-4">
        {rows.map((r, i) => (
          <li
            key={r.event}
            className="flex items-start gap-3 border-b border-rule py-2.5 last:border-b-0"
          >
            <span aria-hidden className={`mt-[7px] h-1.5 w-1.5 shrink-0 ${r.tone}`} />
            <span className="tag w-[104px] shrink-0 pt-0.5">{r.src}</span>
            <span className="text-[14.5px] leading-snug text-bone-2">{r.event}</span>
            <span className="tag ml-auto hidden pt-0.5 sm:block">D+{i}</span>
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
      <div className="mb-4 flex items-center justify-between">
        <span className="tag">Spend</span>
        <span className="tag text-signal">Revenue attributed</span>
      </div>

      <ul className="space-y-3.5">
        {channels.map((c) => (
          <li key={c.name}>
            <p className="mb-1.5 text-[14.5px] text-bone-2">{c.name}</p>
            <div className="flex items-center gap-2">
              <div className="flex h-2.5 flex-1 justify-end bg-rule/40">
                <div className="h-full bg-bone-3" style={{ width: `${c.spend}%` }} />
              </div>
              <span aria-hidden className="h-3.5 w-px bg-rule-2" />
              <div className="h-2.5 flex-1 bg-rule/40">
                <div className="h-full bg-signal" style={{ width: `${c.revenue}%` }} />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-rule pt-4 text-[14px] text-bone-3">
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
