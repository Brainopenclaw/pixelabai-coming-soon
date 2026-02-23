export async function generateStaticParams() {
  // Return at least one example for static export
  return [
    { slug: 'ejemplo' },
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">
          {slug}
        </h1>
        <p className="text-text-muted">Contenido del artículo próximamente</p>
      </div>
    </main>
  );
}
