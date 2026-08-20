import { platforms } from "@/content/profile"

/**
 * A patch panel, not a logo carousel. Every platform is labelled with where it
 * sits in the chain, so the strip states a fact instead of scrolling past.
 */
export default function PlatformStrip() {
  return (
    <section aria-label="Platforms I work with" className="border-y border-rule bg-ground-2">
      <div className="shell flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-6">
        <h2 className="font-display text-[17px] font-semibold text-bone">{platforms.title}</h2>
        <p className="tag">{platforms.note}</p>
      </div>

      <ul className="grid grid-cols-2 border-t border-rule sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
        {platforms.items.map((item) => (
          <li
            key={item.name}
            className="group -mt-px -ml-px border-t border-l border-rule px-4 py-5 transition-colors hover:bg-panel"
          >
            <p className="tag transition-colors group-hover:text-signal">{item.kind}</p>
            <p className="mt-2.5 font-display text-[15px] font-medium text-bone-2 transition-colors group-hover:text-bone">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
