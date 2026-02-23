"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group relative rounded-card p-[1px] overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 rounded-card bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="absolute inset-0 rounded-card bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
      <div className="relative rounded-card bg-surface p-6 h-full">
        {children}
      </div>
    </motion.div>
  );
}
