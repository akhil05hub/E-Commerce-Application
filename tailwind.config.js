/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'roboto': ['Roboto', 'sans-serif'],
          'open-sans': ['Open Sans', 'sans-serif'],
          'lora': ['Lora', 'serif'],
          'playfair': ['Playfair Display', 'serif'],
          'merriweather': ['Merriweather', 'serif']
        }
  
    },
  },
  plugins: [],
}
}
