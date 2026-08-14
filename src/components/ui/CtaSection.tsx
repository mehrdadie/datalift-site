import Button from "./Button";

interface CtaLink {
  readonly href: string;
  readonly label: string;
}

interface CtaSectionProps {
  readonly body: string;
  readonly primary: CtaLink;
  readonly secondary?: CtaLink;
  readonly title: string;
}

export default function CtaSection({ body, primary, secondary, title }: CtaSectionProps) {
  return (
    <section className="section-full bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-lg border border-border bg-white p-8 md:p-12">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-secondary">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primary.href}>{primary.label}</Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
