import { about, profile } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * Portrait placeholder: a bone plate with the monogram, sized like a photo so
 * a real one drops straight in. Swap for next/image when there is a file.
 */
function Portrait() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-2 text-graphite">
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <span className="tag text-graphite/55">Portrait — to be supplied</span>
        <p className="font-display text-[4.5rem] leading-[0.8] font-semibold tracking-[-0.05em] text-graphite/80">
          MF
        </p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section border-t border-rule">
      <div className="shell">
        <Reveal>
          <h2 className="display-2 max-w-2xl">{about.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-20">
          <Reveal delay={0.05}>
            <div>
              <div className="prose-w space-y-5 border-t border-rule-2 pt-8">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-[16.5px] leading-[1.62] text-bone-2">
                    {p}
                  </p>
                ))}
              </div>

              <ul className="mt-9 flex flex-wrap gap-1.5">
                {about.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>

              <dl className="mt-12 border-t border-rule">
                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-8"
                  >
                    <dt className="tag sm:pt-1">{fact.label}</dt>
                    <dd className="text-[15px] leading-snug text-bone-2">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.08em] text-signal uppercase transition-colors hover:text-signal-hi"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-24">
              <Portrait />
              <p className="tag mt-4">{profile.location}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
