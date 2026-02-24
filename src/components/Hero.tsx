"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedGrid, { GradientOrbs } from "./AnimatedGrid";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <AnimatedGrid />
      <GradientOrbs />
      
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
        >
          <span className="text-xl">🚀</span>
          <span className="text-sm font-medium text-text">
            La guía #1 de IA en español
          </span>
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
        </motion.div>

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
            href="#email-capture"
            className="group relative px-8 py-4 rounded-lg bg-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative z-10">Descarga la Guía Gratis →</span>
          </a>
          <Link
            href="/blog"
            className="px-8 py-4 rounded-lg border border-white/20 text-text font-semibold text-lg hover:bg-white/5 hover:border-primary/40 transition-all"
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
