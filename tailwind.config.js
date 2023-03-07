/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'active': '#5865F2',
      'inactive': '#313338',
      'grey': '#404249',
      'dark': '#1E1F22',
      'direct-message': '#2B2D31',
      'text-default': '#989aa2',
      'text-white': '#F3F4F5',
      'online': '#23A55A',
      'input': '#383A40',
      'placeholder': '#52545B',
      'active-green': '#23A559',
    },
    fontFamily: {
      gg: ["gg-sans"],
      gg_bold: ["gg-bold"],
      gg_default: ["gg-default"],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
