import type { ReactNode } from "react";

type Tone = "blue" | "indigo" | "green" | "amber" | "violet";

interface TagProps {
  readonly children: ReactNode;
  readonly mono?: boolean;
  readonly tone?: Tone;
}

const toneClasses: Record<Tone, string> = {
  amber: "border-amber-200 bg-amber-50 text-amber-700",
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  green: "border-emerald-200 bg-emerald-50 text-emerald-700",
  indigo: "border-indigo-200 bg-indigo-50 text-indigo-700",
  violet: "border-violet-200 bg-violet-50 text-violet-700",
};

export default function Tag({ children, mono = false, tone = "blue" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${toneClasses[tone]} ${
        mono ? "font-mono uppercase tracking-[0.08em]" : ""
      }`}
    >
      {children}
    </span>
  );
}
