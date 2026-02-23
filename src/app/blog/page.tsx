import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { BLOG_POSTS } from "@/lib/blog";
import { DEFAULT_OG_IMAGE, SITE_URL, buildBreadcrumbList } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos y guías en español sobre inteligencia artificial aplicada a negocios.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog",
    description:
      "Artículos y guías en español sobre inteligencia artificial aplicada a negocios.",
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
    title: "Blog",
    description:
      "Artículos y guías en español sobre inteligencia artificial aplicada a negocios.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function BlogPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <main className="min-h-screen p-8">
      <StructuredData data={breadcrumbSchema} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Blog</h1>
        <p className="text-text-muted mb-6">
          Artículos próximos para ayudarte a implementar IA con claridad.
        </p>
        <ul className="space-y-4">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug} className="p-4 bg-white/5 rounded-xl">
              <h2 className="text-xl font-semibold text-text">{post.title}</h2>
              <p className="text-text-muted mt-2">{post.description}</p>
              <span className="text-xs text-text-muted mt-2 block">
                {post.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
