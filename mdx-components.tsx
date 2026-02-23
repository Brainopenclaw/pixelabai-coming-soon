import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-primary mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-primary mb-4 mt-8">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="text-text mb-4 leading-relaxed">{children}</p>
    ),
    ...components,
  }
}
