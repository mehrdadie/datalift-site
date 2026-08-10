import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Datalift privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Privacy</h1>
      <p className="mt-4 text-secondary text-lg leading-relaxed max-w-2xl">
        Your privacy is important to us. This page will contain our complete privacy policy.
      </p>
    </div>
  );
}
