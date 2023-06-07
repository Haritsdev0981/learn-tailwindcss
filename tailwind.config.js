/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./inde.html"],
  darkMode: 'class',
  theme: {
      extend: {
          spacing: {
              13: '3.25rem',
          },
          fontFamily: {
              plusjakartasans: ['Plus Jakarta Sans'],
          },
          animation: {
              'spin-slow': 'spin 3s linear infinite',
              'bounce-slow': 'bounce 3s infinite',
              goyang: 'wiggle 1s ease-in-out infinite'
          },
          keyframes: {
              wiggle: {
                  '0%, 100%': {
                      transform: 'rotate(-3deg)'
                  },
                  '50%': {
                      transform: 'rotate(3deg)'
                  }
              },
          },
      },
  },
  plugins: [],
}

