"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 blur-3xl"
        style={{ background: "rgba(0,229,255,0.15)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Empieza gratis. Consigue la guía completa por $17.
          </h2>
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Todo lo que necesitas para convertir ChatGPT en el sistema operativo de tu negocio.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://bio.pixelabai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-black text-lg transition-all"
              style={{
                background: "#00E5FF",
                color: "#0a0f1e",
                boxShadow: "0 0 28px rgba(0,229,255,0.35)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 44px rgba(0,229,255,0.55)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(0,229,255,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Empieza gratis — Primer módulo →
            </a>
            <a
              href="https://bio.pixelabai.com/order-form"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-black text-lg transition-all"
              style={{
                border: "1px solid rgba(0,229,255,0.2)",
                color: "#00E5FF",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,255,0.5)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,229,255,0.2)"; }}
            >
              Ver la guía completa $17 →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
