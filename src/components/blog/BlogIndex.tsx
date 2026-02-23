"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { BlogPostMeta, Category } from "@/lib/blog-constants";
import { CATEGORIES } from "@/lib/blog-constants";

const PER_PAGE = 6;

export default function BlogIndex({ posts }: { posts: BlogPostMeta[] }) {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState<Category>("Todos");
  const [shown, setShown] = useState(PER_PAGE);

  const filtered = useMemo(() => {
    let r = posts;
    if (cat !== "Todos") r = r.filter((p) => p.category === cat);
    if (search.trim()) { const q = search.toLowerCase(); r = r.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q))); }
    return r;
  }, [posts, search, cat]);

  return (
    <div>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
        <input type="text" placeholder="Buscar artículos..." value={search} onChange={(e) => { setSearch(e.target.value); setShown(PER_PAGE); }} className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface border border-white/10 text-text placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors" />
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((c) => (
          <button key={c} onClick={() => { setCat(c); setShown(PER_PAGE); }} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === c ? "bg-primary text-white" : "bg-white/5 text-text-muted hover:bg-white/10"}`}>{c}</button>
        ))}
      </div>
      {filtered.slice(0, shown).length === 0 ? (
        <p className="text-text-muted text-center py-12">No se encontraron artículos.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.slice(0, shown).map((post) => (
            <article key={post.slug} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors group">
              <Link href={`/blog/${post.slug}`} className="block">
                <img src={post.image} alt={post.imageAlt} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-2">
                    <time>{post.date}</time><span>·</span><span>{post.readTime}</span>
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-primary/10 text-primary">{post.category}</span>
                  </div>
                  <h2 className="text-lg font-bold text-text group-hover:text-primary transition-colors mb-2">{post.title}</h2>
                  <p className="text-sm text-text-muted line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
      {shown < filtered.length && (
        <div className="text-center mt-8">
          <button onClick={() => setShown((s) => s + PER_PAGE)} className="px-6 py-3 rounded-lg bg-white/5 text-text-muted hover:bg-white/10 hover:text-primary transition-colors font-medium">Cargar más</button>
        </div>
      )}
    </div>
  );
}
