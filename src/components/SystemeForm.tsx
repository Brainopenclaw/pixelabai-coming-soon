"use client";

export default function SystemeForm() {
  return (
    <section id="form" className="w-full max-w-xl mx-auto my-12 p-6 rounded-2xl bg-white/5 border border-white/10">
      <h2 className="text-2xl font-bold text-primary mb-2 text-center">Descarga tu guía gratuita de IA</h2>
      <p className="text-text-muted text-center mb-6">Recibe recursos prácticos para aplicar inteligencia artificial en tu negocio desde hoy.</p>
      <form action="https://systeme.io/embedded/156986/subscription" method="POST" className="flex flex-col gap-4">
        <input type="text" name="first_name" placeholder="Tu nombre" required className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary" />
        <input type="email" name="email" placeholder="Tu email" required className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary" />
        <input type="hidden" name="tag" value="blog-subscriber" />
        <button type="submit" className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity">Quiero mi guía gratis →</button>
      </form>
      <p className="text-xs text-text-muted text-center mt-3">Sin spam. Puedes darte de baja en cualquier momento.</p>
    </section>
  );
}
