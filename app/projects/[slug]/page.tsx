import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { buttonClasses } from "@/components/ui/button";
import { RevealText } from "@/components/ui/text-reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const accent = project.accent === "amber" ? "text-signal-amber" : "text-signal-cyan";
  const accentBorder = project.accent === "amber" ? "border-signal-amber/40" : "border-signal-cyan/40";

  return (
    <main className="min-h-screen">
      <Nav />

      <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <Link href="/#work" className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint hover:text-signal-cyan">
          <ArrowLeft className="h-3.5 w-3.5" />
          <RevealText as="span" trigger="inView" text="All Work" />
        </Link>

        <RevealText as="p" trigger="inView" className={`mb-3 block font-mono text-xs uppercase tracking-[0.25em] ${accent}`} text={project.category} />
        <RevealText as="h1" trigger="inView" stagger={0.05} className="mb-3 block font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl" text={project.title} />
        <RevealText as="p" trigger="inView" className="mb-6 block text-lg text-muted" text={project.tagline} />

        <div className="mb-10 flex flex-wrap items-center gap-3">
          <span className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-faint">
            <RevealText as="span" trigger="inView" text={`Role: ${project.role}`} />
          </span>
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-xs ${accentBorder} ${accent} hover:opacity-80`}>
              <RevealText as="span" trigger="inView" text={link.label} />
              <ArrowUpRight className="h-3 w-3" />
            </a>
          ))}
        </div>

        <div className="relative mb-14 aspect-[16/10] w-full overflow-hidden rounded-lg border border-border">
          <Image src={project.image} alt={`${project.title} interface screenshot`} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover object-top" priority />
        </div>

        <Section title="Overview">
          <RevealText as="p" trigger="inView" stagger={0.008} className="block text-base leading-relaxed text-muted" text={project.overview} />
        </Section>

        <Section title="Architecture">
          {/* Left as plain text: it's a whitespace-sensitive ASCII diagram —
              splitting it into words would break the alignment. */}
          <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-5 font-mono text-xs leading-relaxed text-ink">
            {project.architecture}
          </pre>
        </Section>

        <Section title="What I Built">
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {project.whatIBuilt.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                <span className={`h-1 w-1 shrink-0 rounded-full ${project.accent === "amber" ? "bg-signal-amber" : "bg-signal-cyan"}`} />
                <RevealText as="span" trigger="inView" text={item} />
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Technology">
          <div className="flex flex-wrap gap-2">
            {project.technology.map((t) => (
              <span key={t} className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-ink">
                <RevealText as="span" trigger="inView" text={t} />
              </span>
            ))}
          </div>
        </Section>

        <Section title="Engineering Challenge">
          <RevealText as="p" trigger="inView" stagger={0.008} className="block text-base leading-relaxed text-muted" text={project.challenge} />
        </Section>

        <Section title="Result">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.result.map((r) => (
              <div key={r.label} className="rounded-lg border border-border bg-surface p-5">
                <RevealText as="p" trigger="inView" className={`mb-1 block font-mono text-lg font-medium ${accent}`} text={r.metric} />
                <RevealText as="p" trigger="inView" className="block text-xs leading-relaxed text-faint" text={r.label} />
              </div>
            ))}
          </div>
        </Section>

        <div className="mt-16 border-t border-border pt-10">
          <Link href="/#work" className={buttonClasses("secondary")}>
            ← Back to all work
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <RevealText as="h2" trigger="inView" className="mb-4 block font-display text-xl font-medium text-ink" text={title} />
      {children}
    </section>
  );
}