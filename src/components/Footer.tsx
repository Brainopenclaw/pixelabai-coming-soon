import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl font-bold text-gradient-orange">
            Pixelab AI
          </span>
          <p className="text-sm text-text-muted mt-1">
            Aprende IA. Aplícala. Crece.
          </p>
        </div>
        <nav className="flex gap-6 text-sm text-text-muted">
          <Link href="/blog" className="hover:text-text transition-colors">
            Blog
          </Link>
          <Link href="/recursos" className="hover:text-text transition-colors">
            Recursos
          </Link>
          <Link href="/curso" className="hover:text-text transition-colors">
            Curso
          </Link>
          <Link href="/sobre-mi" className="hover:text-text transition-colors">
            Sobre
          </Link>
        </nav>
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} Pixelab AI. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
