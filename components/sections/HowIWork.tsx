import { SectionHeading } from "./SectionHeading";
import { RevealText } from "@/components/ui/text-reveal";

const steps = [
  { n: "01", title: "Understand", description: "I understand the requirements, users, constraints and expected outcome." },
  { n: "02", title: "Design", description: "I define the architecture, technology and implementation plan." },
  { n: "03", title: "Build", description: "I develop, integrate and test the application incrementally." },
  { n: "04", title: "Deploy & Handover", description: "I deploy the solution and provide documentation so you can maintain it." },
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
              <RevealText
                as="h3"
                trigger="inView"
                stagger={0.08}
                className="mb-2 block font-display text-lg font-medium text-ink"
                text={step.title}
              />
              <RevealText
                as="p"
                trigger="inView"
                stagger={0.02}
                className="block text-sm leading-relaxed text-muted"
                text={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}