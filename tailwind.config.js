/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bloom-lila': "#c2a8d1",
        'bloom-rosa': "#fef1e8",
        'bloom-durazno': "#f2ae97",
        'bloom-amarillo': "#fbd174",
        'bloom-coral': "#e4885a",
        'bloom-blanco': "#ffffff",
        'bloom-negro': "#000000",
      },
    },
  },
  plugins: [],
};
