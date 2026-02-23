export const CATEGORIES = ["Todos", "Herramientas", "Marketing", "Automatización", "Emprendimiento"] as const;
export type Category = (typeof CATEGORIES)[number];
export type BlogFaq = { question: string; answer: string };
export type BlogPostMeta = {
  slug: string; title: string; description: string; excerpt: string; date: string;
  category: string; tags: string[]; image: string; imageAlt: string;
  readTime: string; author: string; lang: string; faqs: BlogFaq[];
};
export type BlogPost = BlogPostMeta & { content: string };
