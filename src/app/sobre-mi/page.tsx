import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { DEFAULT_OG_IMAGE, SITE_URL, buildBreadcrumbList } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Jorge De Armas y su enfoque práctico para enseñar inteligencia artificial aplicada.",
  alternates: {
    canonical: `${SITE_URL}/sobre-mi`,
  },
  openGraph: {
    title: "Sobre mí",
    description:
      "Conoce a Jorge De Armas y su enfoque práctico para enseñar inteligencia artificial aplicada.",
    url: `${SITE_URL}/sobre-mi`,
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
    title: "Sobre mí",
    description:
      "Conoce a Jorge De Armas y su enfoque práctico para enseñar inteligencia artificial aplicada.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function SobreMiPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Sobre mí", path: "/sobre-mi" },
  ]);

  return (
    <main className="min-h-screen p-8">
      <StructuredData data={breadcrumbSchema} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Sobre Mí</h1>
        <p className="text-text-muted">
          Información próximamente. Compartiremos la historia, misión y visión de
          Pixelab AI.
        </p>
      </div>
    </main>
  );
}
