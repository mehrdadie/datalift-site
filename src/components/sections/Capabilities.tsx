import { capabilities } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

/**
 * Three columns divided by rules, not three cards floating on a grid. The
 * numerals are the structure: work moves left to right through them.
 */
export default function Capabilities() {
  return (
    <section id="capabilities" className="section border-t border-rule">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
            <h2 className="display-2 max-w-xl">What I can own</h2>
            <p className="lead max-w-sm">
              Most engagements start in one column and end up touching all three.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.key} delay={i * 0.06}>
              <section
                className={`h-full border-t border-rule pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 ${
                  i === 0 ? "lg:border-l-0 lg:pl-0" : ""
                } ${i > 0 ? "mt-12 lg:mt-0" : ""}`}
              >
                <p className="font-display text-[54px] leading-none font-semibold text-signal/25 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 font-display text-[1.75rem] leading-none font-semibold tracking-[-0.025em]">
                  {cap.title}
                </h3>

                <p className="mt-4 max-w-xs text-[15.5px] leading-[1.58] text-bone-2">
                  {cap.description}
                </p>

                <ul className="mt-8 lg:pr-10">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 border-t border-rule py-2.5 text-[14.5px] text-bone-2 last:border-b"
                    >
                      <span aria-hidden className="h-1 w-1 shrink-0 translate-y-[-3px] bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
