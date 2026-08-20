import { profile } from "@/content/profile"

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="shell flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-[17px] font-semibold tracking-[-0.02em] text-ink">
            {profile.name}
          </p>
          <p className="mt-2 max-w-xs text-[14px] leading-snug text-ink-3">{profile.role}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3 md:items-end">
          <a
            href={`mailto:${profile.email}`}
            className="text-[15px] text-ink-2 transition-colors hover:text-ink"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[15px] text-ink-2 transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-[13px] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </footer>
  )
}
