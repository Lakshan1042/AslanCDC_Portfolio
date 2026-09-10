/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aslan: {
          teal: {
            DEFAULT: '#176B68',
            dark: '#115250',
            light: '#218985',
            soft: '#EBF3F2',
          },
          sage: {
            DEFAULT: '#7FAE9B',
            light: '#A4C9B9',
            soft: '#EFF6F3',
          },
          cream: {
            DEFAULT: '#F8F5EF',
            light: '#FCFAF6',
            dark: '#EEE8DD',
          },
          peach: {
            DEFAULT: '#F3C7B5',
            light: '#F9DDD3',
            soft: '#FDF4F0',
          },
          charcoal: {
            DEFAULT: '#243333',
            muted: '#4D6161',
            light: '#7B8F8F',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'aslan-card': '0 4px 20px -2px rgba(23, 107, 104, 0.05), 0 2px 6px -1px rgba(36, 51, 51, 0.03)',
        'aslan-hover': '0 12px 32px -4px rgba(23, 107, 104, 0.09), 0 4px 12px -2px rgba(36, 51, 51, 0.04)',
      }
    },
  },
  plugins: [],
}
