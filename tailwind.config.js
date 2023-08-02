/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "green-100": '#00B37E',
      "green-500": '#00875F',
      "gray-100": '#121214',
      "gray-200": '#202024',
      "gray-300": '#323238',
      "gray-400": '#7C7C8A',
      "gray-500": '#8D8D99',
      "gray-600": '#C4C4CC',
      "gray-700": '#E1E1E6',
      "gray-800": '#29292E',
      "red-danger": '#F75A68',
      'white': '#FFFFFF',
      'blue-100': '#5AB5FF',
      'blue-300': '#37A0E3',
    },
  },
  plugins: [],
}

