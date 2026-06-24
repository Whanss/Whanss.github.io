/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Tema gelap portfolio (dipertahankan dari versi lama)
      colors: {
        // Background utama & surface
        ink: {
          900: '#0f0f0f', // background terdalam
          800: '#121212', // background body (lama)
          700: '#1a1a1a', // surface
          600: '#1e1e1e', // footer / navbar (lama)
        },
        // Text
        bone: {
          DEFAULT: '#e0e0e0', // text utama (lama)
          light: '#f0f0f0',   // text terang
          muted: '#9ca3af',   // text sekunder/abu
        },
        // Accent orange (dipertahankan dari versi lama #ff5722)
        ember: {
          DEFAULT: '#ff5722', // accent utama
          light: '#ff7849',   // hover
        },
      },
      fontFamily: {
        // Montserrat di-load via <link> di index.html
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        move: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(30px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        grow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'spin-reverse': {
          to: { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        move: 'move 3s ease-in-out infinite',
        grow: 'grow 8s linear forwards',
        'spin-reverse': 'spin-reverse 1s linear infinite',
      },
    },
  },
  plugins: [],
}
