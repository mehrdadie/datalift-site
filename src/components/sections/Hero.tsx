import { ArrowDown, ArrowRight } from "lucide-react"
import { hero } from "@/content/profile"
import SystemsGraph from "./SystemsGraph"
import Reveal from "@/components/ui/Reveal"

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[132px] pb-20 md:pt-[168px] md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
        style={{
          background:
            "radial-gradient(78% 58% at 22% 0%, rgba(76,141,255,0.13), transparent 62%)",
        }}
      />

      <div className="shell grid items-center gap-16 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-14">
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden className="h-px w-7 bg-accent/70" />
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="display-1 mt-7">
              {hero.headingLead}
              <br />
              <span className="text-ink-3">
                behind your <span className="text-accent">business.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="lead prose-w mt-8">{hero.body}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={hero.primaryCta.href} className="btn btn-primary">
                {hero.primaryCta.label}
                <ArrowRight size={16} strokeWidth={2} aria-hidden />
              </a>
              <a href={hero.secondaryCta.href} className="btn btn-secondary">
                {hero.secondaryCta.label}
                <ArrowDown size={16} strokeWidth={2} aria-hidden />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mono-label mt-9 flex items-center gap-2.5">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-positive"
                style={{ boxShadow: "0 0 0 3px rgba(143,215,181,0.16)" }}
              />
              {hero.trust}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={24} className="relative">
          <SystemsGraph />
        </Reveal>
      </div>
    </section>
  )
}
