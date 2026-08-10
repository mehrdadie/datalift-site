import Image from "next/image";

const friction = [
  {
    num: "01",
    title: "The data is everywhere.",
    body: "CRM, payments, calls, spreadsheets and marketing platforms each hold a different part of the story.",
  },
  {
    num: "02",
    title: "The definitions drift.",
    body: "Teams spend time reconciling numbers instead of using them to make the next decision.",
  },
  {
    num: "03",
    title: "The work stays manual.",
    body: "People copy, check, chase and update information that should already move between systems automatically.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-content py-24 sm:py-32 lg:py-40" aria-labelledby="problem-heading">
      <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Where work gets stuck</p>
          <h2 id="problem-heading" className="display-lg mt-5 max-w-[10ch]">
            More tools should not mean more work.
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-8 text-secondary">
            Most teams do not need another dashboard or another app. They need the systems they already use to work together cleanly.
          </p>
        </div>

        <div>
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white p-2 sm:rounded-[2.5rem]">
            <Image
              src="/images/datalift-approach-understand.webp"
              alt="Illustration showing business systems being mapped and understood"
              width={1200}
              height={700}
              className="aspect-[16/10] w-full rounded-[1.35rem] object-cover sm:rounded-[2rem]"
            />
          </div>

          <div className="mt-10 border-t border-border">
            {friction.map((item) => (
              <div key={item.num} className="grid gap-3 border-b border-border py-7 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-9">
                <p className="text-xs font-semibold tracking-[0.18em] text-secondary">{item.num}</p>
                <div className="grid gap-2 md:grid-cols-[.8fr_1.2fr] md:gap-8">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl">{item.title}</h3>
                  <p className="text-[15px] leading-7 text-secondary">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
