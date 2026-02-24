"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Guía gratis",
  "Sin spam",
  "Cancela cuando quieras",
];

export default function CTASection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-32 bg-gradient-to-b from-primary/20 to-transparent blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Empieza a usar la IA en tu negocio hoy
          </h2>
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto">
            Descarga la guía gratis y da el primer paso
          </p>

          {/* Email form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-xl mx-auto mb-8"
          >
            <form
              action="/api/subscribe"
              method="POST"
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-surface border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder:text-text-muted transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-glow-orange transition-all whitespace-nowrap"
              >
                Descargar Gratis →
              </button>
            </form>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted"
          >
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
