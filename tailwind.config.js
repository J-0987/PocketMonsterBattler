/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  darkMode: 'class',
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



}



// Pokemon colours
//Pokémon Dark Blue: Hex: #3c5aa6, RGB: 60, 90, 166
// Pokémon Yellow Shadow: Hex: #c7a008 RGB: 199, 160, 8
// Pokémon Light Blue: Hex: #2a75bb  RGB: 42, 117, 187
// Pokémon Yellow : Hex: #ffcb05 RGB: 255, 203, 5







