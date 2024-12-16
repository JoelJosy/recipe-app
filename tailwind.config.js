/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  daisyui: {
    themes: ["light", "dark", "aqua"], 
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

