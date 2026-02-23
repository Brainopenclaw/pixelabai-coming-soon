import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const styles = {
    default: "bg-white/5 text-text-muted border-white/10",
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
  }[variant];

  return (
    <span className={`inline-flex items-center rounded-badge border px-3 py-1 text-small font-medium ${styles} ${className}`}>
      {children}
    </span>
  );
}
