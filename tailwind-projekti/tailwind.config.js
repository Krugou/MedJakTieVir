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
        aleksiblack: '#000000',
        aleksigreen: '#2d996d',
        aleksipurple: '#876484',
        aleksidark: '#153640',
        aleksicharcoal: '#0d1516',
      },
},
  },
  plugins: [],
}

