import Link from "next/link";
import Image from "next/image";

const services = [
  {
    eyebrow: "01 · Data",
    title: "One reliable operating picture",
    body: "We connect scattered sources, define the business logic and turn reporting into something teams can actually trust.",
    image: "/images/datalift-service-reporting.webp",
  },
  {
    eyebrow: "02 · Automation",
    title: "Workflows that move without chasing",
    body: "We automate repetitive handoffs, validation, alerts and updates across the tools your team already uses.",
    image: "/images/datalift-service-automation.webp",
  },
  {
    eyebrow: "03 · AI",
    title: "Intelligence inside the process",
    body: "We use AI where it creates leverage: understanding calls and messages, summarising activity and helping teams act on signals faster.",
    image: "/images/datalift-service-ai.webp",
  },
];

export default function ServicePreview() {
  return (
    <section className="section-content py-24 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">What we build</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Better systems, not more software.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-secondary">
            Datalift works across data, automation and AI to make the systems already behind your business feel like one connected operation.
          </p>
          <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
            Explore all services <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {services.map((service) => (
            <article key={service.title} className="grid gap-6 py-8 md:grid-cols-[1fr_220px] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{service.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.025em] md:text-3xl">{service.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-secondary">{service.body}</p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white">
                <Image src={service.image} alt="" fill className="object-cover" sizes="220px" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
