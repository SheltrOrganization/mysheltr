import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          pressed: "var(--color-primary-pressed)",
          tint: "var(--color-primary-tint)",
        },
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-muted": "var(--color-surface-muted)",
        heading: "var(--color-heading)",
        body: "var(--color-body)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        verified: "var(--color-verified)",
        "verified-tint": "var(--color-verified-tint)",
        accent: "var(--color-accent)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
        pill: "999px",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(46, 20, 12, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
