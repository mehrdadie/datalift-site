import { approach } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

export default function Process() {
  return (
    <section id="approach" className="section border-t border-line">
      <div className="shell">
        <Reveal>
          <header className="max-w-3xl">
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span aria-hidden className="h-px w-6 bg-accent/60" />
              Approach
            </p>
            <h2 className="display-2">{approach.title}</h2>
            <p className="lead prose-w mt-6">{approach.subtitle}</p>
          </header>
        </Reveal>

        <ol className="mt-14 md:mt-16">
          {approach.steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 0.06}>
              <div className="group grid gap-4 border-t border-line py-8 md:grid-cols-[80px_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:py-10 last:border-b">
                <span className="font-mono text-[13px] tracking-[0.14em] text-accent">
                  {step.n}
                </span>

                <h3 className="font-display text-[1.65rem] leading-none font-semibold tracking-[-0.03em] text-ink md:text-[1.85rem]">
                  {step.title}
                </h3>

                <div>
                  <p className="text-[15.5px] leading-[1.62] text-ink-2">{step.body}</p>
                  <p className="mt-4 flex items-start gap-3 text-[14px] text-ink-3">
                    <span aria-hidden className="mt-[9px] h-px w-5 shrink-0 bg-line-strong" />
                    <span>
                      <span className="mono-label mr-2">Ends with</span>
                      {step.deliverable}
                    </span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-14 font-display text-[clamp(1.5rem,3vw,2.1rem)] leading-[1.2] font-semibold tracking-[-0.03em] text-ink">
            {approach.statement.lead}{" "}
            <span className="text-accent">{approach.statement.accent}</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
