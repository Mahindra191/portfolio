import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";

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
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-signal-cyan">
          Get in touch
        </p>
        <h2 className="mb-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mb-9 text-muted">Let&apos;s discuss what you&apos;re building.</p>

        <a href={`mailto:${EMAIL}`} className={buttonClasses("primary", "mx-auto")}>
          Start a Conversation
        </a>

        <div className="mt-8 font-mono text-xs text-faint">
          {EMAIL} · {PHONE}
        </div>

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
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
