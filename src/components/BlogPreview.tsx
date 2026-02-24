"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { BlogPostMeta } from "@/lib/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogPreview({ posts }: { posts: BlogPostMeta[] }) {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (slug: string) => {
    setImageErrors(prev => ({ ...prev, [slug]: true }));
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Últimos artículos
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.a
            key={post.slug}
            href={`/blog/${post.slug}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ rotateY: 3, rotateX: -3, scale: 1.02 }}
            className="block p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-colors"
            style={{ transformPerspective: 800 }}
          >
            <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
              {imageErrors[post.slug] ? (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-text-muted text-sm">
                  {post.category}
                </div>
              ) : (
                <Image 
                  src={post.image} 
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(post.slug)}
                />
              )}
            </div>
            <time className="text-xs text-text-muted">{post.date}</time>
            <h3 className="text-lg font-semibold mt-1 mb-2">{post.title}</h3>
            <p className="text-sm text-text-muted">{post.excerpt}</p>
          </motion.a>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href="/blog"
          className="text-primary font-semibold hover:underline"
        >
          Ver todos los artículos →
        </Link>
      </div>
    </section>
  );
}
