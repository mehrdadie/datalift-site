import Link from "next/link";

const services = [
  {
    title: "Data foundations",
    body: "Make your data consistent, structured and ready to use.",
  },
  {
    title: "Reporting systems",
    body: "Replace scattered reports with one clear operating view.",
  },
  {
    title: "Workflow automation",
    body: "Remove repetitive work between the tools your team relies on.",
  },
  {
    title: "AI intelligence",
    body: "Turn calls, messages and operational data into useful insight.",
  },
];

export default function ServicePreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <div key={service.title} className="rounded-2xl border border-border p-5 bg-white">
            <h3 className="font-medium">{service.title}</h3>
            <p className="mt-2 text-sm text-secondary">{service.body}</p>
            <Link
              href="/services"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            >
              Learn more <span aria-hidden>→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
