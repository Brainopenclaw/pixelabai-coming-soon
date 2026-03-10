module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111827",
        surface: "rgba(255,255,255,0.03)",
        primary: "#00E5FF",
        secondary: "#38bdf8",
        text: "#ffffff",
        "text-muted": "#9ca3af",
        border: "rgba(0,229,255,0.2)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        heading: ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        subheading: ["1.25rem", { lineHeight: "1.4", fontWeight: "500" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "section-padding": "5rem",
        "container-width": "72rem",
      },
      borderRadius: {
        card: "1rem",
        button: "0.5rem",
        badge: "9999px",
      },
      boxShadow: {
        "glow-cyan": "0 0 28px rgba(0,229,255,0.35)",
        "glow-cyan-lg": "0 0 44px rgba(0,229,255,0.55)",
        "glow-orange": "0 0 20px rgba(255, 107, 53, 0.3)",
      },
    },
  },
  plugins: [],
}
