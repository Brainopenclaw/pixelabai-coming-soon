"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cards = [
  {
    emoji: "🎓",
    title: "Aprende",
    desc: "Contenido práctico sobre IA que puedes aplicar desde el primer día.",
  },
  {
    emoji: "🛠️",
    title: "Aplica",
    desc: "Herramientas y plantillas listas para usar en tu negocio.",
  },
  {
    emoji: "🚀",
    title: "Crece",
    desc: "Automatiza procesos y escala tu negocio con inteligencia artificial.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-colors"
          >
            <span className="text-4xl mb-4 block">{card.emoji}</span>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-text-muted">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
