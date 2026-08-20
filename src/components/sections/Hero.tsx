import { hero } from "@/content/profile"
import SystemsGraph from "./SystemsGraph"
import Reveal from "@/components/ui/Reveal"

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[124px] pb-16 md:pt-[152px] md:pb-24">
      <div className="shell">
        <Reveal>
          <p className="marker">Data · Automation · Growth systems</p>
        </Reveal>

        <div className="mt-8 grid items-start gap-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-10">
          <div>
            <Reveal delay={0.05}>
              <h1 className="display-1">
                I <span className="text-signal">connect</span>
                <br />
                the systems
                <br />
                behind your
                <br />
                business.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="lead prose-w mt-9 border-l border-rule-2 pl-6">{hero.body}</p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </a>
                <a href={hero.secondaryCta.href} className="btn btn-secondary">
                  {hero.secondaryCta.label}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Bleeds past the measure on wide screens — the diagram is the subject,
              not an illustration sitting politely inside a column. */}
          <Reveal delay={0.1} y={24} className="lg:-mr-[7vw] lg:pt-6">
            <SystemsGraph />
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <p className="tag mt-14 flex items-center gap-3 border-t border-rule pt-5">
            <span aria-hidden className="h-1.5 w-1.5 bg-verdigris" />
            {hero.trust}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
