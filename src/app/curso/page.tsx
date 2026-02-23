import SystemeForm from "@/components/SystemeForm";

export default function CursoPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Curso</h1>
        <p className="text-text-muted mb-8">Curso práctico de IA aplicada para negocios. Suscríbete para ser el primero en enterarte.</p>
        <SystemeForm />
      </div>
    </main>
  );
}
