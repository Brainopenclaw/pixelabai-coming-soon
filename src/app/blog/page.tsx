import type { Metadata } from "next";
import BlogIndex from "@/components/blog/BlogIndex";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Pixelab AI",
  description: "Artículos prácticos sobre inteligencia artificial aplicada a negocios.",
  alternates: { canonical: "https://pixelabai.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">Blog</h1>
        <p className="text-text-muted mb-8">Guías prácticas para aplicar IA en tu negocio desde hoy.</p>
        <BlogIndex posts={posts} />
      </div>
    </main>
  );
}
