import { Metadata } from "next";

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
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Useful technology starts with understanding the work.</h1>
      <p className="mt-5 text-secondary text-lg leading-relaxed max-w-2xl">
        Datalift exists to make business technology more useful, more understandable and more connected to the decisions people make every day.
      </p>

      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-secondary list-disc list-inside">
        {beliefs.map((item) => (
          <li key={item} className="p-4 rounded-2xl border border-border bg-white">{item}</li>
        ))}
      </ul>

      <div className="mt-16 rounded-3xl border border-border bg-white p-8 md:p-12">
        <p className="text-xl font-semibold tracking-tight">Let’s make the next decision easier.</p>
        <p className="mt-2 text-secondary">Talk to us about your operation, goals and the work you would like to improve.</p>
      </div>
    </div>
  );
}
