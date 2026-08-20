import { Check, Minus } from "lucide-react"
import { bestFit } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

export default function BestFit() {
  return (
    <section className="section border-t border-line bg-surface">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-accent/60" />
              Fit
            </p>
            <h2 className="display-2">{bestFit.title}</h2>
            <p className="lead mt-6">{bestFit.intro}</p>

            <p className="mt-9 border-l-2 border-accent pl-5 font-display text-[1.15rem] leading-[1.4] font-medium text-ink">
              {bestFit.highlight}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <p className="mono-label mb-5">Best fit if you</p>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {bestFit.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 bg-card px-5 py-4 text-[15.5px] text-ink-2 transition-colors hover:bg-raised"
                >
                  <Check size={16} strokeWidth={2.2} className="mt-[5px] shrink-0 text-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mono-label mt-10 mb-5">{bestFit.notFit.title}</p>
            <ul className="space-y-3">
              {bestFit.notFit.items.map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-[15px] text-ink-3">
                  <Minus size={16} strokeWidth={2} className="mt-[5px] shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
