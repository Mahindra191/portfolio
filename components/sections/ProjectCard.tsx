import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { RevealText } from "@/components/ui/text-reveal";

export function ProjectCard({ project }: { project: Project }) {
  const accent =
    project.accent === "amber" ? "text-signal-amber" : "text-signal-cyan";
  const accentBorder =
    project.accent === "amber"
      ? "group-hover:border-signal-amber/50"
      : "group-hover:border-signal-cyan/50";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-200",
        accentBorder,
      )}
    >
      <div className="relative h-40 w-full overflow-hidden border-b border-border/70 bg-surface-2">
        <Image
          src={project.image}
          alt={`${project.title} interface screenshot`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <RevealText
          as="p"
          trigger="inView"
          stagger={0.08}
          className={cn("mb-2 block font-mono text-[11px] uppercase tracking-widest", accent)}
          text={project.category}
        />
        <RevealText
          as="h3"
          trigger="inView"
          stagger={0.05}
          className="mb-2 block font-display text-xl font-medium text-ink"
          text={project.title}
        />
        <RevealText
          as="p"
          trigger="inView"
          stagger={0.012}
          className="mb-5 block flex-1 text-sm leading-relaxed text-muted"
          text={project.summary}
        />

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <RevealText
              key={t}
              as="span"
              trigger="inView"
              className="rounded border border-border/70 px-2 py-1 font-mono text-[10px] text-faint"
              text={t}
            />
          ))}
        </div>

        <span
          className={cn(
            "inline-flex items-center gap-1.5 font-mono text-xs font-medium",
            accent,
          )}
        >
          View Case Study
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}