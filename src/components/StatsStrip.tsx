const outcomes = [
  { title: "One source of truth", body: "Connect the systems that currently disagree." },
  { title: "Less manual work", body: "Automate the repetitive steps between teams and tools." },
  { title: "Faster decisions", body: "Bring the useful signal forward while it can still change the outcome." },
  { title: "Systems that scale", body: "Build reliable processes that do not depend on one person remembering every step." },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-border bg-white" aria-label="Datalift outcomes">
      <div className="section-content grid sm:grid-cols-2 lg:grid-cols-4">
        {outcomes.map((item, index) => (
          <div
            key={item.title}
            className={`py-8 sm:py-10 lg:min-h-[190px] lg:py-12 ${index > 0 ? "border-t border-border sm:border-t-0 sm:border-l" : ""} ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}
          >
            <div className="px-0 sm:px-6 lg:px-8 first:pl-0">
              <p className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">{item.title}</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-secondary">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
