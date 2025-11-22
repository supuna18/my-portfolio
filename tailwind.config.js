/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], // අපි දාපු අලුත් Font එක
      },
      colors: {
        primary: '#0ea5e9', // Sky blue color for highlights
        secondary: '#64748b', // Slate color for texts
        dark: '#0f172a', // Main background
      }
    },
  },
  plugins: [],
}