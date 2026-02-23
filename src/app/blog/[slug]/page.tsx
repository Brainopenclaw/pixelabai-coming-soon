import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import StructuredData from "@/components/StructuredData";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog";
import {
  DEFAULT_OG_IMAGE,
  PERSON,
  SITE_URL,
  buildBreadcrumbList,
  getArticleSchema,
  getFaqSchema,
  getPersonSchema,
} from "@/lib/seo";

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Artículo",
      alternates: {
        canonical: `${SITE_URL}/blog/${params.slug}`,
      },
    };
  }

  const image = post.image || DEFAULT_OG_IMAGE;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.imageAlt || "Pixelab AI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Artículo</h1>
          <p className="text-text-muted">Artículo no encontrado.</p>
        </div>
      </main>
    );
  }

  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}${post.image || DEFAULT_OG_IMAGE}`,
  });

  const faqSchema = post.faqs.length ? getFaqSchema(post.faqs) : null;

  return (
    <main className="min-h-screen p-8">
      <StructuredData
        data={[
          breadcrumbSchema,
          articleSchema,
          getPersonSchema(),
          faqSchema,
        ].filter(Boolean)}
      />
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {post.title}
          </h1>
          <p className="text-text-muted">{post.description}</p>
          <p className="text-xs text-text-muted mt-2">Publicado: {post.date}</p>
          <p className="text-xs text-text-muted">Autor: {PERSON.name}</p>
        </header>

        <article className="prose prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </article>

        {post.faqs.length ? (
          <section className="bg-white/5 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Preguntas rápidas
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-text">{faq.question}</h3>
                  <p className="text-text-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
