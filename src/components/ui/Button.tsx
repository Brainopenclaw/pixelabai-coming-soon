"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "cta";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[#00E5FF] text-[#0a0f1e] font-black shadow-glow-cyan hover:shadow-glow-cyan-lg",
  secondary:
    "bg-transparent text-text border border-[rgba(0,229,255,0.2)] hover:border-[rgba(0,229,255,0.4)]",
  ghost: "bg-transparent text-text-muted hover:text-text hover:bg-white/5",
  cta: "bg-[#00E5FF] text-[#0a0f1e] font-black shadow-glow-cyan hover:shadow-glow-cyan-lg",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-flex items-center justify-center rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
