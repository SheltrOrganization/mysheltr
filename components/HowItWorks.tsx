export type Step = {
  title: string;
  description: string;
};

export function HowItWorks({
  steps,
  accentClassName = "bg-primary",
}: {
  steps: Step[];
  accentClassName?: string;
}) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="relative rounded-card border border-border bg-surface p-6">
          <span
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white ${accentClassName}`}
          >
            {index + 1}
          </span>
          <h3 className="mt-4 text-base font-semibold text-heading">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
