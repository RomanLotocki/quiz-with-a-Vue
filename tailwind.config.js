/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      padding: "10px",
      center: true,
    },
    screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "custom-green": "#5CDB95",
        "custom-light-green": "#8EE4AF",
        "custom-dark-green": "#379683",
        "custom-white": "#EDF5E1",
        "custom-blue": "#05386B"
      }
    },
    fontFamily: {
      Ubuntu: ['Ubuntu, sans-serif'],
      Roboto: ['Roboto', 'sans-serif']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ]
}

