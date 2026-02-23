import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "surface" | "gradient";
  id?: string;
}

export default function Section({ children, className = "", background = "default", id }: SectionProps) {
  const bg = {
    default: "bg-background",
    surface: "bg-surface",
    gradient: "bg-gradient-to-b from-background to-surface",
  }[background];

  return (
    <section id={id} className={`w-full py-section-padding px-6 ${bg} ${className}`}>
      {children}
    </section>
  );
}
