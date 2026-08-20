# Mehrdad Fashami — consultant site

Single-page site for an independent Data, Automation & Growth Systems Consultant.
Dark, editorial, built around three diagrams that show the actual work rather than
stock imagery.

## Stack

Next.js 16 (App Router, static export of `/`) · React 19 · TypeScript · Tailwind CSS v4
· Framer Motion · Lucide icons. No CMS, no database, no external assets — the whole
page is one static route.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where the content lives

**`src/content/profile.ts` is the single source of truth for every word on the page.**
Change copy there; the components read from it. Nothing else needs editing for a
normal content change.

That file also drives two of the diagrams: `heroNodes` / `heroEdges` position the hero
visualisation, and `architecture.sources / stages / outputs` build the interactive
architecture diagram. Add a source to the array and the diagram redraws itself.

## Sections

Header · Hero · Platform strip · Problems I fix · Selected outcomes · Positioning ·
Capabilities · Interactive architecture · How I work · About · Client feedback ·
Where I am most useful · Final CTA · Footer.

## Before you publish — three placeholders to replace

1. **Client feedback** (`testimonials` in `profile.ts`) — these quotes are drafts written
   to show the section working. They are not real client feedback. Replace each one with
   a genuine, approved quote, then remove the "Draft quotes for layout" note in
   `src/components/sections/Testimonials.tsx`.
2. **Case study figures** (`caseStudies` in `profile.ts`) — illustrative numbers based on
   the brief. Swap in real engagement figures.
3. **Contact details and domain** (`profile` in `profile.ts`) — `email`, `linkedin` and
   `url` are placeholders. `url` feeds canonical links, Open Graph metadata, the sitemap
   and JSON-LD, so set it to the real domain before deploying.

Optional: the About section uses a monogram plate instead of a photograph
(`Portrait` in `src/components/sections/About.tsx`). Drop a real image into `public/`
and swap that component for `next/image` when one is available.

## Accessibility and motion

Skip link, keyboard-reachable architecture diagram (each node is a button), visible focus
rings, semantic headings, and `prefers-reduced-motion` respected — reveals resolve to
their resting state instead of animating, and the marquee and data pulses stop.
