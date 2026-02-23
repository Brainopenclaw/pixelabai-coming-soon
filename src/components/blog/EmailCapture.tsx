export default function EmailCapture({ title = "¿Quieres más contenido como este?", description = "Suscríbete y recibe guías prácticas de IA directo en tu email.", formId }: { title?: string; description?: string; formId?: string }) {
  return (
    <div className="my-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-text-muted text-sm mb-4">{description}</p>
      <form action={formId ? `https://systeme.io/embedded/${formId}` : "#"} method="POST" className="flex flex-col sm:flex-row gap-3">
        <input type="email" name="email" placeholder="tu@email.com" required className="flex-1 px-4 py-3 rounded-lg bg-surface border border-white/10 text-text placeholder:text-text-muted focus:outline-none focus:border-primary" />
        <button type="submit" className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">Suscribirme</button>
      </form>
    </div>
  );
}
