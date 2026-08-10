import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Data or Automation Project",
  description:
    "Talk to Datalift about reporting, data integration, workflow automation, CRM operations or practical AI for your business.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Tell us what feels harder than it should.</h1>
          <p className="mt-5 text-secondary text-lg leading-relaxed">
            You do not need a perfect brief. Tell us what is slow, unclear, repetitive or difficult to trust. We will help you identify the most useful place to begin.
          </p>
        </div>

        <form className="rounded-3xl border border-border bg-white p-6 md:p-8" aria-label="Contact enquiry">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-xs font-medium">Name</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground" />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-medium">Work email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="text-xs font-medium">Company</label>
              <input id="company" name="company" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="improve" className="text-xs font-medium">What would you like to improve?</label>
              <textarea id="improve" name="improve" rows={4} required className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="systems" className="text-xs font-medium">Which systems are involved?</label>
              <input id="systems" name="systems" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="outcome" className="text-xs font-medium">What would a successful outcome look like?</label>
              <textarea id="outcome" name="outcome" rows={4} className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="budget" className="text-xs font-medium">Optional budget or timeline</label>
              <input id="budget" name="budget" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground" />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 h-11 rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-secondary transition-colors"
          >
            Send enquiry
          </button>

          <p className="mt-4 text-xs text-secondary">
            Prefer email? Contact: hello@datalift.tech
          </p>
        </form>
      </div>
    </div>
  );
}
