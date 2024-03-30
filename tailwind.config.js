/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle ease-out 0.4s',
      },
      keyframes: {
        wiggle: {
          '0%, 20%, 40%, 60%, 80%': { transform: 'rotate(-0.8deg)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(0.8deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};
