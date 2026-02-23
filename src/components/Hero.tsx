"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedGrid, { GradientOrbs } from "./AnimatedGrid";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <AnimatedGrid />
      <GradientOrbs />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Aprende a usar la IA para{" "}
          <span className="text-gradient-orange">transformar tu negocio</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto"
        >
          Sin jerga técnica. Sin complicaciones. Solo resultados.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://systeme.io/embedded/156986/subscription"
            className="px-8 py-4 rounded-lg bg-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Descarga la Guía Gratis →
          </a>
          <Link
            href="/blog"
            className="px-8 py-4 rounded-lg border border-white/20 text-text font-semibold text-lg hover:bg-white/5 transition-colors"
          >
            Ver el blog →
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 text-sm text-text-muted"
        >
          Únete a 500+ emprendedores que ya usan IA
        </motion.p>
      </div>
    </section>
  );
}
