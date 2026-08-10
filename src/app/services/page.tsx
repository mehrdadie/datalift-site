import { Metadata } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Reporting, Automation, Data and AI Systems",
  description:
    "Explore Datalift services for data foundations, reporting, workflow automation, CRM operations and practical AI intelligence.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary">What we build</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">The right system for the next stage of growth.</h1>
        <p className="mt-4 text-secondary text-lg leading-relaxed max-w-2xl">
          Choose the part of your operation that needs more clarity, less manual work or a stronger connection between systems. We build around your reality, not a fixed package.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.title} className="rounded-2xl border border-border p-5 bg-white">
            <h3 className="font-medium">{service.title}</h3>
            <p className="mt-2 text-sm text-secondary">{service.body}</p>
            <ul className="mt-3 text-xs text-secondary list-disc list-inside space-y-1">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-white p-8 md:p-12">
        <p className="text-sm text-secondary">
          You do not need to automate everything. You need to improve the right thing first.
        </p>
      </div>
    </div>
  );
}
