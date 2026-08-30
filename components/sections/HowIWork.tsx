import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    n: "01",
    title: "Understand",
    description:
      "I understand the requirements, users, constraints and expected outcome.",
  },
  {
    n: "02",
    title: "Design",
    description:
      "I define the architecture, technology and implementation plan.",
  },
  {
    n: "03",
    title: "Build",
    description:
      "I develop, integrate and test the application incrementally.",
  },
  {
    n: "04",
    title: "Deploy & Handover",
    description:
      "I deploy the solution and provide documentation so you can maintain it.",
  },
];

export function HowIWork() {
  return (
    <section className="border-b border-border bg-bg/30 backdrop-blur-[2px]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Process" title="How I Work" />

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border md:block" />
          {steps.map((step) => (
            <div key={step.n} className="relative">
              <p className="mb-4 font-mono text-sm text-signal-amber">{step.n}</p>
              <h3 className="mb-2 font-display text-lg font-medium text-ink">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
