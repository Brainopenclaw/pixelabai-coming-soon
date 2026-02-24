"use client";

import { useState } from "react";

const GUIDE_PDF_URL = "https://d1yei2z3i6k35z.cloudfront.net/16522596/6998e7aec38e8_GuiadeinstalaciondelAsistenteIA.pdf";

export default function EmailCapture({ 
  title = "¿Quieres más contenido como este?", 
  description = "Suscríbete y recibe guías prácticas de IA directo en tu email." 
}: { 
  title?: string; 
  description?: string; 
}) {
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
    <div className="my-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-text-muted text-sm mb-4">{description}</p>
      
      {state === "success" ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-green-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold">¡Tu guía está en camino! 📬</span>
          </div>
          <a
            href={GUIDE_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors w-fit"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar Guía PDF
          </a>
          <p className="text-xs text-text-muted">También te la enviamos a tu email.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (state === "error") setState("idle");
            }}
            placeholder="tu@email.com" 
            required 
            disabled={state === "loading"}
            className="flex-1 px-4 py-3 rounded-lg bg-surface border border-white/10 text-text placeholder:text-text-muted focus:outline-none focus:border-primary disabled:opacity-50" 
          />
          <button 
            type="submit"
            disabled={state === "loading"}
            className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {state === "loading" ? (
              <>
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Enviando...
              </>
            ) : (
              "Obtén Tu Guía Gratis"
            )}
          </button>
        </form>
      )}
      
      {state === "error" && (
        <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
      )}
    </div>
  );
}
