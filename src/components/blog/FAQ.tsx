"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="my-6 space-y-2">
      {items.map((item, i) => (
        <div key={i} className="border border-white/10 rounded-lg overflow-hidden">
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors">
            <span className="font-medium text-text">{item.question}</span>
            <ChevronDown className={`w-5 h-5 text-text-muted transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <div className="px-4 pb-4 text-text-muted text-sm">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}
