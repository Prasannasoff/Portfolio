/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif']
      },
      keyframes: {

        'move-down': {
          '0%': { opacity: 0, transform: 'translateY(-100px)' },
          '100%': {
            opacity: 1, transform: 'translateY(0)'
          }
        },
        'move-up': {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '100%': {
            opacity: 1, transform: 'translateY(0)'
          }
        },
        'movement': {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '50%': { opacity: 1, transform: 'translateY(-10px)' },

          '100%': {
            opacity: 1, transform: 'translateY(0)'
          }
        },
        'cont-left': {
          '0%': { opacity: 0, transform: 'translateX(-100vw)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'cont-right': {
          '0%': { opacity: 0, transform: 'translateX(100vw)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        'rotate': {
          '0%': {
            transform: 'rotate(0deg)'

          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        'light': {
          '0%': { opacity: 0, transform: 'translate(0)' },
          '50%': { opacity: 1 },
          '70%': { opacity: 1 },

          '100%': {
            opacity: 0,
            transform: 'translate(80vw,100vh)'
          }
        },
      },
      animation: {
        'move-down': 'move-down 2s ease forwards',
        'move-up': 'move-up 2s ease forwards',

        'movement': 'movement 1.5s ease infinite',

        'rotate': 'rotate 8s linear infinite',
        'light': 'light 10s ease infinite',
        'cont-left': 'cont-left 2s ease forwards',
        'cont-right': 'cont-right 2s ease forwards',



      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-75': {
          'animation-delay': '75ms',
        },
        '.animation-delay-500': {
          'animation-delay': '500ms',
        },
        '.animation-delay-1200': {
          'animation-delay': '1200ms',
        },
        '.animation-delay-2300': {
          'animation-delay': '2300ms',
        },
        '.animation-delay-4000': {
          'animation-delay': '4000ms',
        },
        '.animation-delay-5000': {
          'animation-delay': '5000ms',
        },
        '.animation-delay-6500': {
          'animation-delay': '6500ms',
        },
        '.animation-delay-7800': {
          'animation-delay': '7800ms',
        },
        '.animation-delay-8800': {
          'animation-delay': '8800ms',
        },
        '.animation-delay-9800': {
          'animation-delay': '9800ms',
        },
        '.animation-delay-10800': {
          'animation-delay': '10800ms',
        },
      }, ['responsive', 'hover']);
    },
  ],
}

