import { problems } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/** Four small diagrams — each one draws the problem it names. */
function ProblemIcon({ name }: { name: string }) {
  const stroke = "currentColor"
  const common = {
    width: 44,
    height: 44,
    viewBox: "0 0 44 44",
    fill: "none",
    "aria-hidden": true as const,
  }

  if (name === "split") {
    return (
      <svg {...common}>
        <path d="M4 22h11" stroke={stroke} strokeWidth="1.25" />
        <path d="M15 22c6 0 6-11 12-11h13" stroke={stroke} strokeWidth="1.25" />
        <path d="M15 22c6 0 6 11 12 11h13" stroke={stroke} strokeWidth="1.25" />
        <circle cx="40" cy="11" r="2.5" fill="#4C8DFF" />
        <circle cx="40" cy="33" r="2.5" fill="#4C8DFF" opacity="0.4" />
      </svg>
    )
  }

  if (name === "repeat") {
    return (
      <svg {...common}>
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={5 + i * 12}
            y={12}
            width="9"
            height="20"
            rx="2"
            stroke={stroke}
            strokeWidth="1.25"
          />
        ))}
        <path d="M5 8h34" stroke="#4C8DFF" strokeWidth="1.25" strokeDasharray="2 4" />
        <path d="M5 36h34" stroke="#4C8DFF" strokeWidth="1.25" strokeDasharray="2 4" />
      </svg>
    )
  }

  if (name === "revenue") {
    return (
      <svg {...common}>
        <path d="M4 34l8-6 7 4 8-11 6 5" stroke={stroke} strokeWidth="1.25" />
        <path d="M33 26l7-14" stroke="#4C8DFF" strokeWidth="1.25" strokeDasharray="3 3" />
        <circle cx="40" cy="12" r="2.5" fill="#4C8DFF" />
        <path d="M4 40h36" stroke={stroke} strokeWidth="1.25" opacity="0.35" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <rect x="3" y="14" width="14" height="16" rx="3" stroke={stroke} strokeWidth="1.25" />
      <rect x="27" y="14" width="14" height="16" rx="3" stroke={stroke} strokeWidth="1.25" />
      <path d="M17 22h4" stroke={stroke} strokeWidth="1.25" />
      <path d="M23 22h4" stroke={stroke} strokeWidth="1.25" />
      <circle cx="22" cy="22" r="2.5" fill="#4C8DFF" opacity="0.25" />
      <path d="M22 17v10" stroke="#08090B" strokeWidth="3" />
    </svg>
  )
}

export default function Problems() {
  return (
    <section id="problems" className="section">
      <div className="shell">
        <Reveal>
          <header className="max-w-3xl">
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-accent/60" />
              Problems I fix
            </p>
            <h2 className="display-2">
              {problems.titleLead}
              <br />
              <span className="text-ink-3">{problems.titleAccent}</span>
            </h2>
            <p className="lead prose-w mt-6">{problems.subtitle}</p>
          </header>
        </Reveal>

        <ul className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
          {problems.cards.map((card, i) => (
            <Reveal as="li" key={card.title} delay={i * 0.07}>
              <article className="card card-hover group flex h-full flex-col p-7 md:p-9">
                <span className="text-ink-3 transition-colors duration-300 group-hover:text-ink-2">
                  <ProblemIcon name={card.icon} />
                </span>

                <h3 className="display-3 mt-7">{card.title}</h3>
                <p className="mt-3.5 text-[15.5px] leading-[1.62] text-ink-2">{card.body}</p>

                <p className="mt-auto flex items-start gap-3 pt-8 text-[15px] text-accent">
                  <span
                    aria-hidden
                    className="mt-[10px] h-px w-6 shrink-0 bg-accent/70 transition-all duration-300 group-hover:w-9"
                  />
                  {card.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
