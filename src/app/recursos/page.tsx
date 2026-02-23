import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  buildBreadcrumbList,
  getItemListSchema,
} from "@/lib/seo";

const resources = [
  { name: "Guías prácticas de IA", url: `${SITE_URL}/recursos` },
  { name: "Plantillas para automatización", url: `${SITE_URL}/recursos` },
  { name: "Herramientas recomendadas", url: `${SITE_URL}/recursos` },
];

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Recursos de inteligencia artificial para emprendedores: guías, plantillas y herramientas recomendadas.",
  alternates: {
    canonical: `${SITE_URL}/recursos`,
  },
  openGraph: {
    title: "Recursos | Pixelab AI",
    description:
      "Recursos de inteligencia artificial para emprendedores: guías, plantillas y herramientas recomendadas.",
    url: `${SITE_URL}/recursos`,
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
    title: "Recursos | Pixelab AI",
    description:
      "Recursos de inteligencia artificial para emprendedores: guías, plantillas y herramientas recomendadas.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RecursosPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Recursos", path: "/recursos" },
  ]);

  const itemListSchema = getItemListSchema(resources);

  return (
    <main className="min-h-screen p-8">
      <StructuredData data={[breadcrumbSchema, itemListSchema]} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Recursos</h1>
        <p className="text-text-muted mb-4">
          Respuesta corta: aquí encontrarás guías, plantillas y herramientas de IA
          para ahorrar tiempo y vender más.
        </p>
        <p className="text-text-muted">Recursos de IA próximamente</p>
      </div>
    </main>
  );
}
