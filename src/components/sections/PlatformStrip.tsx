import { platforms } from "@/content/profile"

export default function PlatformStrip() {
  const row = [...platforms.items, ...platforms.items]

  return (
    <section aria-label="Platforms I work with" className="hairline border-b border-line py-10">
      <div className="shell">
        <p className="mono-label mb-7">{platforms.title}</p>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <ul className="animate-marquee flex w-max items-center gap-10 pr-10 md:gap-14">
          {row.map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= platforms.items.length}
              className="font-display text-[17px] font-medium whitespace-nowrap text-ink-3 transition-colors duration-300 hover:text-ink-2 md:text-[19px]"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
