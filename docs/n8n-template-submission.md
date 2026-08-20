# n8n template submission — Blog Syndication

Everything needed to submit the syndication workflow to the public
[n8n template library](https://n8n.io/workflows/). Copy the fields straight
across. Workflow lives at `n8n.learntotradegroup.com/workflow/PDRzwwUYuv305PdZ`.

**Before submitting:** open the workflow in n8n → ⋯ → Download, and strip anything
account-specific from the JSON — the Supabase project URL, the Hashnode
publication ID, and any credential names that identify a client. The template
should carry placeholders, not your instance.

---

## Title

> Cross-post your blog from Supabase to dev.to and Hashnode with correct canonical URLs

## Short description (one line)

> Publish once to your own site, syndicate everywhere, and keep Google pointed at
> the original — without ever double-posting.

## Categories / tags

`Marketing` · `Content` · `SEO` · `Supabase` · `HTTP Request` · `Scheduling`

---

## Long description

### The problem

Cross-posting is the cheapest distribution a small publisher has. Most people do
it badly, in one of two ways.

The first is manual copy-paste, which stops after the second article because
nobody keeps it up.

The second is worse: an automation that reposts the same article on every run,
because nothing records that a post has already been syndicated. You find out
when dev.to rate-limits you, or when a reader sees the same piece four times.

There is also a quieter problem underneath both. Publishing the same article in
three places without a canonical URL means the search engines have to guess which
one is the original — and they do not always guess your site.

### What this workflow does

Every six hours it looks in a Supabase table for posts that are published but not
yet syndicated, then for each one:

1. Publishes to **dev.to** with `canonical_url` pointing back to your site
2. Publishes to **Hashnode** with `originalArticleURL` pointing back to your site
3. Writes both resulting URLs back to the row and stamps `syndicated_at`

That last step is the whole design. The query filters on `syndicated_at IS NULL`,
so a post becomes invisible to the workflow the moment it has been handled. Add a
new post, it goes out once. Nothing else changes.

Because both copies declare a canonical URL, you get the reach of the larger
platforms while your own domain stays the version search engines credit.

### How it works

```
Every 6 Hours
  └─ Syndication Settings              site URL + Hashnode publication ID
      └─ Get Posts Awaiting Syndication  status = published AND syndicated_at IS NULL
          └─ Loop Over Items (batch size 1)
              ├─ Publish to dev.to        POST /api/articles
              ├─ Publish to Hashnode      GraphQL publishPost
              └─ Mark Post Syndicated     write URLs + timestamp back
```

Both publish steps are set to **continue on error**, so one platform being down
does not block the other. The post is still stamped either way — failures surface
in the execution log rather than retrying forever. To re-run a single post, clear
its `syndicated_at` value.

### Requirements

- A Supabase table of posts. This template expects `id`, `slug`, `title`,
  `body_md`, `excerpt`, `tags`, `canonical_url`, `status`, plus three columns the
  workflow writes to: `devto_url`, `hashnode_url`, `syndicated_at`
- A **dev.to** API key — Settings → Extensions → DEV Community API Keys
- A **Hashnode** personal access token and publication ID

### Setup

1. **Supabase credential** — must use the **service role** key. The workflow
   writes back to the table; a publishable/anon key can only read, and the update
   step will fail.
2. **dev.to credential** — Header Auth, header name `api-key`.
3. **Hashnode credential** — Header Auth, header name `Authorization`. The token
   goes in raw, with **no `Bearer` prefix**.
4. **Syndication Settings node** — set your site URL and Hashnode publication ID.
5. Run manually once before activating.

### Adapting it

- **Not using Supabase?** Swap the two database nodes for Postgres, Airtable,
  Notion or Google Sheets. The shape is the same: read rows where a "syndicated"
  marker is empty, write the marker at the end.
- **Want more destinations?** Add another HTTP Request node inside the loop and
  another column to write its URL to. Hashnode and dev.to are just two APIs.
- **Different schedule?** The 6-hour interval is arbitrary. Daily is plenty for
  most blogs.

### Add this column set if you are starting fresh

```sql
alter table public.posts
  add column if not exists devto_url text,
  add column if not exists hashnode_url text,
  add column if not exists syndicated_at timestamptz;

create index if not exists posts_awaiting_syndication_idx
  on public.posts (published_at)
  where status = 'published' and syndicated_at is null;
```

---

## Author bio (this is the backlink — keep it short and useful)

> Built by **Mehrdad Fashami**, an independent data, automation and revenue
> operations consultant. I work on the seams between systems — CRM, marketing,
> finance and reporting — where the data usually breaks.
> [mehrdadfashami.com](https://mehrdadfashami.com)

---

## Notes for the accompanying blog post

Publishing the template is worth more if a post on your own site explains the
thinking. Suggested angle, consistent with the rest of the content plan:

**"The one column that stops your syndication workflow spamming everyone"**

- Open with the failure: an automation that reposts on every run
- The fix is not clever code, it is a `syndicated_at` column — state belongs in
  the database, not in the workflow
- Widen it: the same principle applies to any recurring job that touches an
  external system. If a workflow cannot tell what it has already done, it will
  do it again
- Close on canonical URLs — the quiet second problem most people miss

That post then links to the template, and the template links back. Both ends
earn their place.
