/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        default: '#243c5a',
      },
      transitionProperty: {
        duration: '300ms',
      },
      keyframes: {
        unfold: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        animation: {
          unfold: 'unfold 1s ease-in-out',
        },
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1366px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1100px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '900px' },
      // => @media (max-width: 767px) { ... }
      smd: { max: '767px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '565px' },
      // => @media (max-width: 639px) { ... }
      esm: { max: '300px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}
