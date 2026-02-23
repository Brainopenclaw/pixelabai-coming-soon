"use client";

import { motion } from "framer-motion";

export default function EmailCapture() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Listo para empezar?
        </h2>
        <p className="text-text-muted mb-8">
          Recibe contenido práctico sobre IA directamente en tu bandeja.
        </p>
        <form
          action="https://systeme.io/embedded/156986/subscription"
          method="POST"
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <input
            type="text"
            name="first_name"
            placeholder="Tu nombre"
            required
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            required
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input type="hidden" name="tag" value="homepage-capture" />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Quiero recibir contenido →
          </button>
        </form>
        <p className="text-xs text-text-muted mt-4">
          Sin spam. Solo contenido que te hace crecer.
        </p>
      </motion.div>
    </section>
  );
}
