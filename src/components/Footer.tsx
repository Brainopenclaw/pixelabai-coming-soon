"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-16 px-6" style={{ background: "#111827", borderTop: "1px solid rgba(0,229,255,0.2)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <span className="text-2xl font-bold text-gradient-cyan">
              Pixelab AI
            </span>
            <p className="text-sm text-text-muted mt-3 leading-relaxed">
              Construye con IA. En español.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4 uppercase tracking-wider">
              Navegación
            </h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link
                href="/blog"
                className="text-text-muted hover:text-[#00E5FF] transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/recursos"
                className="text-text-muted hover:text-[#00E5FF] transition-colors"
              >
                Recursos
              </Link>
              <Link
                href="/curso"
                className="text-text-muted hover:text-[#00E5FF] transition-colors"
              >
                Curso
              </Link>
              <Link
                href="/sobre-mi"
                className="text-text-muted hover:text-[#00E5FF] transition-colors"
              >
                Sobre mí
              </Link>
            </nav>
          </div>

          {/* Column 3: Social & Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4 uppercase tracking-wider">
              Síguenos
            </h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/jorgeailab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-all flex items-center justify-center text-text-muted"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@jorgeailab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-all flex items-center justify-center text-text-muted"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@jorgeailab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-all flex items-center justify-center text-text-muted"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <Link
              href="/privacidad"
              className="text-sm text-text-muted hover:text-[#00E5FF] transition-colors"
            >
              Privacidad
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-text-muted">
            © 2025 Pixelab AI · Hecho con 🧠
          </p>
        </div>
      </div>
    </footer>
  );
}
