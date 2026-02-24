"use client";

import { motion } from "framer-motion";
import { Download, BookOpen, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    number: 1,
    title: "Descarga la guía gratis",
    desc: "Recibe nuestra guía con los fundamentos de IA para negocios",
  },
  {
    icon: BookOpen,
    number: 2,
    title: "Aprende a tu ritmo",
    desc: "Sigue nuestros tutoriales paso a paso y aplica lo aprendido",
  },
  {
    icon: Rocket,
    number: 3,
    title: "Transforma tu negocio",
    desc: "Automatiza tareas y escala con inteligencia artificial",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Cómo funciona
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Tres pasos simples para empezar a usar IA en tu negocio
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative grid md:grid-cols-3 gap-12 md:gap-8"
      >
        {/* Connecting dotted lines (desktop only) */}
        <div className="hidden md:block absolute top-20 left-1/2 w-full -translate-x-1/2 h-0.5 pointer-events-none">
          <div className="absolute left-[16.66%] right-[16.66%] top-0 border-t-2 border-dashed border-white/20" />
        </div>

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative flex flex-col items-center text-center"
            >
              {/* Numbered circle with gradient */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white shadow-glow-orange">
                  {step.number}
                </div>
                <div className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-surface border-2 border-primary/30 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-text-muted leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
