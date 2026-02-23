"use client";
import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";

export default function PromptTemplate({ title, children }: { title?: string; children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLPreElement>(null);
  const copy = () => { navigator.clipboard.writeText(ref.current?.textContent || ""); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="my-6 border border-primary/30 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-primary/10">
        <span className="text-sm font-semibold text-primary">{title || "Prompt Template"}</span>
        <button onClick={copy} className="flex items-center gap-1 text-xs text-text-muted hover:text-primary transition-colors">
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}{copied ? "¡Copiado!" : "Copiar"}
        </button>
      </div>
      <pre ref={ref} className="p-4 text-sm text-text-muted whitespace-pre-wrap bg-surface">{children}</pre>
    </div>
  );
}
