import Link from "next/link";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/recursos", label: "Recursos" },
  { href: "/curso", label: "Curso" },
  { href: "/sobre-mi", label: "Sobre" },
];

const socialLinks = [
  { href: "https://www.instagram.com/jorgeailab", label: "Instagram", icon: "📸" },
  { href: "https://www.tiktok.com/@jorgeailab", label: "TikTok", icon: "♪" },
  { href: "https://youtube.com/@jorgeailab", label: "YouTube", icon: "▶" },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6" style={{ borderTop: "1px solid rgba(0,229,255,0.2)", background: "#111827" }}>
      <div className="max-w-container-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="text-xl font-bold text-gradient-cyan">Pixelab AI</span>
            <p className="text-small text-text-muted mt-2 max-w-xs">
              Construye con IA. En español.
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

        <div className="pt-8 text-center" style={{ borderTop: "1px solid rgba(0,229,255,0.1)" }}>
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Pixelab AI. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
