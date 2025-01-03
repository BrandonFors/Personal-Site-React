/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#fc9e19',
        blue: '#00ADB5',
        proficient: '#34D399', 
        intermediate: '#FBBF24', 
        learning: '#9CA3AF', 
      },
      fontFamily: {
        chakra: ['"Chakra Petch"', 'sans-serif'],
      },
      animation: {
        blink: 'blink 0.7s steps(2) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-proficient',
    'bg-intermediate',
    'bg-learning',
  ],
}

