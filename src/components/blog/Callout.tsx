"use client";
import { AlertTriangle, Lightbulb, Info } from "lucide-react";

const icons = { tip: Lightbulb, warning: AlertTriangle, info: Info };
const styles = { tip: "border-green-500/50 bg-green-500/10", warning: "border-yellow-500/50 bg-yellow-500/10", info: "border-blue-500/50 bg-blue-500/10" };

export default function Callout({ type = "tip", title, children }: { type?: "tip"|"warning"|"info"; title?: string; children: React.ReactNode }) {
  const Icon = icons[type];
  return (
    <div className={`border-l-4 rounded-r-lg p-4 my-6 ${styles[type]}`}>
      <div className="flex items-center gap-2 mb-2"><Icon className="w-5 h-5" />{title && <span className="font-semibold">{title}</span>}</div>
      <div className="text-text-muted text-sm">{children}</div>
    </div>
  );
}
