import { ArrowRight } from "lucide-react"
import { finalCta, profile } from "@/content/profile"
import Reveal from "@/components/ui/Reveal"

export default function FinalCta() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry")}`

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(62% 78% at 50% 108%, rgba(76,141,255,0.16), transparent 68%)",
        }}
      />

      <div className="shell relative section">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-ink">
              {finalCta.headline}
            </h2>
            <p className="mt-4 font-display text-[clamp(1.35rem,3vw,2.1rem)] leading-tight font-medium tracking-[-0.03em] text-ink-3">
              {finalCta.sub}
            </p>
            <p className="lead mx-auto mt-8 max-w-xl">{finalCta.body}</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href={mailto} className="btn btn-primary">
                {finalCta.primary}
                <ArrowRight size={16} strokeWidth={2} aria-hidden />
              </a>
              <a href={mailto} className="btn btn-secondary">
                {finalCta.secondary}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {finalCta.prompts.map((prompt) => (
              <li key={prompt} className="bg-card px-5 py-4">
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(prompt)}`}
                  className="flex items-start gap-3 text-[15px] text-ink-2 transition-colors hover:text-ink"
                >
                  <span aria-hidden className="mt-[10px] h-px w-4 shrink-0 bg-accent/70" />
                  &ldquo;{prompt}&rdquo;
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
