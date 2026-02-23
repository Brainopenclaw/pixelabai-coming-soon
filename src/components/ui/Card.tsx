"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref" | "children"> {
  children: ReactNode;
  glow?: boolean;
}

export default function Card({ children, glow = true, className = "", ...props }: CardProps) {
  return (
    <motion.div
      whileHover={glow ? { scale: 1.02 } : undefined}
      className={`group relative rounded-card bg-surface border border-white/5 p-6 overflow-hidden ${className}`}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
