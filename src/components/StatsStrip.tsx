import { site } from "@/content/site";

export default function StatsStrip() {
  return (
    <section aria-label="Key numbers" className="border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-secondary">
          {site.stats[0]?.label}
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-secondary">
          {site.trust.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
