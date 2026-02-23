import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { getAllPosts } from "@/lib/blog";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  buildBreadcrumbList,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog — Pixelab AI",
  description:
    "Artículos prácticos sobre inteligencia artificial aplicada a negocios. Guías, herramientas y estrategias en español.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog — Pixelab AI",
    description:
      "Artículos prácticos sobre inteligencia artificial aplicada a negocios.",
    url: `${SITE_URL}/blog`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pixelab AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Pixelab AI",
    description:
      "Artículos prácticos sobre inteligencia artificial aplicada a negocios.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <main className="min-h-screen p-8">
      <StructuredData data={[breadcrumbSchema]} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Blog</h1>
        <p className="text-text-muted mb-12">
          Guías prácticas para aplicar IA en tu negocio desde hoy.
        </p>
        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="block p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <time className="text-sm text-text-muted">{post.date}</time>
                <h2 className="text-2xl font-bold text-primary mt-1 mb-2">
                  {post.title}
                </h2>
                <p className="text-text-muted">{post.description}</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
