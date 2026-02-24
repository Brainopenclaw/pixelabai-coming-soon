"use client";

import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <span className="text-2xl font-bold text-gradient-orange">
              Pixelab AI
            </span>
            <p className="text-sm text-text-muted mt-3 leading-relaxed">
              Aprende IA. Aplícala. Crece.
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
                className="text-text-muted hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/recursos"
                className="text-text-muted hover:text-primary transition-colors"
              >
                Recursos
              </Link>
              <Link
                href="/curso"
                className="text-text-muted hover:text-primary transition-colors"
              >
                Curso
              </Link>
              <Link
                href="/sobre-mi"
                className="text-text-muted hover:text-primary transition-colors"
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
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-text-muted" />
              </a>
              <a
                href="https://youtube.com/@pixelabai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-text-muted" />
              </a>
              <a
                href="https://www.tiktok.com/@jorgeailab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all flex items-center justify-center text-text-muted text-lg font-bold"
                aria-label="TikTok"
              >
                📱
              </a>
            </div>
            <Link
              href="/privacidad"
              className="text-sm text-text-muted hover:text-primary transition-colors"
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
