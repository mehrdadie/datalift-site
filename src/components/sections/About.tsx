import { ArrowUpRight } from "lucide-react"
import { about, profile } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * Portrait placeholder: a monogram plate rather than a stock photo.
 * Drop a real image in /public and swap the <div> for next/image when available.
 */
function Portrait() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-surface">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 15%, rgba(76,141,255,0.16), transparent 65%)",
        }}
      />
      <div aria-hidden className="grain absolute inset-0" />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <span className="mono-label">Portrait</span>
        <div>
          <p className="font-display text-[3.4rem] leading-none font-semibold tracking-[-0.04em] text-ink/85">
            MF
          </p>
          <p className="mono-label mt-3">{profile.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section border-t border-line bg-surface">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <Portrait />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-accent/60" />
              About
            </p>
            <h2 className="display-2">{about.title}</h2>

            <div className="prose-w mt-8 space-y-5">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-[16.5px] leading-[1.66] text-ink-2">
                  {p}
                </p>
              ))}
            </div>

            <ul className="mt-9 flex flex-wrap gap-2">
              {about.tags.map((tag) => (
                <li key={tag} className="chip">
                  {tag}
                </li>
              ))}
            </ul>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
              {about.facts.map((fact) => (
                <div key={fact.label} className="bg-card p-5">
                  <dt className="mono-label">{fact.label}</dt>
                  <dd className="mt-2 text-[14px] leading-snug text-ink-2">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-9 inline-flex items-center gap-2 text-[15px] text-accent transition-colors hover:text-accent-hi"
            >
              LinkedIn
              <ArrowUpRight size={16} strokeWidth={2} aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
