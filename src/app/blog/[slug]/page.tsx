export async function generateStaticParams() {
  // Return empty array for now - no blog posts yet
  return [];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">
          {params.slug}
        </h1>
        <p className="text-text-muted">Contenido del artículo próximamente</p>
      </div>
    </main>
  );
}
