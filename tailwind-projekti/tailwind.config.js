/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  corePlugins: {
    // ...
  },

  theme: {
    extend: {
      colors: {
        aleblack: '#000000',
        alegreen: '#2d996d',
        alepurple: '#876484',
        aledark: '#153640',
        alecharcoal: '#0d1516',
      },
    },
  },
  plugins: [],
}

