import fs from "fs";
import path from "path";
import matter from "gray-matter";
export type { BlogFaq, BlogPost, BlogPostMeta, Category } from "./blog-constants";
export { CATEGORIES } from "./blog-constants";
import type { BlogPost, BlogPostMeta } from "./blog-constants";

const dir = path.join(process.cwd(), "content", "blog");

function parse(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(dir, filename), "utf8");
  const { data, content } = matter(raw);
  return {
    slug: data.slug || filename.replace(/\.mdx$/, ""),
    title: data.title || "", description: data.description || data.excerpt || "",
    excerpt: data.excerpt || data.description || "",
    date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
    category: data.category || "Herramientas", tags: data.tags || [],
    image: data.image || "/og-default.svg", imageAlt: data.imageAlt || data.title || "",
    readTime: data.readTime || "5 min", author: data.author || "Jorge De Armas",
    lang: data.lang || "es", faqs: data.faqs || [], content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f: string) => f.endsWith(".mdx"))
    .map((f: string) => { const { content: _, ...meta } = parse(f); return meta; })
    .sort((a: BlogPostMeta, b: BlogPostMeta) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(dir)) return null;
  for (const f of fs.readdirSync(dir).filter((f: string) => f.endsWith(".mdx"))) {
    const post = parse(f);
    if (post.slug === slug) return post;
  }
  return null;
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.slug !== currentSlug && p.category === category).slice(0, limit);
}

export function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const re = /^(#{2,3})\s+(.+)$/gm;
  const h: { id: string; text: string; level: number }[] = [];
  let m;
  while ((m = re.exec(content)) !== null) {
    const text = m[2].trim();
    h.push({ id: text.toLowerCase().replace(/[^\w\sáéíóúñü-]/g, "").replace(/\s+/g, "-"), text, level: m[1].length });
  }
  return h;
}
