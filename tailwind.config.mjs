/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#3c3c3cx`',
      },
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif'],
        'Ovo': ['Ovo', 'serif']
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
      }
    },
  },
  plugins: [],
};
