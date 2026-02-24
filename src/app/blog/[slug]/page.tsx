import type { Metadata } from "next";
import Link from "next/link";
import MdxContent from "@/components/blog/MdxContent";
import TableOfContents from "@/components/blog/TableOfContents";
import EmailCapture from "@/components/blog/EmailCapture";
import JsonLd from "@/components/JsonLd";
import { getAllPosts, getPostBySlug, getRelatedPosts, extractHeadings } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo" };
  return {
    title: `${post.title} — Pixelab AI`,
    description: post.description,
    alternates: { canonical: `https://pixelabai.com/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: "article" },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return <main className="min-h-screen p-8"><div className="max-w-4xl mx-auto"><h1 className="text-4xl font-bold text-primary mb-8">Artículo</h1><p className="text-text-muted">Artículo no encontrado.</p></div></main>;
  }

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post.slug, post.category);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "Pixelab AI",
      url: "https://pixelabai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://pixelabai.com/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pixelabai.com/blog/${post.slug}`
    }
  };

  return (
    <main className="min-h-screen p-8">
      <JsonLd data={articleSchema} />
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-10">
          <article className="flex-1 max-w-[720px]">
            <header className="mb-8">
              <div className="flex items-center gap-3 text-sm text-text-muted mb-4">
                <Link href="/blog" className="hover:text-primary transition-colors">← Blog</Link>
                <span>·</span>
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">{post.category}</span>
              </div>
              <h1 className="text-4xl font-bold text-text mb-4">{post.title}</h1>
              <p className="text-text-muted text-lg mb-4">{post.description}</p>
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <span>{post.author}</span><span>·</span><time>{post.date}</time><span>·</span><span>{post.readTime}</span>
              </div>
            </header>

            <MdxContent source={post.content} />

            {post.faqs.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-text mb-4">Preguntas frecuentes</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq: { question: string; answer: string }) => (
                    <div key={faq.question} className="bg-white/5 rounded-lg p-4">
                      <h3 className="font-semibold text-text mb-1">{faq.question}</h3>
                      <p className="text-text-muted text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">{post.author.charAt(0)}</div>
              <div>
                <p className="font-semibold text-text">{post.author}</p>
                <p className="text-sm text-text-muted">Especialista en IA aplicada</p>
              </div>
            </div>

            <EmailCapture />

            {related.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-text mb-6">Artículos relacionados</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="block bg-white/5 rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-colors">
                      <h3 className="font-semibold text-text text-sm mb-1">{r.title}</h3>
                      <p className="text-xs text-text-muted line-clamp-2">{r.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>
          <aside className="hidden lg:block w-64 shrink-0">
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </div>
    </main>
  );
}
