import { bestFit } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/** A ruled qualification sheet — two ledgers, one for each answer. */
export default function BestFit() {
  return (
    <section className="section border-t border-rule">
      <div className="shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
            <h2 className="display-2">{bestFit.title}</h2>
            <p className="lead">{bestFit.intro}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Reveal>
            <div>
              <p className="tag border-b border-rule-2 pb-3 text-verdigris">Best fit if you</p>
              <ul>
                {bestFit.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-5 border-b border-rule py-4 text-[15.5px] text-bone transition-colors hover:text-signal"
                  >
                    <span className="font-mono text-[11px] tracking-[0.14em] text-bone-3 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="lg:pt-0">
              <p className="tag border-b border-rule-2 pb-3 text-oxide">{bestFit.notFit.title}</p>
              <ul>
                {bestFit.notFit.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-5 border-b border-rule py-4 text-[15px] text-bone-3"
                  >
                    <span aria-hidden className="h-px w-3 shrink-0 translate-y-[-4px] bg-oxide" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-10 font-display text-[1.15rem] leading-[1.38] font-medium text-bone">
                {bestFit.highlight}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
