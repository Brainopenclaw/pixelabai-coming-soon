import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { DEFAULT_OG_IMAGE, SITE_URL, buildBreadcrumbList } from "@/lib/seo";

const RESOURCES = [
  {
    name: "Checklist de implementación IA",
    description: "Pasos clave para lanzar tu primer flujo con IA.",
  },
  {
    name: "Prompting para equipos de ventas",
    description: "Ejemplos listos para mejorar respuestas y cierres.",
  },
  {
    name: "Plantilla de diagnóstico",
    description: "Identifica procesos con alto impacto para automatizar.",
  },
];

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Recursos en español para acelerar la adopción de inteligencia artificial en tu negocio.",
  alternates: {
    canonical: `${SITE_URL}/recursos`,
  },
  openGraph: {
    title: "Recursos",
    description:
      "Recursos en español para acelerar la adopción de inteligencia artificial en tu negocio.",
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
    title: "Recursos",
    description:
      "Recursos en español para acelerar la adopción de inteligencia artificial en tu negocio.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RecursosPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Recursos", path: "/recursos" },
  ]);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: RESOURCES.map((resource, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: resource.name,
      description: resource.description,
    })),
  };

  return (
    <main className="min-h-screen p-8">
      <StructuredData data={[breadcrumbSchema, itemListSchema]} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">Recursos</h1>
        <p className="text-text-muted mb-6">
          Recursos de IA próximamente. Te compartiremos herramientas, plantillas
          y guías rápidas.
        </p>
        <ul className="space-y-4">
          {RESOURCES.map((resource) => (
            <li key={resource.name} className="p-4 bg-white/5 rounded-xl">
              <h2 className="text-xl font-semibold text-text">
                {resource.name}
              </h2>
              <p className="text-text-muted mt-2">{resource.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
