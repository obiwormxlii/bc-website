/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#1c75bc',
        'secondary': '#f7941e',
      },

      fontFamily: {
        'Marcellus': ['Marcellus', 'sans-serif'],
        'sans': ['"Red Hat Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

