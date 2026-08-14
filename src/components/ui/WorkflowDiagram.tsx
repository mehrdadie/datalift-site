export interface WorkflowStep {
  readonly kind: "source" | "system" | "automation" | "ai" | "output";
  readonly label: string;
  readonly sub?: string;
}

interface WorkflowDiagramProps {
  readonly steps: readonly WorkflowStep[];
  readonly title?: string;
}

const kindClasses: Record<WorkflowStep["kind"], string> = {
  ai: "border-violet-200 bg-violet-50 text-violet-700",
  automation: "border-blue-200 bg-blue-50 text-blue-700",
  output: "border-emerald-200 bg-emerald-50 text-emerald-700",
  source: "border-slate-200 bg-white text-slate-700",
  system: "border-indigo-200 bg-indigo-50 text-indigo-700",
};

export default function WorkflowDiagram({ steps, title }: WorkflowDiagramProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
      {title ? <h2 className="text-sm font-semibold text-foreground">{title}</h2> : null}
      <div className="mt-5 grid gap-3 md:grid-cols-5 md:items-stretch">
        {steps.map((step, index) => (
          <div key={step.label} className="relative">
            <div className={`h-full rounded-lg border p-4 ${kindClasses[step.kind]}`}>
              <p className="text-sm font-semibold">{step.label}</p>
              {step.sub ? <p className="mt-2 text-xs leading-relaxed opacity-75">{step.sub}</p> : null}
            </div>
            {index < steps.length - 1 ? (
              <span
                className="absolute -right-3 top-1/2 hidden h-px w-3 bg-border md:block"
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
