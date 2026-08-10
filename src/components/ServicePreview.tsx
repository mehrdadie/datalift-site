import Link from "next/link";
import Image from "next/image";

const services = [
  {
    eyebrow: "01 · Data & BI",
    title: "Turn scattered data into one operating picture.",
    body: "Connect CRM, sales, marketing, payments and operational sources. Define the logic once, then give teams reporting they can trust.",
    image: "/images/datalift-service-reporting.webp",
    tags: ["Power BI", "Dashboards", "Reconciliation", "Data models"],
  },
  {
    eyebrow: "02 · Automation",
    title: "Remove the manual work between your systems.",
    body: "Automate repetitive updates, checks, alerts, routing and handoffs across the tools your team already uses.",
    image: "/images/datalift-service-automation.webp",
    tags: ["n8n", "APIs", "CRM workflows", "Monitoring"],
  },
  {
    eyebrow: "03 · AI Systems",
    title: "Put useful intelligence inside the workflow.",
    body: "Use AI to understand calls and messages, surface risks, summarise activity and help teams act on the right signal faster.",
    image: "/images/datalift-service-ai.webp",
    tags: ["AI agents", "Call intelligence", "Summaries", "Decision support"],
  },
];

export default function ServicePreview() {
  return (
    <section className="border-y border-border bg-white py-24 sm:py-32 lg:py-40">
      <div className="section-content">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">What we build</p>
            <h2 className="display-lg mt-5 max-w-[10ch]">Better systems, not more software.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-secondary lg:justify-self-end">
            We work across data, automation and AI to make the tools already behind your business operate like one connected system.
          </p>
        </div>

        <div className="mt-16 space-y-6 sm:mt-20 sm:space-y-8">
          {services.map((service, index) => (
            <article key={service.title} className="overflow-hidden rounded-[1.75rem] border border-border bg-background sm:rounded-[2.5rem]">
              <div className="grid lg:grid-cols-2">
                <div className={`relative min-h-[300px] sm:min-h-[420px] lg:min-h-[540px] ${index % 2 ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                  <div>
                    <p className="eyebrow">{service.eyebrow}</p>
                    <h3 className="mt-5 max-w-[12ch] text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl">
                      {service.title}
                    </h3>
                    <p className="mt-6 max-w-xl text-[1.02rem] leading-7 text-secondary sm:text-lg sm:leading-8">{service.body}</p>
                  </div>
                  <div className="mt-10 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border bg-white px-3.5 py-2 text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link href="/services" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold">
          Explore all services <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
