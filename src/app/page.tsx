import SystemeForm from "@/components/SystemeForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 text-center">
      <div>
        <h1 className="text-heading text-gradient-orange">Pixelab AI — Coming Soon</h1>
        <p className="text-text-muted mt-4 max-w-xl">
          Aprende a usar la inteligencia artificial con guías claras y prácticas para impulsar tu negocio desde el primer día.
        </p>
      </div>
      <SystemeForm />
    </main>
  );
}
