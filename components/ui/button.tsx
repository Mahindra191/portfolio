import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-mono tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 px-5 py-3";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-signal-amber text-bg hover:bg-signal-amber/90",
  secondary:
    "border border-border text-ink hover:border-signal-cyan hover:text-signal-cyan bg-transparent",
  ghost: "text-muted hover:text-ink",
};

export function buttonClasses(variant: ButtonVariant = "primary", className = "") {
  return cn(base, variants[variant], className);
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button ref={ref} className={buttonClasses(variant, className)} {...props} />
    );
  },
);
Button.displayName = "Button";
