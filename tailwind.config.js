module.exports = {
  mode: 'jit', // Ensure JIT mode is enabled
  theme: {
    screens: {
      'sm': {'max': '750px'},  // Phones: 0px -> 767px
      // 'md': {'min': '768px', 'max': '1023px'}, // Tablets
      'lg': {'min': '751px', 'max': '1920px'}, // Desktops and above
    },
  },
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  // ...
}
