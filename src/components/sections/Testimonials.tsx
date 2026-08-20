import { testimonials } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

export default function Testimonials() {
  return (
    <section aria-labelledby="feedback-heading" className="section border-t border-line">
      <div className="shell">
        <Reveal>
          <header className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow mb-5 flex items-center gap-3">
                <span aria-hidden className="h-px w-6 bg-accent/60" />
                Client feedback
              </p>
              <h2 id="feedback-heading" className="display-2">
                What clients say
                <br />
                <span className="text-ink-3">once it is working.</span>
              </h2>
            </div>
            <p className="mono-label max-w-xs leading-relaxed">
              Draft quotes for layout — replace with approved client feedback.
            </p>
          </header>
        </Reveal>

        <ul className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.role} delay={i * 0.06}>
              <figure className="card card-hover flex h-full flex-col p-7 md:p-9">
                <span aria-hidden className="font-display text-3xl leading-none text-accent/45">
                  &ldquo;
                </span>
                <blockquote className="mt-4 text-[17px] leading-[1.6] text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-8">
                  <span aria-hidden className="h-px w-6 bg-line-strong" />
                  <span className="text-[14px] text-ink-2">
                    {t.role}
                    <span className="text-ink-3"> · {t.org}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
