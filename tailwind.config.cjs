/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        myFont: ['Yantramanav', 'sans-serif'],
        jetBrains: ['JetBrains Mono', 'monospace'],
        robotoSerif: ['Roboto Serif', 'serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}