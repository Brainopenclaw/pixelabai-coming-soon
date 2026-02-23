export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-text-muted mb-2">No encontramos la página que buscas.</p>
      <p className="text-sm text-text-muted/70">Si crees que esto es un error, vuelve a la página principal.</p>
    </div>
  );
}
