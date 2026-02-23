import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  buildBreadcrumbList,
  getCourseSchema,
} from "@/lib/seo";

const courseName = "Curso de IA para Emprendedores";
const courseDescription =
  "Curso práctico para aprender a implementar inteligencia artificial en tu negocio con ejemplos reales.";

export const metadata: Metadata = {
  title: "Curso",
  description: courseDescription,
  alternates: {
    canonical: `${SITE_URL}/curso`,
  },
  openGraph: {
    title: "Curso | Pixelab AI",
    description: courseDescription,
    url: `${SITE_URL}/curso`,
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
    title: "Curso | Pixelab AI",
    description: courseDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function CursoPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Curso", path: "/curso" },
  ]);

  const courseSchema = getCourseSchema({
    name: courseName,
    description: courseDescription,
    url: `${SITE_URL}/curso`,
  });

  return (
    <main className="min-h-screen p-8">
      <StructuredData data={[breadcrumbSchema, courseSchema]} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Curso</h1>
        <p className="text-text-muted mb-4">{courseDescription}</p>
        <p className="text-text-muted">Información del curso próximamente</p>
      </div>
    </main>
  );
}
