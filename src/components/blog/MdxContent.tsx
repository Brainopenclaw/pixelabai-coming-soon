import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Callout from "./Callout";
import PromptTemplate from "./PromptTemplate";
import VideoEmbed from "./VideoEmbed";
import EmailCapture from "./EmailCapture";
import FAQ from "./FAQ";

const components = {
  Callout, PromptTemplate, VideoEmbed, EmailCapture, FAQ,
  h2: (props: React.ComponentProps<"h2">) => <h2 className="text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24" {...props} />,
  h3: (props: React.ComponentProps<"h3">) => <h3 className="text-xl font-semibold text-text mt-8 mb-3 scroll-mt-24" {...props} />,
  p: (props: React.ComponentProps<"p">) => <p className="text-text-muted leading-relaxed mb-4" {...props} />,
  ul: (props: React.ComponentProps<"ul">) => <ul className="list-disc list-inside text-text-muted mb-4 space-y-1" {...props} />,
  ol: (props: React.ComponentProps<"ol">) => <ol className="list-decimal list-inside text-text-muted mb-4 space-y-1" {...props} />,
  li: (props: React.ComponentProps<"li">) => <li className="text-text-muted" {...props} />,
  a: (props: React.ComponentProps<"a">) => <a className="text-primary underline hover:text-primary/80" {...props} />,
  blockquote: (props: React.ComponentProps<"blockquote">) => <blockquote className="border-l-4 border-primary/50 pl-4 italic text-text-muted my-4" {...props} />,
  strong: (props: React.ComponentProps<"strong">) => <strong className="text-text font-semibold" {...props} />,
};

export default function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose-custom">
      <MDXRemote source={source} components={components} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }} />
    </div>
  );
}
