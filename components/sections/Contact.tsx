import { Github, Mail, Phone } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { RevealText } from "@/components/ui/text-reveal";

const EMAIL = "pagadalamahindrareddy@gmail.com";
const PHONE = "+91 8328125219";

const links = [
  { label: "GitHub", href: "https://github.com/Mahindra191", icon: Github },
  { label: "Email", href: `mailto:${EMAIL}`, icon: Mail },
  { label: "Call", href: `tel:${PHONE.replace(/\s/g, "")}`, icon: Phone },
];

export function Contact() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
        <RevealText as="p" trigger="inView" className="mb-3 block font-mono text-xs uppercase tracking-[0.25em] text-signal-cyan" text="Get in touch" />
        <RevealText as="h2" trigger="inView" stagger={0.06} className="mb-4 block font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl" text="Have a project in mind?" />
        <RevealText as="p" trigger="inView" className="mb-9 block text-muted" text="Let's discuss what you're building." />

        <a href={`mailto:${EMAIL}`} className={buttonClasses("primary", "mx-auto")}>
          Start a Conversation
        </a>

        <RevealText as="p" trigger="inView" className="mt-8 block font-mono text-xs text-faint" text={`${EMAIL} · ${PHONE}`} />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-faint transition-colors hover:text-signal-cyan"
            >
              <l.icon className="h-4 w-4" strokeWidth={1.5} />
              <RevealText as="span" trigger="inView" text={l.label} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}