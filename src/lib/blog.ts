import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogFaq = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  tags: string[];
  faqs: BlogFaq[];
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"));
  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug: data.slug || filename.replace(/\.mdx$/, ""),
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || data.description || "",
      description: data.description || data.excerpt || "",
      image: data.image || "/og-default.svg",
      imageAlt: data.imageAlt || data.title || "",
      tags: data.tags || [],
      faqs: data.faqs || [],
      content,
    };
  });
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export const BLOG_POSTS = getAllPosts();

export function getLatestPosts(count = 3): BlogPost[] {
  return BLOG_POSTS.slice(0, count);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
