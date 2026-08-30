import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { RevealText } from "@/components/ui/text-reveal";

const paragraphs = [
  "I'm an AI and Full-Stack Developer focused on building practical software applications using modern AI and web technologies.",
  "My projects span RAG and knowledge systems, multi-agent AI, distributed applications and machine learning. I enjoy working across the stack — from designing APIs and data systems to building frontend experiences and deploying applications.",
  "I'm particularly interested in projects where AI needs to be integrated into a real product rather than treated as a standalone chatbot.",
];

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-6 py-24 sm:grid-cols-[auto_1fr] sm:items-start md:px-10">
        <div className="mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-lg border border-border sm:mx-0">
          <Image
            src="/profile/mahindra.jpg"
            alt="Mahindra Pagadala"
            width={224}
            height={224}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <SectionHeading eyebrow="About" title="About Me" />
          <div className="-mt-8 space-y-5 text-base leading-relaxed text-muted">
            {paragraphs.map((p, i) => (
              <RevealText key={i} as="p" trigger="inView" stagger={0.01} className="block" text={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}