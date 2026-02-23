import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { DEFAULT_OG_IMAGE, PERSON, SITE_URL, buildBreadcrumbList } from "@/lib/seo";

const COURSE_FAQS = [
  {
    question: "¿A quién está dirigido el curso?",
    answer:
      "A profesionales y emprendedores que quieren aplicar IA sin complicaciones técnicas.",
  },
  {
    question: "¿Incluye casos reales?",
    answer: "Sí, con ejemplos prácticos listos para implementar.",
  },
];

export const metadata: Metadata = {
  title: "Curso",
  description:
    "Curso práctico de IA aplicada para negocios con ejercicios accionables y plantillas listas para usar.",
  alternates: {
    canonical: `${SITE_URL}/curso`,
  },
  openGraph: {
    title: "Curso",
    description:
      "Curso práctico de IA aplicada para negocios con ejercicios accionables y plantillas listas para usar.",
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
    title: "Curso",
    description:
      "Curso práctico de IA aplicada para negocios con ejercicios accionables y plantillas listas para usar.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function CursoPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Inicio", path: "/" },
    { name: "Curso", path: "/curso" },
  ]);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Curso de IA aplicada a negocios",
    description:
      "Programa práctico para implementar inteligencia artificial en ventas, marketing y operaciones.",
    provider: {
      "@type": "Person",
      name: PERSON.name,
      url: PERSON.url,
    },
    offers: {
      "@type": "Offer",
      category: "Educación",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      url: `${SITE_URL}/curso`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: COURSE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen p-8">
      <StructuredData data={[breadcrumbSchema, courseSchema, faqSchema]} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">Curso</h1>
        <p className="text-text-muted mb-8">
          Información del curso próximamente. Recibirás módulos claros, plantillas
          descargables y casos reales.
        </p>
        <section className="bg-white/5 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {COURSE_FAQS.map((faq) => (
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
