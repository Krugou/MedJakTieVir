/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  corePlugins: {
    // ...
  },

  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'aurora': "url('./assets/img/aurora.png')",
      },
      colors: {
        aleviolet: '#464660',
        alegreen: '#2d996d',
        alepurple: '#876484',
        aledark: '#153640',
        alecharcoal: '#0d1516',
      },
    },
  },
  plugins: [],
}

