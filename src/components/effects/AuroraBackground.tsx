"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface AuroraBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function AuroraBackground({ children, className = "" }: AuroraBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -inset-[100px] opacity-30"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,107,53,0.15), rgba(59,130,246,0.1), rgba(247,201,72,0.1), rgba(139,92,246,0.08))",
            filter: "blur(80px)",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
