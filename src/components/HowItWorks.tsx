"use client";

import { motion } from "framer-motion";
import { Download, BookOpen, Rocket } from "lucide-react";

const steps = [
  {
    icon: Download,
    number: 1,
    title: "Empieza gratis",
    desc: "Descarga el primer módulo de la guía de ChatGPT y empieza hoy.",
  },
  {
    icon: BookOpen,
    number: 2,
    title: "Configura tu sistema",
    desc: "Sigue los 7 módulos y construye un ChatGPT que habla como tú.",
  },
  {
    icon: Rocket,
    number: 3,
    title: "Transforma tu negocio",
    desc: "Automatiza tareas y escala siendo un negocio de 1 persona con IA.",
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
          <div className="absolute left-[16.66%] right-[16.66%] top-0 border-t-2 border-dashed border-[rgba(0,229,255,0.2)]" />
        </div>

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative flex flex-col items-center text-center"
            >
              {/* Numbered circle */}
              <div className="relative mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-[#00E5FF]"
                  style={{ background: "rgba(0,229,255,0.1)", border: "2px solid rgba(0,229,255,0.3)" }}
                >
                  {step.number}
                </div>
                <div
                  className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "#111827", border: "2px solid rgba(0,229,255,0.3)" }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#00E5FF" }} strokeWidth={2} />
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
