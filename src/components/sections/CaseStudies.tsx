import { caseStudies } from "@/content/profile"
import { CaseVisual } from "./CaseVisuals"
import Reveal from "@/components/ui/Reveal"

export default function CaseStudies() {
  return (
    <section id="work" className="section border-t border-line bg-surface">
      <div className="shell">
        <Reveal>
          <header className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5 flex items-center gap-3">
                <span aria-hidden className="h-px w-6 bg-accent/60" />
                Case studies
              </p>
              <h2 className="display-2">Selected outcomes</h2>
              <p className="lead mt-6">Examples of the kinds of problems I solve.</p>
            </div>
            <p className="mono-label max-w-xs leading-relaxed">
              Illustrative engagements. Client names withheld.
            </p>
          </header>
        </Reveal>

        <div className="mt-14 space-y-4 md:mt-16 md:space-y-5">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 0.05}>
              <article className="card overflow-hidden">
                <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-14">
                  <div className="flex flex-col">
                    <div className="mono-label flex items-center gap-3">
                      <span className="text-accent">{cs.index}</span>
                      <span aria-hidden className="h-px w-5 bg-line-strong" />
                      <span>{cs.sector}</span>
                    </div>

                    <p className="mt-7 font-display text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-ink">
                      {cs.metric}
                      <span className="block text-ink-3">{cs.metricUnit}</span>
                    </p>

                    <h3 className="display-3 mt-6 text-accent">{cs.title}</h3>

                    <dl className="mt-7 space-y-5 border-t border-line pt-7">
                      <div>
                        <dt className="mono-label">Problem</dt>
                        <dd className="mt-2 text-[15px] leading-[1.62] text-ink-2">{cs.problem}</dd>
                      </div>
                      <div>
                        <dt className="mono-label">What changed</dt>
                        <dd className="mt-2 text-[15px] leading-[1.62] text-ink-2">{cs.change}</dd>
                      </div>
                      <div>
                        <dt className="mono-label">Outcome</dt>
                        <dd className="mt-2 text-[15px] leading-[1.62] text-ink">{cs.outcome}</dd>
                      </div>
                    </dl>

                    <ul className="mt-8 flex flex-wrap gap-2">
                      {cs.stack.map((tool) => (
                        <li key={tool} className="chip">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center">
                    <CaseVisual kind={cs.visual} />

                    <ul className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line min-[400px]:grid-cols-3">
                      {cs.results.map((r) => (
                        <li key={r.label} className="bg-card px-3.5 py-4">
                          <p className="font-display text-[15px] font-semibold text-positive">
                            {r.value}
                          </p>
                          <p className="mt-1.5 text-[12px] leading-snug text-ink-3 hyphens-auto">{r.label}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
