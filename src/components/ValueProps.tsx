"use client";

import { motion } from "framer-motion";
import { GraduationCap, Wrench, Rocket } from "lucide-react";

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
    icon: GraduationCap,
    title: "Aprende",
    desc: "Contenido práctico sobre IA que puedes aplicar desde el primer día.",
  },
  {
    icon: Wrench,
    title: "Aplica",
    desc: "Herramientas y plantillas listas para usar en tu negocio.",
  },
  {
    icon: Rocket,
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
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="group relative p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-primary to-secondary p-[2px]">
                  <div className="w-full h-full rounded-xl bg-surface flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-text-muted leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
