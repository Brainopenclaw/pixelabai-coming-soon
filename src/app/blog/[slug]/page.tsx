import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import SystemeForm from "@/components/SystemeForm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary">Artículo no encontrado</h1>
        </div>
      </main>
    );
  }

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: post.image,
      datePublished: post.date,
      author: { "@type": "Person", name: post.author },
      publisher: { "@type": "Organization", name: "Pixelab AI", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <main className="min-h-screen p-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.imageAlt} className="w-full h-64 object-cover rounded-2xl mb-6" />
          <time className="text-sm text-text-muted">{post.date}</time>
          <h1 className="text-4xl font-bold text-primary mt-2 mb-4">{post.title}</h1>
          <p className="text-text-muted text-lg">{post.description}</p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{tag}</span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert prose-orange max-w-none">
          <MDXRemote source={post.content} />
        </div>

        {post.faqs.length > 0 && (
          <section className="mt-12 bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-primary mb-6">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="cursor-pointer font-semibold text-text group-open:text-primary transition-colors">{faq.question}</summary>
                  <p className="mt-2 text-text-muted pl-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        <SystemeForm />

        {post.cta.href !== "#form" && (
          <div className="text-center mt-8">
            <a href={post.cta.href} target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity">
              {post.cta.text} →
            </a>
          </div>
        )}
      </article>
    </main>
  );
}
