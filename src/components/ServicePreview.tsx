import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Data foundations",
    body: "Make your data consistent, structured and ready to use.",
    image: "/images/datalift-service-data-foundations.webp",
  },
  {
    title: "Reporting systems",
    body: "Replace scattered reports with one clear operating view.",
    image: "/images/datalift-service-reporting.webp",
  },
  {
    title: "Workflow automation",
    body: "Remove repetitive work between the tools your team relies on.",
    image: "/images/datalift-service-automation.webp",
  },
  {
    title: "AI intelligence",
    body: "Turn calls, messages and operational data into useful insight.",
    image: "/images/datalift-service-ai.webp",
  },
  {
    title: "Sales and CRM operations",
    body: "We help sales teams create cleaner definitions, more useful activity views and better operational follow-through.",
    image: "/images/datalift-insight-crm-operations.webp",
  },
  {
    title: "Subscription and revenue intelligence",
    body: "We connect billing and payment data so active, new, lost, renewal and cancellation movements can be monitored with confidence.",
    image: "/images/datalift-insight-subscription-reconcile.webp",
  },
];

export default function ServicePreview() {
  return (
    <section className="section-content py-20">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          We build the layer that connects it all.
        </h2>
        <p className="mt-4 text-secondary text-lg leading-relaxed max-w-2xl">
          Datalift creates practical data systems around your existing business.
          We connect the sources, define the logic, surface the useful signals
          and automate the next action.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service.title} className="rounded-2xl border border-border bg-white overflow-hidden flex flex-col">
            <div className="relative h-40 w-full overflow-hidden bg-background">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-medium">{service.title}</h3>
              <p className="mt-2 text-sm text-secondary">{service.body}</p>
              <Link
                href="/services"
                className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              >
                Learn more <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
