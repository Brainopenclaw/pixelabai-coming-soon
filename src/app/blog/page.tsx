import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

export default function BlogPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">Blog</h1>
        <p className="text-text-muted mb-12">Guías prácticas para aplicar IA en tu negocio.</p>
        <div className="grid gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors">
              <Link href={`/blog/${post.slug}`} className="block p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.imageAlt} className="w-full h-48 object-cover rounded-lg mb-4" loading="lazy" />
                <time className="text-sm text-text-muted">{post.date}</time>
                <h2 className="text-2xl font-bold text-primary mt-1 mb-2">{post.title}</h2>
                <p className="text-text-muted">{post.description}</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{tag}</span>
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
