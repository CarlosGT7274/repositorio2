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
                light: '#E9EFE6',
                verdeazul: '#141D2E',
                verdeazulclaro: '#9A3955',
                rosapastel: '#A95194',
                borders: '#19171C',
            }
        },
  },
  plugins: [],
}
