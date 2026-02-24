"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { BlogPostMeta } from "@/lib/blog";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogPreview({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        Últimos artículos
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-text-muted text-center mb-12 max-w-2xl mx-auto"
      >
        Aprende sobre IA, herramientas y estrategias para tu negocio
      </motion.p>
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {posts.map((post) => (
          <motion.a
            key={post.slug}
            href={`/blog/${post.slug}`}
            variants={fadeUp}
            className="group block overflow-hidden rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-all duration-300"
          >
            {/* Image area with zoom on hover */}
            <div className="relative w-full h-48 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm font-medium">
                  <span className="text-4xl opacity-50">📄</span>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="p-6">
              <time className="text-xs text-primary font-medium">
                {post.date}
              </time>
              <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          Ver todos los artículos
          <span>→</span>
        </Link>
      </motion.div>
    </section>
  );
}
