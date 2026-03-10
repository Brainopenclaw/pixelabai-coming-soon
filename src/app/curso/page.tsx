"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Zap, Clock, Target, Shield } from "lucide-react";
import Link from "next/link";

const ORDER_FORM_URL = "https://bio.pixelabai.com/order-form";

const features = [
  { icon: Zap, title: "Sistema completo de prompts", desc: "Más de 30 prompts listos para usar en tu negocio desde el día 1." },
  { icon: Target, title: "Flujos de trabajo con IA", desc: "Automatiza contenido, emails, atención al cliente y más." },
  { icon: Clock, title: "Ahorra 10+ horas por semana", desc: "Delega a ChatGPT las tareas repetitivas que te quitan tiempo." },
  { icon: Shield, title: "Garantía de 7 días", desc: "Si no te convence, te devolvemos el 100% sin preguntas." },
];

const includes = [
  "Guía completa en 7 módulos",
  "El ALMA de tu AI — identidad y tono",
  "Manual de Negocio para ChatGPT",
  "Sistema de Memoria Viva",
  "Tareas automáticas sin pedírselas",
  "Los 3 Departamentos de tu negocio",
  "Agent Mode — navega, ejecuta, conecta",
  "Acceso de por vida + actualizaciones",
];

const faqs = [
  { q: "¿Necesito ChatGPT Plus?", a: "Funciona con la versión gratuita. Con ChatGPT Plus los resultados son mejores — especialmente en Agent Mode. Si puedes invertir $20/mes, vale la pena." },
  { q: "¿Cuánto tiempo toma configurarlo?", a: "El Módulo 01 toma 15 minutos. En 2-3 horas tienes el sistema completo funcionando. Es una guía paso a paso, no un curso de 40 horas." },
  { q: "¿Necesito saber programar?", a: "No. Todo es copiar, pegar y personalizar. Sin código, sin integraciones complicadas. Solo ChatGPT y tu negocio." },
  { q: "¿Cómo recibo la guía?", a: "Acceso inmediato después del pago. Te enviamos el link de descarga por email y también estará disponible en tu página de confirmación." },
  { q: "¿Hay garantía?", a: "Sí. 7 días de garantía total. Si no sientes que esto transforma cómo trabajas con ChatGPT, te devolvemos el dinero. Sin preguntas." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid rgba(0,229,255,0.2)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-base pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} style={{ color: "#00E5FF" }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-text-muted leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CursoPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#111827" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
            style={{ background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)" }}
          >
            <span style={{ color: "#00E5FF" }} className="text-sm font-medium">🤖 Solo $17 — Acceso Inmediato</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black leading-tight mb-6"
          >
            Convierte ChatGPT en el{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00E5FF 0%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sistema Operativo
            </span>{" "}
            de tu Negocio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto"
          >
            La guía práctica para emprendedores que quieren automatizar su negocio con IA sin saber programar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-xl font-black text-xl transition-all"
              style={{ background: "#00E5FF", color: "#0a0f1e", boxShadow: "0 0 28px rgba(0,229,255,0.35)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 44px rgba(0,229,255,0.55)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(0,229,255,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Obtener AIOS por $17 →
            </a>
            <a
              href="https://bio.pixelabai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-all"
              style={{ color: "#9ca3af" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00E5FF"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#9ca3af"; }}
            >
              O descarga 5 prompts gratis primero →
            </a>
          </motion.div>

          <p className="mt-4 text-sm text-text-muted">✅ Garantía 30 días · Acceso inmediato · Pago seguro</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Qué incluye la guía?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(0,229,255,0.2)",
                  borderTop: "3px solid #00E5FF",
                  boxShadow: "0 0 40px rgba(0,229,255,0.07)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,229,255,0.1)" }}
                  >
                    <f.icon className="w-6 h-6" style={{ color: "#00E5FF" }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                    <p className="text-text-muted text-sm">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(0,229,255,0.2)",
              borderTop: "3px solid #00E5FF",
              boxShadow: "0 0 40px rgba(0,229,255,0.07)",
            }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Todo lo que obtienes por $17</h2>
            <ul className="space-y-4 mb-8">
              {includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,229,255,0.15)" }}>
                    <Check className="w-4 h-4" style={{ color: "#00E5FF" }} />
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={ORDER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-5 rounded-xl font-black text-xl transition-all"
              style={{ background: "#00E5FF", color: "#0a0f1e", boxShadow: "0 0 28px rgba(0,229,255,0.35)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 44px rgba(0,229,255,0.55)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(0,229,255,0.35)"; }}
            >
              Sí, quiero AIOS por $17 →
            </a>
            <p className="text-center text-xs text-text-muted mt-3">Garantía de devolución 30 días. Sin riesgo.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-text-muted mb-8">Acceso inmediato. Solo $17. Sin suscripciones.</p>
          <a
            href={ORDER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 rounded-xl font-black text-xl transition-all"
            style={{ background: "#00E5FF", color: "#0a0f1e", boxShadow: "0 0 28px rgba(0,229,255,0.35)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 44px rgba(0,229,255,0.55)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(0,229,255,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            Obtener AIOS por $17 →
          </a>
          <p className="mt-4 text-sm text-text-muted">
            ¿Quieres probar primero?{" "}
            <a
              href="https://bio.pixelabai.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00E5FF" }}
            >
              Descarga 5 prompts gratis →
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
