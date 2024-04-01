/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        themeColor: {
          pokeblue: 'var(--pokeblue)',
          pokedrkblue: 'var(--pokedrkblue)',
          pokeyellow: 'var(--pokeyellow)',
          pokeyellowshadow: 'var(--pokeyellowshadow)',
        }
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
      borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
      textColor: ['dark', 'dark-hover', 'dark-active'],
      boxShadow: ['dark', 'dark-hover', 'dark-focus', 'dark-active', 'dark-group-hover'],
    },
  },
}
