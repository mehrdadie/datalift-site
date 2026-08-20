import Image from "next/image"

import { about, profile } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * The portrait sits in a 4:5 frame to match the source crop, so the image
 * fills it without cropping the face. `sizes` mirrors the grid: it is a
 * narrow sticky column on large screens and full width below the breakpoint.
 */
function Portrait() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-panel">
      <Image
        src="/images/mehrdad-fashami.jpg"
        alt={`${profile.name}, ${profile.role}`}
        fill
        sizes="(min-width: 1024px) 30vw, 100vw"
        className="object-cover"
        priority={false}
      />
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
                  <p key={p.slice(0, 24)} className="text-[16.5px] leading-[1.68] text-bone-2">
                    {p}
                  </p>
                ))}
              </div>

              {/* The practice areas fold into the fact table rather than sitting
                  above it as a row of chips — one less templated component, and
                  it reads as a line instead of eight little boxes. */}
              <dl className="mt-11 border-t border-rule">
                <div className="grid gap-1.5 border-b border-rule py-5 sm:grid-cols-[168px_minmax(0,1fr)] sm:gap-8">
                  <dt className="tag sm:pt-1">Practice</dt>
                  <dd className="text-[16.5px] leading-[1.6] text-bone-2">
                    {about.tags.map((tag, i) => (
                      <span key={tag}>
                        {i > 0 ? (
                          <span aria-hidden className="mx-2 text-signal">
                            ·
                          </span>
                        ) : null}
                        {tag}
                      </span>
                    ))}
                  </dd>
                </div>

                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid gap-1.5 border-b border-rule py-5 sm:grid-cols-[168px_minmax(0,1fr)] sm:gap-8"
                  >
                    <dt className="tag sm:pt-1">{fact.label}</dt>
                    <dd className="text-[16.5px] leading-[1.6] text-bone-2">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.08em] text-signal uppercase transition-colors hover:text-signal-hi"
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
