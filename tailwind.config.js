/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bkg-header': "url('./resources/design-assets/bgk-header.png')",
        'bkg-middle': "url('./resources/design-assets/bgk-middle.png')",
        'bkg-footer': "url('./resources/design-assets/bgk-footer.png')",
      }
    },
  },
  plugins: [],
}
