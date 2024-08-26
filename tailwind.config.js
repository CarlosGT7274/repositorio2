/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
            colors: {
                dark: '#20202380',
                light: '#F0E7DB',
                verdeazul: '#2A6F7F',
                verdeazulclaro: '#78DEC9',
            }
        },
  },
  plugins: [],
}
