"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GUIDE_PDF_URL = "https://d1yei2z3i6k35z.cloudfront.net/16522596/6998e7aec38e8_GuiadeinstalaciondelAsistenteIA.pdf";

export default function EmailCapture() {
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
    <section id="email-capture" className="py-24 px-6 bg-gradient-to-b from-background to-background-secondary">
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
          Descarga mi guía gratis y configura tu <strong className="text-text">asistente de IA</strong> en menos de 1 hora
        </p>

        <AnimatePresence mode="wait">
          {state === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center justify-center gap-4 py-8"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xl font-semibold text-green-400">
                ¡Tu guía está en camino! 📬
              </p>
              <p className="text-sm text-text-muted mb-2">
                También te la enviamos a tu email. Revisa tu bandeja de entrada.
              </p>
              <a
                href={GUIDE_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#ff6b35] to-[#ffa500] text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar Guía PDF
              </a>
              <p className="text-xs text-text-muted mt-2">
                ¿No quieres esperar? Descárgala ahora mismo 👆
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 max-w-lg mx-auto w-full"
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
                className="w-full h-14 px-5 text-base rounded-xl bg-white/5 border border-white/10 text-text placeholder:text-text-muted focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/50 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={state === "loading"}
                className="w-full h-14 px-6 rounded-xl bg-gradient-to-r from-[#ff6b35] to-[#ffa500] text-white font-semibold text-base hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
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
                  "Obtén Tu Guía Gratis"
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {state === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-4"
          >
            {errorMsg}
          </motion.p>
        )}

        {state !== "success" && (
          <p className="text-xs text-text-muted mt-6">
            Sin spam. Solo contenido que te hace crecer.
          </p>
        )}
      </motion.div>
    </section>
  );
}
