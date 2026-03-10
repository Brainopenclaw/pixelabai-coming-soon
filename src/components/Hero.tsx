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
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(0,229,255,0.1)" }}
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "rgba(0,229,255,0.07)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full backdrop-blur-sm"
          style={{ border: "1px solid rgba(0,229,255,0.2)", background: "rgba(0,229,255,0.08)" }}
        >
          <span className="text-xl">🚀</span>
          <span className="text-sm font-medium" style={{ color: "#00E5FF" }}>
            La guía #1 de IA en español
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Construye el negocio de 1 persona{" "}
          <span className="text-gradient-cyan">más eficiente con IA</span>
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
            href="https://bio.pixelabai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-xl font-black text-lg transition-all overflow-hidden"
            style={{
              background: "#00E5FF",
              color: "#0a0f1e",
              boxShadow: "0 0 28px rgba(0,229,255,0.35)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 44px rgba(0,229,255,0.55)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(0,229,255,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            <span className="relative z-10">Descarga tus 5 prompts gratis →</span>
          </a>
          <a
            href="https://bio.pixelabai.com/order-form"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            style={{ border: "1px solid rgba(0,229,255,0.2)", color: "#00E5FF" }}
          >
            Ver la guía AIOS $17 →
          </a>
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
