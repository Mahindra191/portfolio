import { Bot, Server, Globe, LineChart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    icon: Bot,
    title: "AI & GenAI",
    description:
      "RAG applications, AI agents, LLM integrations, knowledge systems and AI-powered automation.",
    accent: "amber" as const,
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "FastAPI and Spring Boot APIs, databases, authentication, business logic and integrations.",
    accent: "cyan" as const,
  },
  {
    icon: Globe,
    title: "Full-Stack Applications",
    description:
      "React/Next.js frontends connected to scalable backend services and databases.",
    accent: "cyan" as const,
  },
  {
    icon: LineChart,
    title: "Machine Learning",
    description:
      "Predictive models, data preprocessing, feature engineering and ML application integration.",
    accent: "amber" as const,
  },
];

export function WhatICanBuild() {
  return (
    <section className="border-b border-border bg-bg/30 backdrop-blur-[2px]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Capabilities" title="What I Can Build" />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="bg-bg p-8">
              <item.icon
                className={`mb-4 h-6 w-6 ${
                  item.accent === "amber" ? "text-signal-amber" : "text-signal-cyan"
                }`}
                strokeWidth={1.5}
              />
              <h3 className="mb-2 font-display text-lg font-medium text-ink">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
