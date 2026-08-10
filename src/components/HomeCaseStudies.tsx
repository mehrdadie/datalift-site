import Image from "next/image";
import Link from "next/link";

const studies = [
  {
    eyebrow: "Reporting systems",
    title: "From scattered sales activity to one management view.",
    body: "Registrations, attendance, sales and telesales activity were brought together into a clearer operating picture across regions and event formats.",
    image: "/images/datalift-insight-data-insight.webp",
    href: "/work/one-operating-view",
  },
  {
    eyebrow: "Data foundations",
    title: "Making subscription performance explainable.",
    body: "Multiple billing and payment sources were reconciled into a repeatable view of active users, new subscriptions, cancellations and renewals.",
    image: "/images/datalift-insight-subscription-reconcile.webp",
    href: "/work/making-subscription-data-reconcile",
  },
];

export default function HomeCaseStudies() {
  return (
    <section className="section-content py-24 sm:py-32 lg:py-40">
      <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="display-lg mt-5 max-w-[10ch]">Real systems. Useful outcomes.</h2>
        </div>
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold">
          View all work <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-6 sm:mt-20">
        {studies.map((study, index) => (
          <Link key={study.title} href={study.href} className={`group block ${index === 1 ? "lg:mt-24" : ""}`}>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-white p-2 sm:rounded-[2.5rem]">
              <Image
                src={study.image}
                alt={study.title}
                width={1100}
                height={760}
                className="aspect-[4/3] w-full rounded-[1.35rem] object-cover transition-transform duration-500 group-hover:scale-[1.015] sm:rounded-[2rem]"
              />
            </div>
            <div className="px-1 pt-6 sm:pt-8">
              <p className="eyebrow">{study.eyebrow}</p>
              <h3 className="mt-4 max-w-[16ch] text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl">{study.title}</h3>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-secondary sm:text-base">{study.body}</p>
              <span className="mt-5 inline-flex text-sm font-semibold">Read case study →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
