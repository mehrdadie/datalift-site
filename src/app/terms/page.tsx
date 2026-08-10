import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Datalift terms of service.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Terms</h1>
      <p className="mt-4 text-secondary text-lg leading-relaxed max-w-2xl">
        This page will contain our complete terms of service.
      </p>
    </div>
  );
}
