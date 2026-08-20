import type { ReactNode } from "react"

export function SectionHeading({
  eyebrow,
  lead,
  accent,
  subtitle,
  align = "left",
  id,
}: {
  eyebrow?: string
  lead: string
  accent?: string
  subtitle?: string
  align?: "left" | "center"
  id?: string
}) {
  const centered = align === "center"

  return (
    <header className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="eyebrow mb-5 flex items-center gap-3">
          {!centered ? (
            <span aria-hidden className="h-px w-6 bg-accent/60" />
          ) : null}
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="display-2">
        {lead}
        {accent ? (
          <>
            <br />
            <span className="text-ink-3">{accent}</span>
          </>
        ) : null}
      </h2>
      {subtitle ? (
        <p className={`lead mt-6 ${centered ? "mx-auto" : ""} prose-w`}>{subtitle}</p>
      ) : null}
    </header>
  )
}

export function Shell({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`shell ${className}`}>{children}</div>
}
