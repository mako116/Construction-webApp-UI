/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40paoloabate%2Ftypes-of-construction-projects-4b9f21cce218&psig=AOvVaw2L54Ty3CNvKwFOGXdOXT0G&ust=1719481698471000&source=images&opi=89978449')",
      },
    }, 
  },
  plugins: [],
   
}