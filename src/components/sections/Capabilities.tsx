import { Check } from "lucide-react"
import { capabilities } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

export default function Capabilities() {
  return (
    <section id="capabilities" className="section border-t border-line">
      <div className="shell">
        <Reveal>
          <header className="max-w-3xl">
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-accent/60" />
              Capabilities
            </p>
            <h2 className="display-2">What I can own</h2>
            <p className="lead prose-w mt-6">
              Three things, in order. Most engagements start in one column and end up
              touching all three.
            </p>
          </header>
        </Reveal>

        <div className="mt-14 grid gap-4 md:mt-16 md:gap-5 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.key} delay={i * 0.07}>
              <article className="card card-hover flex h-full flex-col p-7 md:p-9">
                <p className="mono-label">
                  0{i + 1} / {cap.title.toUpperCase()}
                </p>

                <h3 className="mt-6 font-display text-[1.9rem] leading-none font-semibold tracking-[-0.03em] text-ink">
                  {cap.title}
                </h3>

                <p className="mt-4 text-[15.5px] leading-[1.6] text-ink-2">{cap.description}</p>

                <ul className="mt-8 space-y-3 border-t border-line pt-7">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14.5px] text-ink-2">
                      <Check
                        size={15}
                        strokeWidth={2.2}
                        className="mt-[5px] shrink-0 text-accent"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
