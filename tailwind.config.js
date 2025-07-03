/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      // bisa tambah warna, font, dll di sini
    },
  },
  plugins: [],
}
