import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const styles: Record<string, React.CSSProperties> = {
    default: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af" },
    primary: { background: "rgba(0,229,255,0.08)", border: "1px solid rgba(0,229,255,0.2)", color: "#00E5FF" },
    secondary: { background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", color: "#38bdf8" },
  };

  return (
    <span
      className={`inline-flex items-center rounded-badge px-3 py-1 text-small font-medium ${className}`}
      style={styles[variant]}
    >
      {children}
    </span>
  );
}
