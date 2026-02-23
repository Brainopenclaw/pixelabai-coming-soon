import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  buildBreadcrumbList,
  getFaqSchema,
  getPersonSchema,
} from "@/lib/seo";

const faqItems = [
  {
    question: "¿Qué es Pixelab AI?",
    answer:
      "Una plataforma en español para aprender IA aplicada a negocios con pasos simples y accionables.",
  },
  {
    question: "¿Cuándo estará disponible?",
    answer:
      "Muy pronto. Suscríbete para recibir el lanzamiento y los primeros recursos.",
  },
];

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
    card: "summary_large_image",
    title: `${SITE_NAME} — Próximamente`,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  const breadcrumbSchema = buildBreadcrumbList([{ name: "Inicio", path: "/" }]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8 text-center">
      <StructuredData
        data={[breadcrumbSchema, getPersonSchema(), getFaqSchema(faqItems)]}
      />
      <div>
        <h1 className="text-heading text-gradient-orange">
          Pixelab AI — Coming Soon
        </h1>
        <p className="text-text-muted mt-4 max-w-xl">
          Aprende a usar la inteligencia artificial con guías claras y prácticas
          para impulsar tu negocio desde el primer día.
        </p>
        <p className="text-text-muted mt-2 max-w-xl">
          Respuesta corta: IA aplicada para vender más y trabajar mejor.
        </p>
      </div>
      <section className="max-w-2xl text-left bg-white/5 p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          {faqItems.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-text">{faq.question}</h3>
              <p className="text-text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
