/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        codedex: ['Fira', 'sans-serif'],
      keyframes: {
        rotate: {
          from: {
            rotate: '0deg',
          },
          '50%': {
            scale: '1 1.5',
          },
          to: {
            rotate: '360deg',
          },
        },
      },
      animation: {
        'rotate-blob': 'rotate 20s infinite',
      },
    },
  },
  plugins: [],
}
