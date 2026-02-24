import Link from "next/link";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/recursos", label: "Recursos" },
  { href: "/curso", label: "Curso" },
  { href: "/sobre-mi", label: "Sobre" },
];

const socialLinks = [
  { href: "https://twitter.com/pixelabai", label: "Twitter", icon: "𝕏" },
  { href: "https://youtube.com/@pixelabai", label: "YouTube", icon: "▶" },
  { href: "https://www.instagram.com/jorgeailab", label: "Instagram", icon: "📷" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-container-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="text-xl font-bold text-gradient-orange">Pixelab AI</span>
            <p className="text-small text-text-muted mt-2 max-w-xs">
              Aprende IA. Aplícala. Crece.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-small text-text-muted hover:text-text transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-text hover:border-white/20 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Pixelab AI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
