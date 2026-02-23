import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { DEFAULT_OG_IMAGE, SITE_URL, buildBreadcrumbList } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Jorge De Armas, fundador de Pixelab AI y creador de contenidos sobre inteligencia artificial aplicada a negocios.",
  alternates: {
    canonical: `${SITE_URL}/sobre-mi`,
  },
  openGraph: {
    title: "Sobre mí | Pixelab AI",
    description:
      "Conoce a Jorge De Armas, fundador de Pixelab AI y creador de contenidos sobre IA aplicada.",
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
    card: "summary_large_image",
    title: "Sobre mí | Pixelab AI",
    description:
      "Conoce a Jorge De Armas, fundador de Pixelab AI y creador de contenidos sobre IA aplicada.",
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
      <StructuredData data={[breadcrumbSchema]} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Sobre Mí</h1>
        <p className="text-text-muted mb-4">
          Respuesta corta: soy Jorge De Armas y enseño cómo aplicar inteligencia
          artificial para crecer negocios reales.
        </p>
        <p className="text-text-muted">Información próximamente</p>
      </div>
    </main>
  );
}
