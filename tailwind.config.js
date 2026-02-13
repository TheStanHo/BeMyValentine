/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        valentine: {
          pink: '#ff69b4',
          rose: '#ff1493',
          red: '#dc143c',
          light: '#ffe4e1',
        },
      },
      fontFamily: {
        romantic: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
