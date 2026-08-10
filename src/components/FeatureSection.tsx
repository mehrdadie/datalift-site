const steps = [
  {
    num: "01",
    title: "Understand the workflow",
    body: "Map what people actually do, where information moves and where the friction appears.",
  },
  {
    num: "02",
    title: "Define the truth",
    body: "Agree the logic, ownership and definitions before adding another layer of technology.",
  },
  {
    num: "03",
    title: "Build the system",
    body: "Connect the right tools, automate the right handoffs and create the operating view around them.",
  },
  {
    num: "04",
    title: "Improve what works",
    body: "Monitor the system, surface exceptions and keep improving the process as the business changes.",
  },
];

export default function FeatureSection() {
  return (
    <section className="section-content py-24 sm:py-32 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="eyebrow">How Datalift works</p>
          <h2 className="display-lg mt-5 max-w-[9ch]">Simple by design. Serious underneath.</h2>
          <p className="mt-7 max-w-lg text-lg leading-8 text-secondary">
            Good automation is not about adding complexity. It is about understanding the work well enough to make the complexity disappear for the people using it.
          </p>
        </div>

        <div className="border-t border-border">
          {steps.map((step) => (
            <article key={step.num} className="grid gap-4 border-b border-border py-8 sm:grid-cols-[72px_1fr] sm:gap-8 sm:py-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-secondary">{step.num}</p>
              <div className="grid gap-3 md:grid-cols-[.8fr_1.2fr] md:gap-10">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{step.title}</h3>
                <p className="max-w-xl text-[15px] leading-7 text-secondary sm:text-base">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
