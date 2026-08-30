import { RevealText } from "@/components/ui/text-reveal";

export function Footer() {
  return (
    <footer className="px-6 py-10 text-center md:px-10">
      <RevealText as="p" trigger="inView" className="block font-display text-base font-medium text-ink" text="Mahindra Pagadala" />
      <RevealText as="p" trigger="inView" className="mt-1 block font-mono text-xs uppercase tracking-widest text-faint" text="AI & Full-Stack Developer" />
      <RevealText as="p" trigger="inView" className="mt-4 block font-mono text-xs text-faint" text="pagadalamahindrareddy@gmail.com · +91 8328125219" />
      <RevealText as="p" trigger="inView" className="mt-2 block font-mono text-xs text-faint" text="Python • Java • React • RAG • AI Agents" />
      <RevealText as="p" trigger="inView" className="mt-6 block font-mono text-[11px] text-faint" text="© 2026 Mahindra Pagadala" />
    </footer>
  );
}