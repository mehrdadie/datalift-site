import { caseStudies } from "@/content/profile"
import { CaseVisual } from "./CaseVisuals"
import Reveal from "@/components/ui/Reveal"

/**
 * The one inverted section on the page. Proof is the thing a client takes away
 * and circulates, so it is set as a printed report — ruled columns, running
 * heads, figures in the margin — rather than as another row of dark cards.
 */
export default function CaseStudies() {
  return (
    <section id="work" className="on-paper section">
      <div className="shell">
        <Reveal>
          <header className="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4 border-b-2 border-graphite pb-5">
            <h2 className="display-2">Selected outcomes</h2>
            <p className="tag">Three engagements · names withheld</p>
          </header>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="lead prose-w mt-8">
            Examples of the kinds of problems I solve. Figures are representative of the
            work rather than drawn from a named client.
          </p>
        </Reveal>

        <div className="mt-20 space-y-24">
          {caseStudies.map((cs, i) => (
            <Reveal as="article" key={cs.id} delay={i * 0.04}>
              {/* Running head */}
              <div className="tag flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-rule pb-3">
                <span className="text-signal">Case {cs.index}</span>
                <span aria-hidden>/</span>
                <span>{cs.title}</span>
                <span aria-hidden>/</span>
                <span>{cs.sector}</span>
              </div>

              <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
                <div>
                  <p className="font-display text-[clamp(2.2rem,4.6vw,3.4rem)] leading-[0.98] font-semibold tracking-[-0.035em]">
                    {cs.metric}
                    <span className="block text-bone-3">{cs.metricUnit}</span>
                  </p>

                  {/* Ruled columns rather than a stacked definition list. */}
                  <div className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                    <div>
                      <h3 className="tag border-t border-rule-2 pt-3">Problem</h3>
                      <p className="mt-3 text-[15px] leading-[1.6] text-bone-2">{cs.problem}</p>
                    </div>
                    <div>
                      <h3 className="tag border-t border-rule-2 pt-3">What changed</h3>
                      <p className="mt-3 text-[15px] leading-[1.6] text-bone-2">{cs.change}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <h3 className="tag border-t border-rule-2 pt-3 text-signal">Outcome</h3>
                      <p className="mt-3 max-w-2xl text-[16px] leading-[1.6]">{cs.outcome}</p>
                    </div>
                  </div>

                  <ul className="mt-9 flex flex-wrap gap-1.5">
                    {cs.stack.map((tool) => (
                      <li key={tool} className="chip">
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <CaseVisual kind={cs.visual} />

                  <dl className="mt-6 grid grid-cols-1 border-y border-rule-2 min-[420px]:grid-cols-3">
                    {cs.results.map((r) => (
                      <div
                        key={r.label}
                        className="border-b border-rule py-4 last:border-b-0 min-[420px]:border-b-0 min-[420px]:pr-5"
                      >
                        <dd className="font-display text-[19px] leading-none font-semibold text-verdigris">
                          {r.value}
                        </dd>
                        <dt className="tag mt-2.5">{r.label}</dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
