import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import type { PluginAPI } from "tailwindcss/types/config";

const accent = colors.emerald;

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Pacifico", "cursive"], // Add this line
      },
      colors: {
        dark: {
          headings: colors.zinc[100],
          text: colors.zinc[400],
          "text-hover": colors.zinc[300],
          "icon-stroke": colors.zinc[500],
          "icon-stroke-hover": colors.zinc[400],
          "icon-fill": colors.zinc[900],
          "icon-fill-hover": colors.zinc[800],
          "bg": colors.black,
          "fg": colors.zinc[900],
          "card": colors.zinc[800],
          "accent": accent[600],
          "accent-faint": accent[200],
          "accent-hover": accent[700],
          "accent-text": colors.white,
        },
        light: {
          headings: colors.zinc[900],
          text: colors.zinc[600],
          "text-hover": colors.zinc[700],
          "icon-stroke": colors.zinc[500],
          "icon-stroke-hover": colors.zinc[400],
          "icon-fill": colors.zinc[100],
          "icon-fill-hover": colors.zinc[200],
          "bg": colors.zinc[100],
          "fg": colors.zinc[50],
          "card": colors.zinc[100],
          "accent": accent[500],
          "accent-faint": accent[200],
          "accent-hover": accent[600],
          "accent-text": colors.white,
        },
      },
    },
  },
  plugins: [
    ({ addBase, theme }: PluginAPI) => {
      addBase({
        ":root": {
          "--color-light-text": theme("colors.light.text"),
          "--color-light-bg": theme("colors.light.bg"),
          "--color-light-headings": theme("colors.light.headings"),
          "--color-light-accent": theme("colors.light.accent"),
          "--color-light-accent-hover": theme("colors.light.accent-hover"),
          "--color-dark-text": theme("colors.dark.text"),
          "--color-dark-bg": theme("colors.dark.bg"),
          "--color-dark-headings": theme("colors.dark.headings"),
          "--color-dark-accent": theme("colors.dark.accent"),
          "--color-dark-accent-hover": theme("colors.dark.accent-hover"),
        },
        "body": {
          color: "var(--color-light-text)",
          backgroundColor: "var(--color-light-bg)",
        },
        ".dark body": {
          color: "var(--color-dark-text)",
          backgroundColor: "var(--color-dark-bg)",
        },
        "h1, h2, h3, h4, h5, h6": {
          color: "var(--color-light-headings)",
        },
        ".dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6": {
          color: "var(--color-dark-headings)",
        },
        "a": {
          color: "var(--color-light-accent)",
        },
        ".dark a": {
          color: "var(--color-dark-accent)",
        },
        "a:hover": {
          color: "var(--color-light-accent-hover)",
        },
        ".dark a:hover": {
          color: "var(--color-dark-accent-hover)",
        },
      });
    },
  ],
} satisfies Config;
