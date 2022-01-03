module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  jit: true,
  content: [],
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
