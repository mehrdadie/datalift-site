import Link from "next/link";
import Image from "next/image";

const steps = [
  { num: "01", title: "Connect the sources", image: "/images/datalift-approach-process.webp" },
  { num: "02", title: "Define the truth", image: "/images/datalift-approach-understand.webp" },
  { num: "03", title: "Surface the signal", image: "/images/datalift-insight-data-insight.webp" },
  { num: "04", title: "Automate the response", image: "/images/datalift-insight-workflow-automation.webp" },
];

export default function FeatureSection() {
  return (
    <section className="section-content py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            From raw activity to a better next move.
          </h2>
          <p className="mt-4 text-secondary text-lg leading-relaxed max-w-xl">
            The best system is not the one with the most charts. It is the one
            that helps the right person take the right action at the right time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {steps.map((step) => (
            <div key={step.num} className="rounded-2xl border border-border bg-white overflow-hidden">
              <div className="relative h-28 w-full overflow-hidden bg-background">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-secondary">{step.num}</p>
                <p className="mt-1 font-medium">{step.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
