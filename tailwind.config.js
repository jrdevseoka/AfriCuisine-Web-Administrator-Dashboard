/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './components/**/*.{html,ts}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      'dark-soul': {
        100: "#e7e9ed",
        200: "#b6beca",
        300: "#8693a7",
        400: "#556883",
        500: "#0c274e",
        600: "#0a1f3e",
        700: "#07172f",
        800: "#05101f",
        900: "#020810",
      },

      'devilish': {
        100: "#fceaea",
        200: "#f6c1c1",
        300: "#f09897",
        400: "#ea6e6d",
        500: "#e1302f",
        600: "#b42626",
        700: "#871d1c",
        800: "#5a1313",
        900: "#160505",
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
    'prettier-plugin-tailwindcss'
  ],
}
