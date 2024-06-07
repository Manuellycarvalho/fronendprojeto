/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors:{
        gray: {
          50: '#F9FAFB', // Cinza mais claro
          100: '#F5F5F5', // Cinza claro
          200: '#EEEEEE', // Cinza claro médio
          300: '#D6D6D6', // Cinza médio
          400: '#BDBDBD', // Cinza médio escuro
          500: '#888888', // Cinza escuro
          600: '#717171', // Cinza escuro médio
          700: '#555555', // Cinza mais escuro
          800: '#333333', // Cinza muito escuro
          900: '#1A1A1A', // Cinza quase preto
        },
        purple: {
          400: '#8A2BE2', // Roxo médio
          600: '#5F04B4', // Roxo mais escuro
        },
        white: "#ffffff",
        red: "#ED3A5A"
      },
      fontFamily:{
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      backgroundImage:{
          "img-blue": "url('/scr/assets/bg.svg')"
      },
    },
  },
  plugins: [],
}
