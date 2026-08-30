"use client";

import Link from "next/link";
import { RevealText } from "@/components/ui/text-reveal";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-mono text-sm tracking-widest text-ink">
          MAHINDRA<span className="text-signal-amber">.SYS</span>
        </Link>
        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-signal-cyan">
                <RevealText as="span" trigger="inView" text={l.label} />
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden font-mono text-xs uppercase tracking-widest text-signal-amber md:block">
          Hire Me →
        </a>
      </nav>
    </header>
  );
}