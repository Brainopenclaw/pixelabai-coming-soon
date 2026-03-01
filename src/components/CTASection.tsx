"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const GUIDE_PDF_URL = "https://d1yei2z3i6k35z.cloudfront.net/16522596/6998e7aec38e8_GuiadeinstalaciondelAsistenteIA.pdf";

const benefits = [
  "Guía gratis",
  "Sin spam",
  "Cancela cuando quieras",
];

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Ingresa un email válido");
      setState("error");
      return;
    }
    setState("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setState("success");
      } else {
        setErrorMsg(data.error || "Algo salió mal");
        setState("error");
      }
    } catch {
      setErrorMsg("Error de conexión");
      setState("error");
    }
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-xl mx-auto mb-8"
          >
            <AnimatePresence mode="wait">
              {state === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold text-green-400">¡Tu guía está lista! 🎉</p>
                  <a
                    href={GUIDE_PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Descargar Guía PDF
                  </a>
                  <p className="text-sm text-text-muted">También te la enviamos a tu email 📬</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 w-full"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (state === "error") setState("idle");
                    }}
                    placeholder="tu@email.com"
                    disabled={state === "loading"}
                    className="w-full h-14 px-5 text-base rounded-xl bg-surface border border-white/10 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-text placeholder:text-text-muted transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full h-14 px-8 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-glow-orange transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {state === "loading" ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Obtén Tu Guía Gratis →"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {state === "error" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm mt-3">
                {errorMsg}
              </motion.p>
            )}
          </motion.div>

          {state !== "success" && (
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
          )}
        </motion.div>
      </div>
    </section>
  );
}
