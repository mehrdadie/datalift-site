import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Practical Data and Automation Partner",
  description:
    "Datalift is a practical data and automation partner helping growing businesses connect systems, clarify performance and create better operating habits.",
};

const beliefs = [
  "Data should reduce uncertainty, not create more of it.",
  "Automation should remove friction, not hide mistakes.",
  "AI should create useful context, not replace responsibility.",
  "Reporting should lead to action, not become another weekly ritual.",
];

export default function AboutPage() {
  return (
    <div className="section-content py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Useful technology starts with understanding the work.</h1>
          <p className="mt-5 text-secondary text-lg leading-relaxed">
            Datalift exists to make business technology more useful, more understandable and more connected to the decisions people make every day.
          </p>

          <ul className="mt-10 space-y-2 text-sm text-secondary list-disc list-inside">
            {beliefs.map((item) => (
              <li key={item} className="p-3 rounded-xl border border-border bg-white">{item}</li>
            ))}
          </ul>

          <div className="mt-10 rounded-3xl border border-border bg-white p-6">
            <p className="text-xl font-semibold tracking-tight">Let’s make the next decision easier.</p>
            <p className="mt-2 text-secondary">Talk to us about your operation, goals and the work you would like to improve.</p>
          </div>
        </div>

        <div className="relative rounded-3xl border border-border bg-white p-2 shadow-sm">
          <Image
            src="/images/datalift-approach-understand.webp"
            alt="Datalift founder in a minimal architectural studio"
            width={800}
            height={1000}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
