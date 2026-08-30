"use client";

import { motion, type Variants } from "framer-motion";
import { useReady } from "@/components/site-loader";
import { cn } from "@/lib/utils";

/**
 * Word-by-word text reveal.
 *
 * `trigger="ready"` — waits for the site boot sequence (SiteLoader) to
 * finish, then plays once. Use for the hero, right after the loader exits.
 *
 * `trigger="inView"` — plays once the element scrolls into view. Use for
 * section headings and body copy further down the page.
 */

export type RevealTextProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  stagger?: number;
  delay?: number;
  trigger?: "ready" | "inView";
};

export function RevealText({
  text,
  as: Tag = "span",
  className,
  stagger = 0.05,
  delay = 0,
  trigger = "inView",
}: RevealTextProps) {
  const ready = useReady();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: "0.4em", filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const triggerProps =
    trigger === "ready"
      ? { animate: ready ? "show" : "hidden" }
      : { whileInView: "show", viewport: { once: true, amount: 0.6 } };

  return (
    <Tag className={cn(className)}>
      <motion.span
        initial="hidden"
        variants={container}
        {...triggerProps}
        style={{ display: "inline" }}
      >
        {words.map((w, i) => (
          <motion.span
            key={i}
            variants={word}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
