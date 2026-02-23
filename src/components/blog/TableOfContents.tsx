"use client";
import { useState, useEffect } from "react";

export default function TableOfContents({ headings }: { headings: { id: string; text: string; level: number }[] }) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); }, { rootMargin: "-80px 0px -80% 0px" });
    headings.forEach((h) => { const el = document.getElementById(h.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [headings]);
  if (!headings.length) return null;
  return (
    <nav className="hidden lg:block sticky top-24" aria-label="Tabla de contenidos">
      <h4 className="text-sm font-semibold text-text-muted mb-3 uppercase tracking-wider">Contenido</h4>
      <ul className="space-y-1 text-sm border-l border-white/10">
        {headings.map((h) => (
          <li key={h.id}><a href={`#${h.id}`} className={`block py-1 transition-colors ${h.level === 3 ? "pl-6" : "pl-3"} ${active === h.id ? "text-primary border-l-2 border-primary -ml-px" : "text-text-muted hover:text-text"}`}>{h.text}</a></li>
        ))}
      </ul>
    </nav>
  );
}
