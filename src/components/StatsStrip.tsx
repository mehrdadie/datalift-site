import { site } from "@/content/site";

export default function StatsStrip() {
  return (
    <section aria-label="Key numbers" className="border-y border-border">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-secondary">
          Built around the systems your team already uses.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {site.stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
              <p className="text-sm text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-xs text-secondary">
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
