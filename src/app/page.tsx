import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import BlogPreview from "@/components/BlogPreview";
import SocialProof from "@/components/SocialProof";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";
import { getLatestPosts } from "@/lib/blog";

export default function Home() {
  const posts = getLatestPosts(3);

  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProps />
      <BlogPreview posts={posts} />
      <SocialProof />
      <EmailCapture />
      <Footer />
    </main>
  );
}
