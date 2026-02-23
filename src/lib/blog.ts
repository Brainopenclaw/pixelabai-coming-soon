import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogFaq = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  tags: string[];
  cta: { text: string; href: string };
  faqs: BlogFaq[];
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

let cachedPosts: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (cachedPosts) return cachedPosts;
  if (!fs.existsSync(CONTENT_DIR)) {
    cachedPosts = [];
    return cachedPosts;
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith(".mdx"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: (data.title as string) || "",
      description: (data.description as string) || "",
      date: (data.date as string) || "",
      category: (data.category as string) || "",
      image: (data.image as string) || "",
      imageAlt: (data.imageAlt as string) || (data.title as string) || "",
      author: (data.author as string) || "",
      tags: (data.tags as string[]) || [],
      cta: (data.cta as { text: string; href: string }) || { text: "", href: "#form" },
      faqs: (data.faqs as BlogFaq[]) || [],
      content,
    } satisfies BlogPost;
  });

  cachedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return cachedPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
