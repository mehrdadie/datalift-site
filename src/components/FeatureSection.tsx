const steps = [
  { num: "01", title: "Connect the sources" },
  { num: "02", title: "Define the truth" },
  { num: "03", title: "Surface the signal" },
  { num: "04", title: "Automate the response" },
];

export default function FeatureSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
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
            <div key={step.num} className="rounded-2xl border border-border p-4 bg-white">
              <p className="text-xs text-secondary">{step.num}</p>
              <p className="mt-1 font-medium">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
