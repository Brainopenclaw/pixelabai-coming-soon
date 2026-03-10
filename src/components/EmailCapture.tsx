"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        body: JSON.stringify({ email, source: "homepage" }),
      });
      const data = await res.json();
      if (data.success) {
        setState("success");
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "form_submit", { event_category: "lead", event_label: "homepage_guide", source: "homepage" });
        }
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
    <section id="email-capture" className="py-24 px-6" style={{ background: "linear-gradient(to bottom, #111827, #111827)" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <div
          className="p-8 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(0,229,255,0.2)",
            borderTop: "3px solid #00E5FF",
            boxShadow: "0 0 40px rgba(0,229,255,0.07)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empieza gratis hoy
          </h2>
          <p className="text-text-muted mb-8">
            Recibe el primer módulo de la guía de ChatGPT. Sin costo. Solo resultados.
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
                <p className="text-xl font-semibold text-green-400">¡Tu guía está en camino! 📬</p>
                <p className="text-sm text-text-muted mb-2">Revisa tu bandeja de entrada.</p>
                <a
                  href="https://bio.pixelabai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-lg transition-all"
                  style={{ background: "#00E5FF", color: "#0a0f1e", boxShadow: "0 0 28px rgba(0,229,255,0.35)" }}
                >
                  Acceder a tu contenido →
                </a>
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
                  className="w-full h-14 px-5 text-base text-white placeholder:text-text-muted focus:outline-none transition-all disabled:opacity-50"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "10px",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,229,255,0.5)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(0,229,255,0.08)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full h-14 px-6 font-black text-base transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  style={{ background: "#00E5FF", color: "#0a0f1e", borderRadius: "12px", boxShadow: "0 0 28px rgba(0,229,255,0.35)" }}
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
                    "Acceder Gratis →"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {state === "error" && (
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-4">
              {errorMsg}
            </motion.p>
          )}

          {state !== "success" && (
            <p className="text-xs text-text-muted mt-6">Sin spam. Solo contenido que te hace crecer.</p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
