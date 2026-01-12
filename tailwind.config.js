/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'heebo': ['Heebo', 'sans-serif'],
        'gulzar': ['Gulzar', 'serif'],
        'plex': ['IBM Plex Sans Arabic', 'sans-serif'],
      },
      colors: {
        'green-custom': 'rgb(9, 161, 29)',
        'yellow-custom': 'rgb(235, 211, 1)',
        'blue-custom': 'rgb(1, 161, 235)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.15s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
