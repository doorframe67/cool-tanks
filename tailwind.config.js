/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gaming-dark': '#0a0e27',
        'gaming-darker': '#05070f',
        'gaming-accent': '#ff6b35',
        'gaming-accent-alt': '#f7931e',
        'gaming-blue': '#00d9ff',
        'gaming-purple': '#7c3aed',
      },
      fontFamily: {
        'gaming': ['Orbitron', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'gaming-glow': '0 0 20px rgba(255, 107, 53, 0.5)',
        'gaming-glow-blue': '0 0 20px rgba(0, 217, 255, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
