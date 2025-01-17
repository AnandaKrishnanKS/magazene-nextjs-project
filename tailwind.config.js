/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gelasio': ['Gelasio', 'serif'], 
        'source-sans': ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
