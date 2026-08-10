import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="rounded-3xl border border-border bg-white p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Your next improvement may already be hidden in your data.
        </h2>
        <p className="mt-4 text-secondary text-lg leading-relaxed max-w-2xl">
          Tell us where the process feels slow, unclear or too dependent on
          manual work. We will help you find the most valuable place to start.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-secondary transition-colors"
        >
          Start a conversation
        </Link>
      </div>
    </section>
  );
}
