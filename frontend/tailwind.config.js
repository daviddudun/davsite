/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0b0f14',
        steel: '#0f1821',
        mist: '#cbd5f5',
      },
    },
  },
  plugins: [],
}
