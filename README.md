# Mehrdad Fashami — consultant site

Single-page site for an independent Data, Automation & Growth Systems Consultant.
Dark, editorial, built around three diagrams that show the actual work rather than
stock imagery.

## Design

Three accents, each with one fixed job — swapping them breaks the argument the
page is making:

| Token | Colour | Means |
|---|---|---|
| `signal` | amber | live, connected, the action to take |
| `oxide` | burnt red | the broken state, the "before", the figure that disagrees |
| `verdigris` | muted green | resolved, reconciled, the outcome |

The ground is a deep slate-teal rather than black and type is bone rather than
blue-white. Data surfaces are square; only controls take a radius. Type is
Archivo (display, running slightly expanded on the width axis), Instrument Sans
(body) and JetBrains Mono (every label, figure and tag).

`Selected outcomes` is the one inverted section — a printed sheet in the middle
of a dark page, because proof is the part a client circulates. It sets
`.on-paper`, which swaps the tokens locally, so every child including the SVG
diagrams adapts without a second set of styles.

The hero has no illustration beside the headline. Both headline lines are 21
characters, so above `md` the type is sized to the measure with `calc()` and set
solid — it becomes a block rather than a ragged paragraph. Beneath it runs the
journey rail: one customer moving through seven systems on a ruler, advancing on
its own while on screen, pausing on hover or focus, still under reduced motion.
When it reaches the last stop a dashed return path draws back to the first —
revenue joined to the click that started it, which is the whole pitch.

Sections deliberately do not share a template:

- **Platforms** — a grouped spec sheet; each one labelled with where it sits in
  the chain.
- **Problems** — ruled rows that show each symptom as data, with the figure that
  gives the problem away set in oxide.
- **Positioning** — four specialists, each owning a territory, the failures named
  in the seams between them, and a bracket down the gutter spanning all four.
- **Capabilities** — three ruled rows with the scope running inline, not three
  columns of bullets. Not a sequence, so no 01/02/03 markers.
- **Client feedback** — unboxed pull quotes indenting down the page.
- **Where I am most useful** — a two-ledger qualification sheet.

Text colours are audited against both grounds; everything in use sits between
5:1 and 14.7:1. The paper section needs its own darker accents — the amber that
reads at 8.3:1 on the dark ground manages only 3.4:1 on bone.

## Stack

Next.js 16 (App Router, static export of `/`) · React 19 · TypeScript · Tailwind CSS v4
· Framer Motion. No CMS, no database, no external assets — the whole
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
