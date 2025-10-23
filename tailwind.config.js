/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          bg: '#FFFFFF',
          surface: '#F9FAFB',
          primary: '#4F46E5',
          secondary: '#6B7280',
          text: '#111827',
        },
        // Dark mode colors
        dark: {
          bg: '#0F1117',
          surface: '#1A1D29',
          primary: '#6366F1',
          secondary: '#9CA3AF',
          text: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-light': '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        'card-dark': '0 1px 3px 0 rgb(0 0 0 / 0.4)',
      },
    },
  },
  plugins: [],
}
