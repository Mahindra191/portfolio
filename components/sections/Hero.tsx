"use client";

import { motion } from "framer-motion";
import { SparkBadge } from "@/components/ui/spark-badge";
import { buttonClasses } from "@/components/ui/button";
import { RevealText } from "@/components/ui/text-reveal";
import { useReady } from "@/components/site-loader";

const stack = ["Python", "Java", "React", "FastAPI", "Spring Boot", "RAG", "AI Agents"];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  const ready = useReady();

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:px-10 md:py-28">
        <div>
          <motion.p
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            variants={fadeUp}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-signal-cyan"
          >
            <span className="h-px w-8 bg-signal-cyan" />
            AI &amp; Full-Stack Developer
          </motion.p>

          <RevealText
            as="h1"
            trigger="ready"
            delay={0.15}
            stagger={0.045}
            className="block font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            text="I build AI-powered software that solves real problems."
          />

          <RevealText
            as="p"
            trigger="ready"
            delay={0.55}
            stagger={0.012}
            className="mt-6 block max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            text="I specialize in RAG, AI agents, Python, Java, React and scalable backend systems — from architecture and APIs to frontend and deployment."
          />

          <motion.div
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 1.0 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#work" className={buttonClasses("primary")}>
              View My Work
            </a>
            <a href="#contact" className={buttonClasses("secondary")}>
              Hire Me
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={ready ? "show" : "hidden"}
            variants={fadeUp}
            transition={{ delay: 1.15 }}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-faint"
          >
            {stack.map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                {s}
                {i < stack.length - 1 && <span className="text-border">·</span>}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={ready ? "show" : "hidden"}
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="mx-auto w-full max-w-[260px] md:mx-0 md:ml-auto"
        >
          <div style={{ width: "100%", aspectRatio: "1 / 1" }}>
            <SparkBadge />
          </div>
          <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-faint md:text-right">
            live system signal
          </p>
        </motion.div>
      </div>
    </section>
  );
}
