export type BlogFaq = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  faqs: BlogFaq[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ejemplo",
    title: "Cómo usar la IA para crecer tu negocio",
    description:
      "Guía rápida para aplicar inteligencia artificial en procesos de ventas, marketing y atención al cliente.",
    date: "2026-02-23",
    faqs: [
      {
        question: "¿Qué es la IA aplicada a negocios?",
        answer:
          "Es el uso práctico de modelos de IA para automatizar tareas y mejorar decisiones en áreas clave.",
      },
      {
        question: "¿Necesito conocimientos técnicos para empezar?",
        answer:
          "No. Puedes comenzar con herramientas no-code y casos de uso guiados.",
      },
    ],
  },
];
