/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azulSenac: '#181c49',
        laranjaSenac: '#f29100',
      },
    },
  },
  plugins: [],
}
