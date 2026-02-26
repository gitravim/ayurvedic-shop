/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: '#F5E6BE',
        sepia: '#704214',
        'sepia-light': '#9B6B35',
        'sepia-dark': '#4A2A0A',
        forest: '#228B22',
        'forest-dark': '#1A6B1A',
        amber: '#FFBF00',
        'amber-dark': '#CC9900',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'amber-glow': '0 0 20px rgba(255, 191, 0, 0.3)',
        'amber-hover': '0 0 35px rgba(255, 191, 0, 0.5)',
        frame: '0 4px 24px rgba(112, 66, 20, 0.15), inset 0 1px 0 rgba(255,255,255,0.4)',
      },
      backgroundImage: {
        parchment: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
