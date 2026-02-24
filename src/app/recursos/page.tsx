"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ExternalLink, Sparkles, BookOpen, Wrench } from "lucide-react";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const tools = [
  { name: "ChatGPT", description: "Asistente de IA conversacional para generar contenido, ideas y resolver problemas de negocio.", badge: "Gratis / Pro", link: "https://chat.openai.com" },
  { name: "Canva AI", description: "Diseño gráfico con IA integrada para crear imágenes, presentaciones y contenido visual profesional.", badge: "Gratis / Pro", link: "https://www.canva.com" },
  { name: "Notion AI", description: "Gestión de proyectos y documentación potenciada con IA para organizar tu negocio.", badge: "Gratis / Pro", link: "https://www.notion.so" },
  { name: "Midjourney", description: "Generación de imágenes con IA para crear visuales únicos para tu marca y marketing.", badge: "Pago", link: "https://www.midjourney.com" },
  { name: "Copy.ai", description: "Redacción de textos de marketing, emails y copy de ventas automatizado con IA.", badge: "Gratis / Pro", link: "https://www.copy.ai" },
  { name: "Zapier AI", description: "Automatización de flujos de trabajo entre aplicaciones con inteligencia artificial.", badge: "Gratis / Pro", link: "https://zapier.com" },
  { name: "ElevenLabs", description: "Generación de voz con IA para podcasts, videos y contenido de audio profesional.", badge: "Gratis / Pro", link: "https://elevenlabs.io" },
  { name: "Descript", description: "Edición de video y audio con IA: transcripción, eliminación de silencios y más.", badge: "Gratis / Pro", link: "https://www.descript.com" },
];

const templates = [
  { title: "10 Prompts para Crear Contenido de Redes Sociales", description: "Plantilla con prompts optimizados para generar posts para Instagram, LinkedIn y Twitter con IA.", icon: Sparkles },
  { title: "Guía de Automatización para Emprendedores", description: "Paso a paso para automatizar tareas repetitivas de tu negocio usando herramientas de IA.", icon: Wrench },
  { title: "Plantilla de Plan de Contenidos con IA", description: "Calendario editorial mensual con prompts para generar cada pieza de contenido.", icon: BookOpen },
  { title: "Kit de Prompts para Email Marketing", description: "Colección de prompts para escribir secuencias de email que convierten.", icon: Sparkles },
];

const breadcrumbItems = [
  { name: "Home", url: "https://pixelabai.com" },
  { name: "Recursos", url: "https://pixelabai.com/recursos" }
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function RecursosPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Recursos <span className="text-gradient-orange">Gratuitos</span> de IA
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Herramientas, plantillas y guías para que empieces a usar la inteligencia artificial en tu negocio hoy mismo.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7, delay: 0.3 }} className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-lg mx-auto">
            <h3 className="text-xl font-semibold mb-2">📥 Descarga la Guía Gratis</h3>
            <p className="text-gray-400 text-sm mb-4">&quot;5 Formas de Usar IA en Tu Negocio Esta Semana&quot; — recibe la guía directo en tu email.</p>
            <a 
              href="/#email-capture" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Descargar Guía Gratis →
            </a>
          </motion.div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🛠️ Herramientas Recomendadas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Las mejores herramientas de IA que uso y recomiendo para emprendedores y negocios.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, i) => (
              <motion.a key={tool.name} href={tool.link} target="_blank" rel="noopener noreferrer" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 hover:bg-white/[0.08] transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-orange-400 transition-colors">{tool.name}</h3>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-orange-400 transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{tool.description}</p>
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${tool.badge === "Pago" ? "bg-purple-500/20 text-purple-300" : "bg-green-500/20 text-green-300"}`}>{tool.badge}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📋 Plantillas y Prompts</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Recursos descargables para que saques el máximo provecho de la IA desde el primer día.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {templates.map((tpl, i) => (
              <motion.div key={tpl.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-4 items-start hover:border-orange-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0"><tpl.icon className="w-5 h-5 text-orange-400" /></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{tpl.title}</h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{tpl.description}</p>
                  <button className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors font-medium"><Download className="w-4 h-4" />Descargar gratis</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Quieres más recursos exclusivos?</h2>
          <p className="text-gray-400 mb-8">Únete a nuestra newsletter y recibe cada semana herramientas, prompts y estrategias de IA para tu negocio.</p>
          <Link href="/" className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold rounded-xl hover:opacity-90 transition-opacity">Suscríbete gratis</Link>
        </motion.div>
      </section>
    </main>
  );
}
