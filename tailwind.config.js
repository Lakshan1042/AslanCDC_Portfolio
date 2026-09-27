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
          gold: {
            DEFAULT: '#FDE047',
            dark: '#FACC15',
            light: '#FEF08A',
            soft: '#FEF9C3',
            pale: '#FEFCE8',
          },
          blue: {
            DEFAULT: '#38BDF8',
            dark: '#0EA5E9',
            light: '#7DD3FC',
            soft: '#E0F2FE',
            pale: '#F0F9FF',
          },
          mint: {
            DEFAULT: '#34D399',
            dark: '#10B981',
            light: '#6EE7B7',
            soft: '#D1FAE5',
            pale: '#ECFDF5',
          },
          coral: {
            DEFAULT: '#FCA5A5',
            dark: '#F87171',
            light: '#FECACA',
            soft: '#FEE2E2',
            pale: '#FFF1F1',
          },
          cream: {
            DEFAULT: '#FFFDF9',
            light: '#FFFFFF',
            dark: '#F7F2EA',
          },
          charcoal: {
            DEFAULT: '#1E293B',
            muted: '#475569',
            light: '#64748B',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'aslan-card': '0 8px 25px -4px rgba(245, 184, 25, 0.12), 0 4px 10px -2px rgba(2, 132, 199, 0.05)',
        'aslan-hover': '0 16px 36px -6px rgba(245, 184, 25, 0.2), 0 6px 16px -3px rgba(2, 132, 199, 0.08)',
        'aslan-gold-glow': '0 0 25px rgba(245, 184, 25, 0.4)',
        'aslan-blue-glow': '0 0 25px rgba(2, 132, 199, 0.35)',
      }
    },
  },
  plugins: [],
}


