/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366F1',
          dark: '#818CF8',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0A0B0F',
        },
        surface: {
          light: '#F9FAFB',
          dark: '#13151D',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1A1D29',
        },
        text: {
          primary: {
            light: '#111827',
            dark: '#F9FAFB',
          },
          secondary: {
            light: '#6B7280',
            dark: '#9CA3AF',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
