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
      className={`group relative overflow-hidden p-6 ${className}`}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(0,229,255,0.2)",
        borderTop: "3px solid #00E5FF",
        borderRadius: "16px",
        boxShadow: "0 0 40px rgba(0,229,255,0.07)",
      }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
