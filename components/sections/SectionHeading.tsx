import { RevealText } from "@/components/ui/text-reveal";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center" : ""}`}>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-signal-cyan">
        {eyebrow}
      </p>
      <RevealText
        as="h2"
        trigger="inView"
        stagger={0.06}
        className="block font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl"
        text={title}
      />
    </div>
  );
}
