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
      },
    },
    plugins: [],
  },
}
