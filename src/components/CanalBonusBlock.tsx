export function CanalBonusBlock() {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <div
        className="rounded-2xl border border-cyan-400/20 bg-[#1F2937] p-8"
        style={{ boxShadow: "0 0 40px rgba(0,229,255,0.06)" }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20">
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            BONUS EXCLUSIVO
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-white text-2xl font-bold mb-3">
          Acceso al Canal Privado de WhatsApp
        </h3>

        {/* Copy */}
        <p className="text-[#9CA3AF] text-base leading-relaxed mb-6">
          Solo compradores de la guía obtienen acceso al canal privado de WhatsApp donde comparto{" "}
          <strong className="text-white">
            lo que estoy automatizando esta semana con agentes IA
          </strong>{" "}
          — antes de que llegue a las redes sociales.
        </p>

        {/* Feature list */}
        <ul className="space-y-3">
          {[
            "Automatizaciones reales antes de publicarlas en TikTok",
            "Configuraciones de agentes IA que uso en mi negocio",
            "Acceso directo — respuestas a preguntas del canal",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[#9CA3AF]">
              <span className="mt-0.5 text-cyan-400 flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Disclaimer */}
        <p className="mt-6 text-xs text-[#6B7280]">
          Acceso incluido con tu compra. Instrucciones en la página de confirmación.
        </p>
      </div>
    </section>
  );
}
