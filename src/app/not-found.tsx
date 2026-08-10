import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">404</h1>
      <p className="mt-4 text-secondary text-lg leading-relaxed">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:bg-secondary transition-colors">
          Back to homepage
        </Link>
        <Link href="/work" className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-medium hover:border-foreground transition-colors">
          View our work
        </Link>
      </div>
    </div>
  );
}
