import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import WorkflowDiagram, { type WorkflowStep } from "@/components/ui/WorkflowDiagram";
import CtaSection from "@/components/ui/CtaSection";

export const metadata: Metadata = {
  title: "Business & Workflow Automation",
  description:
    "Remove repeatable manual work between the tools your team already uses. Datalift builds reliable workflow automation with audit trails, exception handling and observable outcomes.",
  alternates: { canonical: "/services/automation" },
};

const automationTypes = [
  {
    title: "Data Sync & Integration",
    body: "Real-time and scheduled sync between your CRM, billing, telephony, spreadsheets and databases so every system stays current without manual exports.",
    tone: "blue" as const,
  },
  {
    title: "Scheduled Workflows",
    body: "Recurring jobs that run on your schedule — daily reconciliation, weekly pipeline snapshots, monthly cohort reports — without anyone pressing a button.",
    tone: "indigo" as const,
  },
  {
    title: "CRM Automation",
    body: "Auto-update records, assign ownership, enrich contact fields and trigger follow-up tasks directly in your CRM based on rules your team defines.",
    tone: "green" as const,
  },
  {
    title: "Alerting & Notifications",
    body: "Trigger Slack messages, emails or CRM tasks when conditions are met — anomalies, missed SLAs, data gaps or signals your team asked to watch for.",
    tone: "amber" as const,
  },
  {
    title: "Exception Queues",
    body: "When automation can't resolve a record, it lands in a human review queue with context — so your team decides, not the machine.",
    tone: "violet" as const,
  },
  {
    title: "Audit Logs & Observability",
    body: "Every automation step is logged with timestamps, inputs, decisions and outputs. When something needs explaining, the trail is there.",
    tone: "indigo" as const,
  },
];

const workflow: WorkflowStep[] = [
  { label: "Source systems", kind: "source", sub: "CRM, billing, sheets, calls" },
  { label: "Data layer", kind: "system", sub: "Clean, unified model" },
  { label: "n8n workflows", kind: "automation", sub: "Triggers, transforms, decisions" },
  { label: "AI enrichment", kind: "ai", sub: "Classification, summaries" },
  { label: "Destination", kind: "output", sub: "CRM, dashboard, alerts" },
];

const benefits = [
  {
    value: "9h",
    label: "reporting saved per week after automation",
  },
  {
    value: "100%",
    label: "of workflow steps logged with full audit trail",
  },
  {
    value: "0",
    label: "manual exports — every sync is automated",
  },
  {
    value: "24/7",
    label: "workflows run on schedule, not on memory",
  },
];

const faqs = [
  {
    q: "What tools do you use for automation?",
    a: "We primarily use n8n for workflow orchestration because it's transparent, self-hostable and connects to virtually any API. We also work with Zapier, Make and custom scripts where the situation calls for it.",
  },
  {
    q: "Can you automate our existing CRM?",
    a: "Yes. We work with Salesforce, GoHighLevel, HubSpot and most CRMs with an API. We automate record updates, ownership assignment, field enrichment, follow-up task creation and pipeline stage transitions.",
  },
  {
    q: "How do you handle errors in automated workflows?",
    a: "Every workflow includes error handling, retry logic and dead-letter routing. Records that can't be processed automatically land in an exception queue with full context so a human can decide the next step. Nothing fails silently.",
  },
  {
    q: "Do we need to install anything?",
    a: "Usually not. We build automations that connect to your existing tools via their APIs. Where self-hosted infrastructure makes sense, we can set it up and maintain it.",
  },
  {
    q: "How long does it take to automate a process?",
    a: "Simple automations can be live within days of mapping the process. More complex cross-system workflows typically take 2–4 weeks from discovery to production, depending on the number of systems and decision rules involved.",
  },
  {
    q: "Will we see what the automation is doing?",
    a: "Yes. Every automation includes an audit log showing what ran, when, what inputs it received, what decisions it made and what outputs it produced. You can inspect any run at any time.",
  },
];

const tools = [
  "n8n",
  "Make (Integromat)",
  "Zapier",
  "Salesforce Flow",
  "GoHighLevel API",
  "Stripe API",
  "Chargebee",
  "Aircall Webhooks",
  "Google Sheets API",
  "BigQuery",
  "Slack API",
  "Custom webhooks",
];

export default function AutomationServicePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="dl-grid-bg absolute inset-0" aria-hidden />
        <Container className="relative py-20 md:py-32">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow eyebrow-line">Automation</p>
              <h1 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-6xl">
                Remove the work between the work.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body md:text-xl">
                We automate the handoffs, validations, updates and alerts that sit between the systems your team already uses —
                so people spend time on decisions, not data entry.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Start a conversation</Button>
                <Button href="/work" variant="secondary">See automation in action</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-16">
              <WorkflowDiagram
                title="Typical automation flow"
                steps={workflow}
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ─── WHAT WE AUTOMATE ─── */}
      <Section tint>
        <SectionHeader
          eyebrow="What we automate"
          title="Six kinds of automation that pay for themselves."
          intro="We target the repetitive, high-volume work that sits between systems — the copy-paste, the exports, the manual checks, the forgotten follow-ups."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {automationTypes.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="rounded-xl border border-line bg-surface p-6 shadow-card">
                <div className="flex items-center gap-2.5">
                  <Tag tone={item.tone} mono>{item.title.split(" &")[0]}</Tag>
                </div>
                <h3 className="mt-4 font-display text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ─── BENEFITS METRICS ─── */}
      <Section>
        <div className="grid gap-8 border-y border-line py-12 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="font-display text-4xl font-medium tracking-tight text-accent md:text-5xl">
                  {b.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-body">{b.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ─── HOW WE WORK ─── */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeader
                eyebrow="How we work"
                title="From manual to mechanical in four steps."
                intro="We don't automate everything at once. We find the highest-leverage process, prove it works, then expand."
              />
              <div className="mt-8 space-y-6">
                {[
                  { step: "01", title: "Map the process", body: "We shadow your team, document the current workflow and identify every manual handoff, validation check and re-entry point." },
                  { step: "02", title: "Define the rules", body: "Together we write the decision logic — what triggers an action, what data it needs, what happens when something doesn't match." },
                  { step: "03", title: "Build & test", body: "We wire the automation, run it against real historical data, and refine until the outputs match expectations." },
                  { step: "04", title: "Run, watch, improve", body: "The automation goes live with full logging. We monitor for the first cycles, tune the rules and hand over with documentation." },
                ].map((s, i) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="mt-0.5 shrink-0 font-mono text-xs font-medium text-muted">{s.step}</span>
                    <div>
                      <h3 className="font-display text-base font-medium tracking-tight">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-body">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-xl border border-line bg-surface-2 p-6 shadow-card">
              <div className="dl-dots-bg absolute inset-0 rounded-xl" aria-hidden />
              <div className="relative space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">How automation helps</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "No more \"did that export run?\" anxiety",
                    "Errors surface immediately, not at month-end",
                    "Team focuses on decisions, not copy-paste",
                    "Every change is logged — audits are effortless",
                    "Scale without hiring for manual ops",
                    "New hires onboard into automated, documented processes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0" aria-hidden>
                        <circle cx="8" cy="8" r="3" fill="var(--color-accent)" opacity="0.3" />
                        <circle cx="8" cy="8" r="1.5" fill="var(--color-accent)" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ─── TOOLS & INTEGRATIONS ─── */}
      <Section tint>
        <SectionHeader
          eyebrow="Tools & integrations"
          title="Built on the tools your team already knows."
          intro="We connect to the systems you already run. No rip-and-replace, no new platform to learn."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Tag key={tool} mono>{tool}</Tag>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-sm text-muted">
            These are the tools we work with most often, but we can connect to any system with an API or webhook.
            If your stack isn't listed here,{" "}
            <a href="/contact" className="underline underline-offset-2 hover:text-accent transition-colors">
              tell us what you use
            </a>
            {" "}and we'll map the path.
          </p>
        </Reveal>
      </Section>

      {/* ─── FAQ ─── */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeader
            eyebrow="Common questions"
            title="What teams ask before automating."
          />
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="rounded-xl border border-line bg-surface p-5">
                  <dt className="font-display text-base font-medium tracking-tight">{item.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-body">{item.a}</dd>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaSection
        title="Ready to automate the work that slows you down?"
        body="Tell us which process costs your team the most time. We'll map the automation path and show you what's possible."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "See our work", href: "/work" }}
      />
    </>
  );
}
