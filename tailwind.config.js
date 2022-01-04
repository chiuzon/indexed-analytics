module.exports = {
  content: [
    "./index.html",    
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  jit: true,
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      'cyberpunk'
    ]
  }
}
