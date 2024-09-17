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
                primary: '#141D2E',
                primaryDark: '#9A3955',
                secondaryDark: '#A95194',
                borders: '#19171C',
                link: '#4361ee',
                darklink: '#f20089',
                badge: '#00640029',
                badgetext: '#38b000'
            }
        },
  },
  plugins: [],
}
