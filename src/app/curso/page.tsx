"use client";

import Link from "next/link";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, CheckCircle2, AlertCircle, Zap } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const painPoints = [
  { icon: Clock, title: "Pierdes horas en tareas que la IA hace en minutos", description: "Crear contenido, responder emails, organizar datos... todo manual, todo lento." },
  { icon: AlertCircle, title: "No sabes por dónde empezar con la IA", description: "Hay demasiadas herramientas y tutoriales, pero ninguno pensado para tu negocio." },
  { icon: Zap, title: "Tu competencia ya está usando IA", description: "Mientras tú dudas, otros están automatizando y creciendo más rápido." },
  { icon: AlertCircle, title: "Intentaste pero no viste resultados", description: "Probaste ChatGPT un par de veces pero no supiste cómo aplicarlo a tu día a día." },
];

const weeks = [
  { week: "Semana 1", title: "Fundamentos de IA para Negocios", topics: ["Qué es la IA y cómo funciona (sin tecnicismos)", "Las 5 herramientas esenciales que necesitas", "Tu primer flujo de trabajo automatizado"] },
  { week: "Semana 2", title: "Contenido y Marketing con IA", topics: ["Crear contenido para redes sociales en minutos", "Email marketing automatizado con IA", "Copywriting de ventas potenciado con prompts"] },
  { week: "Semana 3", title: "Automatización y Productividad", topics: ["Automatizar tareas repetitivas de tu negocio", "Sistemas de atención al cliente con IA", "Gestión de proyectos inteligente"] },
  { week: "Semana 4", title: "Estrategia y Escalamiento", topics: ["Análisis de datos y toma de decisiones con IA", "Escalar tu negocio sin escalar tu equipo", "Tu plan de acción personalizado con IA"] },
];

const faqs = [
  { q: "¿Necesito conocimientos técnicos para tomar el curso?", a: "No. El curso está diseñado para emprendedores y dueños de negocio sin experiencia técnica. Todo se explica paso a paso con ejemplos prácticos." },
  { q: "¿Cuánto tiempo necesito dedicar por semana?", a: "Aproximadamente 2-3 horas semanales. Cada módulo incluye videos cortos, ejercicios prácticos y plantillas listas para usar." },
  { q: "¿Las herramientas que se enseñan son gratuitas?", a: "La mayoría de herramientas tienen planes gratuitos suficientes para empezar. Indicamos alternativas gratuitas para cada herramienta de pago mencionada." },
  { q: "¿Cuándo estará disponible el curso?", a: "Estamos preparando el lanzamiento. Al unirte a la lista de espera, serás de los primeros en acceder con un precio especial de lanzamiento." },
  { q: "¿Hay garantía de devolución?", a: "Sí. Ofreceremos una garantía de 30 días. Si no estás satisfecho, te devolvemos el 100% de tu inversión sin preguntas." },
];

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "IA para Tu Negocio",
  description: "Programa de 4 semanas para aprender a usar la IA en tu negocio",
  provider: {
    "@type": "Organization",
    name: "Pixelab AI"
  },
  educationalLevel: "Beginner",
  inLanguage: "es",
  numberOfCredits: "4 semanas"
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a
    }
  }))
};

const breadcrumbItems = [
  { name: "Home", url: "https://pixelabai.com" },
  { name: "Curso", url: "https://pixelabai.com/curso" }
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors" aria-expanded={open}>
        <span className="font-medium text-base pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-5 pb-5 text-gray-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CursoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <JsonLd data={courseSchema} />
      <JsonLd data={faqPageSchema} />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="inline-block mb-6">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full border border-blue-500/30">🚀 Próximamente</span>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            IA para <span className="text-gradient-blue">Tu Negocio</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto">
            El curso práctico que te enseña a usar inteligencia artificial para ahorrar tiempo, crear contenido y hacer crecer tu negocio — sin necesidad de ser técnico.
          </motion.p>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.3 }} className="text-sm text-gray-500">
            4 semanas · 100% online · Ejercicios prácticos · Comunidad privada
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-center mb-14">
            ¿Te suena familiar? 🤔
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <motion.div key={point.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{point.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📚 Lo que aprenderás</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Un programa de 4 semanas diseñado para que implementes IA en tu negocio paso a paso.</p>
          </motion.div>
          <div className="space-y-6">
            {weeks.map((w, i) => (
              <motion.div key={w.week} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">{w.week}</span>
                  <h3 className="text-lg font-semibold">{w.title}</h3>
                </div>
                <ul className="space-y-2">
                  {w.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />{topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Únete a la lista de espera 🎯</h2>
          <p className="text-gray-400 mb-8">Sé de los primeros en acceder al curso con un precio especial de lanzamiento. Sin compromiso.</p>
          <Link href="/#email-capture" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Únete a la lista de espera →
          </Link>
          <p className="text-xs text-gray-500 mt-4">Solo te enviaremos información sobre el curso. Cero spam.</p>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-center mb-14">
            Preguntas Frecuentes
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq) => (<FAQItem key={faq.q} q={faq.q} a={faq.a} />))}
          </div>
        </div>
      </section>
    </main>
  );
}
