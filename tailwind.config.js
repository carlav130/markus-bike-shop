/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'co-main': '#FF355E',
      'neutral': '#25253D'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
