import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function FeaturedWork() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading eyebrow="Selected work" title="Featured Work" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Mahindra191"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-signal-cyan hover:text-signal-amber"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
