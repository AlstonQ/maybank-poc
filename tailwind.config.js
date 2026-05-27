/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bnBlack: "#0A0A0A",
        bnGrey: "#F2F3F5",
        bnHeading: "#E6308A",
        bnLime: "#C6E84F",
        charts: {
          cyan: "#3DBFD4",
          magenta: "#E6308A",
          amber: "#F5A623",
          blue: "#2F4FE0",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
