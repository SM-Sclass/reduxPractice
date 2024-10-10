/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',   // Ensure index.html is included
    './src/**/*.{js,jsx,ts,tsx}', // Ensure Tailwind scans all your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
