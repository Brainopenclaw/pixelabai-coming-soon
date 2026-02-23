import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  PERSON,
  SITE_NAME,
  SITE_URL,
  buildBreadcrumbList,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Inicio",
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} — Próximamente`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
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
    title: `${SITE_NAME} — Próximamente`,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Inicio", path: "/" },
  ]);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON.name,
    jobTitle: PERSON.jobTitle,
    url: PERSON.url,
    sameAs: PERSON.sameAs,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es Pixelab AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Una plataforma en español para aprender IA aplicada a negocios con pasos simples y accionables.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo estará disponible?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Muy pronto. Suscríbete para recibir el lanzamiento y recursos iniciales.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 text-center">
      <StructuredData data={[breadcrumbSchema, personSchema, faqSchema]} />
      <div>
        <h1 className="text-heading text-gradient-orange">
          Pixelab AI — Coming Soon
        </h1>
        <p className="text-text-muted mt-4 max-w-xl">
          Aprende a usar la inteligencia artificial con guías claras y prácticas
          para impulsar tu negocio desde el primer día.
        </p>
      </div>
      <section className="max-w-2xl text-left bg-white/5 p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-text">¿Qué es Pixelab AI?</h3>
            <p className="text-text-muted">
              Una plataforma en español para aprender IA aplicada a negocios con
              pasos simples y accionables.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text">
              ¿Cuándo estará disponible?
            </h3>
            <p className="text-text-muted">
              Muy pronto. Suscríbete para recibir el lanzamiento y recursos
              iniciales.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
