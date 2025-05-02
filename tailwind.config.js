module.exports = {
  mode: 'jit', // Ensure JIT mode is enabled
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  // ...
}