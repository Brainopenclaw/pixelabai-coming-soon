import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { BLOG_POSTS } from "@/lib/blog";
import { DEFAULT_OG_IMAGE, PERSON, SITE_URL, buildBreadcrumbList } from "@/lib/seo";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Artículo",
      alternates: {
        canonical: `${SITE_URL}/blog/${slug}`,
      },
    };
  }

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
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Pixelab AI",
        },
      ],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: PERSON.name,
      url: PERSON.url,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON.name,
    url: PERSON.url,
  };

  return (
    <main className="min-h-screen p-8">
      <StructuredData
        data={[breadcrumbSchema, articleSchema, authorSchema, faqSchema]}
      />
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-4xl font-bold text-primary mb-4">
            {post.title}
          </h1>
          <p className="text-text-muted">{post.description}</p>
          <p className="text-xs text-text-muted mt-2">
            Publicado: {post.date}
          </p>
        </header>
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
      </div>
    </main>
  );
}
