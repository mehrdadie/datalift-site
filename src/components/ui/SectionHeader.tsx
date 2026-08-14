interface SectionHeaderProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly intro?: string;
  readonly className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-secondary">{intro}</p> : null}
    </div>
  );
}
