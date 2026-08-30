import { SectionHeading } from "./SectionHeading";
import { RevealText } from "@/components/ui/text-reveal";

const groups = [
  {
    label: "AI / GenAI",
    items: ["RAG", "AI Agents", "LangChain", "LangGraph", "LLMs", "Prompt Engineering", "Vector Databases", "MCP"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Java", "Spring Boot", "REST APIs", "Node.js", "WebSockets"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Qdrant", "Neo4j"],
  },
  {
    label: "Engineering",
    items: ["Git", "GitHub", "Docker", "Linux", "Testing", "System Design"],
  },
];

export function TechnicalSkills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Toolset" title="Technical Skills" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.label}>
              <RevealText
                as="p"
                trigger="inView"
                className="mb-3 block font-mono text-xs uppercase tracking-widest text-faint"
                text={group.label}
              />
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <RevealText
                    key={item}
                    as="span"
                    trigger="inView"
                    className="rounded-md border border-border px-3 py-1.5 text-sm text-ink transition-colors hover:border-signal-cyan/60 hover:text-signal-cyan"
                    text={item}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}