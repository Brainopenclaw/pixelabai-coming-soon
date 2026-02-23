import SystemeForm from "@/components/SystemeForm";

export default function RecursosPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Recursos</h1>
        <p className="text-text-muted mb-8">Recursos de IA para impulsar tu negocio. Suscríbete para recibirlos.</p>
        <SystemeForm />
      </div>
    </main>
  );
}
