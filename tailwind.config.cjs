// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
  colors: {
     accent: "#3B82F6",   // matches IG reel warm-peach tone
   },
    fontFamily: {
    sans: ["Inter", "ui-sans-serif", "system-ui"]
  }
 }

  },
  plugins: []
}
