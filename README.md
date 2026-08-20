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

## Blog content

Posts live in the `posts` table of the Supabase project. The table carries the
full SEO surface — `seo_title`, `seo_description`, `canonical_url`,
`focus_keyword`, `keywords`, `robots_index` / `robots_follow`, the Open Graph
and Twitter fields, `schema_type`, and a `faq` array that emits FAQPage
structured data when it is non-empty. Anything left null falls back sensibly
(`seo_title` to `title`, `seo_description` to `excerpt`, canonical to the site
URL plus slug).

Row-level security restricts anonymous reads to rows where `status = 'published'`
and `published_at` has passed, so drafts and scheduled posts are invisible to
the site until they are due. Cover and social images go in the public `blog`
storage bucket.

Two environment variables are needed — see `.env.example`:

```
SUPABASE_URL=...
SUPABASE_PUBLISHABLE_KEY=...
```

Both are read only in server components, so neither reaches the browser. If they
are absent the blog renders an empty state rather than failing the build.

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

## Pages

**`/`** — Header · Hero · Platform strip · Problems I fix · Selected outcomes ·
Positioning · Capabilities · Interactive architecture · How I work · About ·
Client feedback · Where I am most useful · Final CTA · Footer.

**`/case-studies`** — all eight studies, each tagged with the outcome it was
judged against, with a contents index in the masthead. The home page shows the
three marked `featured: true` in `caseStudies`; the page shows every one. Both
render through the same `CaseStudyArticle` component, so they cannot drift.

**`/blog`** and **`/blog/[slug]`** — posts from Supabase. Prerendered with a
ten-minute revalidation window, so publishing a post makes it appear without a
redeploy. Post bodies are markdown, rendered to React elements by
`src/lib/markdown.tsx` rather than injected as HTML.

Adding a case study means adding one object to `caseStudies` in
`src/content/profile.ts`. Set `visual` to one of `workflow`, `customer`,
`attribution`, `quality`, `dormant`, `calls` or `matrix` — the workflow visual
also takes a `workflow` spec and renders that case study's own steps.

## Before you publish — three placeholders to replace

1. **Client feedback** (`testimonials` in `profile.ts`) — I drafted these four quotes;
   they have not been transcribed from a real client. The Digital Markets, Competition
   and Consumers Act 2024 makes publishing a testimonial nobody gave a banned practice,
   so before the site points at a live domain each quote needs replacing with a real one
   or confirming in writing by the client it is attributed to.
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
