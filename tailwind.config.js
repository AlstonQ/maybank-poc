/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
        "brand-50": "var(--brand-50)",
        "brand-100": "var(--brand-100)",
        "brand-300": "var(--brand-300)",
        "brand-500": "var(--brand-500)",
        "brand-700": "var(--brand-700)",
        "brand-900": "var(--brand-900)",
        "brand-hover": "var(--brand-hover)",
        "brand-active": "var(--brand-active)",
        "brand-light-wash": "var(--brand-light-wash)",
        lime: "var(--lime)",
        "lime-hover": "var(--lime-hover)",
        "lime-active": "var(--lime-active)",
        "header-bg": "var(--header-bg)",
        "app-bg": "var(--app-bg)",
        "page-body": "var(--page-body)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "card-bg": "var(--card-bg)",
        "card-border": "var(--card-border)",
        "card-shadow": "var(--card-shadow)",
        "link": "var(--link)",
        "link-hover": "var(--link-hover)",
        gold: "var(--gold)",
        success: "var(--success)",
        error: "var(--error)",
        warning: "var(--warning)",
        info: "var(--info)",
        hot: "var(--hot)",
        warm: "var(--warm)",
        cold: "var(--cold)",
        open: "var(--open)",
        closed: "var(--closed)",
        "in-progress": "var(--in-progress)",
        "follow-up": "var(--follow-up)",
        normal: "var(--normal)",
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      spacing: {
        // We can add spacing overrides if needed, but keeping default is fine.
      },
      borderRadius: {
        // Spec asks for Card radius: 16px (1rem). We can map standard lg/xl to it if they used that.
        // Actually we can leave it to Tailwind's default unless they used custom classes.
      }
    },
  },
  plugins: [],
}
