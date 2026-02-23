import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { DEFAULT_OG_IMAGE, SITE_URL, buildBreadcrumbList } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Conoce cómo protegemos tus datos y la información que compartes con Pixelab AI.",
  alternates: {
    canonical: `${SITE_URL}/privacidad`,
  },
  openGraph: {
    title: "Política de privacidad",
    description:
      "Conoce cómo protegemos tus datos y la información que compartes con Pixelab AI.",
    url: `${SITE_URL}/privacidad`,
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
    title: "Política de privacidad",
    description:
      "Conoce cómo protegemos tus datos y la información que compartes con Pixelab AI.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PrivacidadPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Política de privacidad", path: "/privacidad" },
  ]);

  return (
    <main className="min-h-screen p-8">
      <StructuredData data={breadcrumbSchema} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Política de Privacidad
        </h1>
        <p className="text-text-muted">
          Contenido próximamente. Aquí detallaremos el uso de datos y medidas de
          seguridad.
        </p>
      </div>
    </main>
  );
}
