import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Start a Data or Automation Project",
  description:
    "Talk to Datalift about reporting, data integration, workflow automation, CRM operations or practical AI for your business.",
};

export default function ContactPage() {
  return (
    <div className="relative section-content py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/datalift-contact-background.webp"
          alt=""
          fill
          className="object-cover opacity-80"
          aria-hidden
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Tell us what feels harder than it should.</h1>
          <p className="mt-5 text-white/80 text-lg leading-relaxed">
            You do not need a perfect brief. Tell us what is slow, unclear, repetitive or difficult to trust. We will help you identify the most useful place to begin.
          </p>
        </div>

        <form className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur p-6 md:p-8" aria-label="Contact enquiry">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-xs font-medium text-white/80">Name</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#B8F36B]" />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-medium text-white/80">Work email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#B8F36B]" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="text-xs font-medium text-white/80">Company</label>
              <input id="company" name="company" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#B8F36B]" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="improve" className="text-xs font-medium text-white/80">What would you like to improve?</label>
              <textarea id="improve" name="improve" rows={4} required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#B8F36B]" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="systems" className="text-xs font-medium text-white/80">Which systems are involved?</label>
              <input id="systems" name="systems" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#B8F36B]" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="outcome" className="text-xs font-medium text-white/80">What would a successful outcome look like?</label>
              <textarea id="outcome" name="outcome" rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#B8F36B]" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="budget" className="text-xs font-medium text-white/80">Optional budget or timeline</label>
              <input id="budget" name="budget" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-[#B8F36B]" />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 h-11 rounded-full bg-[#B8F36B] px-5 text-sm font-medium text-black hover:bg-white transition-colors"
          >
            Send enquiry
          </button>

          <p className="mt-4 text-xs text-white/70">
            Prefer email? Contact: hello@datalift.tech
          </p>
        </form>
      </div>
    </div>
  );
}
