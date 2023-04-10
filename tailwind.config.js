/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    mytheme: {
          
      "primary": "#87c5d3",
               
      "secondary": "#7E90FE",
               
      "accent": "#ed15e2",
               
      "neutral": "#1C1F22",
               
      "base-100": "#392E4D",
               
      "info": "#A4CAEA",
               
      "success": "#2FC67A",
               
      "warning": "#EC8918",
               
      "error": "#F95939",
               },
  },
 plugins: [require("daisyui")],
}

