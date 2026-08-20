# Backlink and citation targets

Last updated: 2026-08-20 · Companion to `keyword-research.md`

## How to use this

Work top-down. The list is ordered by **value per hour of effort**, not by
volume. Fifty profile links are worth less than one editorial mention, and
mass-submission services are worth nothing at all.

**A note on "nofollow".** Most profile and directory links are `nofollow`, which
means they pass no ranking signal to Google. That is often quoted as a reason to
skip them. It is only half true, and the other half matters for this site:

- **For Google ranking** — nofollow links do little. Editorial links do the work.
- **For AI retrieval** (ChatGPT, Perplexity, Copilot, AI Overviews) — the models
  read these pages as *corroboration*. Seeing the same name, role and domain
  across LinkedIn, GitHub, a directory and a conference page is what lets a model
  resolve "Mehrdad Fashami" to one confident entity rather than a guess.

Since AI findability is an explicit goal here, the profile tier is worth doing
even though an SEO purist would skip it. Just don't mistake it for the main event.

Status column: leave blank, mark `todo`, `done`, or `n/a` as you work through.

---

## Tier 1 — Editorial mentions (highest value, free)

Real publications quoting you. These are the only free links that carry genuine
ranking weight, and the only ones that make an AI model treat you as a source
rather than a listing.

| Platform | What it is | Effort | Status |
|---|---|---|---|
| [Featured.com](https://featured.com) | Answer expert questions; get published with attribution | 15 min/day | |
| [Help a B2B Writer](https://helpab2bwriter.com) | B2B journalist requests — closest match to your audience | 15 min/day | |
| [Qwoted](https://qwoted.com) | Journalist source requests, free for sources | 15 min/day | |
| [SourceBottle](https://sourcebottle.com) | Same model, broader/consumer skew | Low | |
| [Terkel](https://terkel.io) | Q&A answers syndicated to business publications | Low | |

**How to actually win these:** answer only where you have a specific mechanism to
describe. "Here is the three-definition framework I use when CRM and finance
disagree on revenue" gets picked. "Data quality is important" does not. Expect
roughly a 1-in-10 hit rate.

---

## Tier 2 — Your own stack's ecosystems (highest relevance)

This is the unfair advantage: you already work in these tools, the audience is
pre-qualified, and the content proves competence instead of asserting it.

| Platform | What to publish | Status |
|---|---|---|
| [n8n template library](https://n8n.io/workflows/) | A working workflow (e.g. CRM → BigQuery revenue sync). Gets you a creator profile + link | |
| [n8n community forum](https://community.n8n.io) | Answer integration questions; threads rank well | |
| [Supabase showcase / Launch Week](https://supabase.com) | Built on Supabase — submit the site | |
| [Vercel showcase](https://vercel.com) | Same | |
| Make community | Adjacent automation audience | |
| Zapier Experts directory | Listing as an automation consultant | |
| [Stack Overflow](https://stackoverflow.com) | Profile allows a link; answers build durable reputation | |
| [GitHub](https://github.com) | Profile README + pinned repos linking the site | |

---

## Tier 3 — Content republishing (canonical back to you)

Publish the same article on a bigger platform with `canonical` pointing home.
You borrow their reach and authority with no duplicate-content penalty.

| Platform | Canonical support | Automatable | Status |
|---|---|---|---|
| [dev.to](https://dev.to) | Yes — `canonical_url` | Yes, REST API | |
| [Hashnode](https://hashnode.com) | Yes — original article URL | **Paid only** — API needs Hashnode Pro ($5/mo) since May 2026 | |
| [Medium](https://medium.com) | Yes, via import tool | **No** — no new API tokens since 2025 | |
| [Substack](https://substack.com) | Newsletter + archive pages | Manual | |
| [Reddit](https://reddit.com) r/RevOps, r/analytics | Link only where it answers the question | Manual | |
| [Indie Hackers](https://indiehackers.com) | Founder audience, allows profile link | Manual | |

**Caveat:** dev.to and Hashnode are developer audiences — not founders, CMOs or
heads of sales. They help entity corroboration and AI retrieval. They will not
produce leads. Do them for findability, not pipeline.

**Hashnode went paid.** Free GraphQL API access was retired on 13 May 2026 after
scrapers abused it; since 11 June the API sits behind Hashnode Pro at $5/month or
$50/year. Manual posting through the web UI is still free — only automation is
gated. Given the audience caveat above, paying for automated access here is hard
to justify. dev.to remains free and is the better of the two anyway.

---

## Tier 4 — Freelance and consultancy platforms

Free profiles that also produce actual work, which makes them worth more than
a plain directory listing.

| Platform | Notes | Status |
|---|---|---|
| [YunoJuno](https://yunojuno.com) | UK freelance, strong for contract/day-rate work | |
| [The Work Crowd](https://theworkcrowd.com) | UK freelance consultants | |
| [Malt](https://malt.com) | Europe-wide freelance | |
| [The Dots](https://the-dots.com) | UK creative/digital network | |
| [Clutch](https://clutch.co) | Free listing; B2B buyers use it, and AI models cite it | |
| [GoodFirms](https://goodfirms.co) | Similar model | |
| [Upwork](https://upwork.com) / [Toptal](https://toptal.com) | Profile + inbound leads | |
| [Contra](https://contra.com) | Free, commission-free freelance profiles | |
| [Wellfound](https://wellfound.com) | Startup-facing profile | |

---

## Tier 5 — Identity and citation profiles

Fast, free, mostly nofollow. Do these in one sitting. Their job is entity
corroboration — same name, same role, same domain, everywhere.

| Platform | Status |
|---|---|
| [LinkedIn](https://linkedin.com) — headline in market language, domain in Contact Info | |
| [Crunchbase](https://crunchbase.com) — person profile, free tier | |
| [Gravatar](https://gravatar.com) — feeds profile data to many other sites | |
| [about.me](https://about.me) | |
| [X / Twitter](https://x.com) — bio link | |
| [Google Business Profile](https://business.google.com) — service-area business | |
| [Bing Places](https://bingplaces.com) | |
| [Product Hunt](https://producthunt.com) — maker profile | |
| [AngelList / Wellfound](https://wellfound.com) | |
| [Polywork](https://polywork.com) | |

**Consistency is the point.** Use the same name spelling, the same role wording,
and the same URL format (`https://mehrdadfashami.com`) on every one. Inconsistent
entries actively weaken entity resolution rather than strengthening it.

---

## Tier 6 — Communities where your buyers actually are

Slow, no immediate link, but this is where referral work comes from.

- **RevOps Co-op** — Slack community for revenue operations practitioners
- **Wizards of Ops** — Slack, ops practitioners
- **Data Angels / Locally Optimistic** — data leadership communities
- **MeasureSlack** — analytics and measurement
- **r/RevOps**, **r/analytics**, **r/dataengineering**

Contribute properly. Link only when the link *is* the answer.

---

## Tier 7 — Podcasts and speaking

Show notes always link out, and small B2B/RevOps/data podcasts are permanently
short of guests. You already have conference photos — that implies speaking
history worth listing and linking.

Pitch a specific angle, never "I'd like to come on." For example: *"Why marketing
and finance never agree on revenue — and the three definitions that fix it."*

Also: any conference you have spoken at almost certainly has a speaker page.
Get it updated to point at the new domain.

---

## Worth small money (and what is not)

### The rule

Nothing sold *as a backlink* is worth buying. Every legitimate paid link below is
a by-product of something else you are actually getting — a membership, an
audience, a tool. If the pitch is "links," walk away.

Also weigh time against money honestly. A podcast appearance is free and worth
more than any directory. If your hourly rate is meaningful, a £50/year fee that
saves you two hours is cheap and a £20 link package that costs you a manual
action is not.

### Legitimate, low cost

| Option | What you actually get | Verdict |
|---|---|---|
| **Professional body membership** (BCS, Institute of Analytics, industry associations) | Member directory listing, credibility marker, sometimes a profile page | Good — real organisation, real directory |
| **Chamber of Commerce** (local) | Directory listing plus actual local networking | Good if you want local/UK clients |
| **Niche newsletter sponsorship** | One-off placement in front of a relevant audience | Good — buy the audience, the link is a bonus |
| **[Featured.com](https://featured.com) paid tier** | More visibility to journalists than the free tier | Reasonable once the free tier proves it works for you |
| **Hashnode Pro** ($5/mo, $50/yr) | API access for automated cross-posting | Only if you have already decided Hashnode matters — see Tier 3 |
| **Medium membership** ($50/yr) | Publication access and distribution | Marginal — no API either way |
| **Conference ticket where you speak** | Speaker page, bio, link, and a room full of buyers | Best money on this list |

### Not worth it

| Option | Why |
|---|---|
| "N backlinks for £X" packages | Link scheme. Penalty risk on a new domain, zero AI value |
| Paid guest posts on generic "DA50+" sites | Explicitly against Google guidelines; those sites exist only to sell links |
| Mass directory submission services | Hundreds of listings nobody reads |
| PBN access | Fastest way to lose a young domain |
| Press release distribution | Syndicated copies, almost always nofollow, no editorial pickup |
| Paid Clutch/GoodFirms tiers | The free listing gives you the link. Paid tiers sell leads, not links — judge them as a lead channel, separately |

### The honest summary

For your situation — a domain registered today, no inbound links, targeting
founders and revenue leaders — the ranking work is **editorial mentions and real
content**, both free. The only spend I would defend right now is a conference or
event where you speak, because it produces a link, an audience and a case for
your expertise at once.

Revisit paid options once the site has six months of history and something to
point at. Buying links into an empty domain is spending money to look suspicious.

## Do not bother

- **Paid guest-post schemes / link packages** — Google penalises them and AI
  systems ignore them
- **Mass directory submission services** — hundreds of junk listings, no value
- **Comment-spam and forum-signature links** — actively harmful
- **PBNs** — the fastest way to lose a new domain

---

## Suggested first week

1. Tier 5, all of it, in one sitting — consistent name/role/URL everywhere
2. LinkedIn headline rewritten in the market's language, domain linked
3. One n8n template published
4. Start the daily journalist-request habit (Featured + Help a B2B Writer)
5. Republish the existing article to dev.to and Hashnode with canonical set

Everything else can wait until there is more than one article to point at.
