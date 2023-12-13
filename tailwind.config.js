/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          from: {
            transform: 'rotate:(0.0deg)',
          },
          to: {
            transform: 'rotate:(360deg)',
          },
        },
      },
      animation: {
        'rotate-blob': 'rotate 20s infinite',
      },
      fontFamily: {
        excalidraw: ['Excalidraw', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
