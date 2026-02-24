import type { Metadata } from "next";
import BlogIndex from "@/components/blog/BlogIndex";
import { getAllPosts } from "@/lib/blog";
import AnimatedGrid, { GradientOrbs } from "@/components/effects/AnimatedGrid";

export const metadata: Metadata = {
  title: "Blog — Pixelab AI",
  description: "Artículos prácticos sobre inteligencia artificial aplicada a negocios.",
  alternates: { canonical: "https://pixelabai.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] pt-24 pb-16 px-6 overflow-hidden">
      <AnimatedGrid />
      <GradientOrbs />
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Blog</h1>
        <p className="text-text-muted text-lg mb-12">Guías prácticas para aplicar IA en tu negocio desde hoy.</p>
        <BlogIndex posts={posts} />
      </div>
    </main>
  );
}
