/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0F1115',
        panel: '#171A22',
        panelAlt: '#1C202A',
        gold: '#22C55E',
        amber: '#3B82F6',
        green: '#16A34A',
        textMuted: '#8D95A8',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.28)',
      },
      borderRadius: {
        xl2: '1.125rem',
      },
    },
  },
  plugins: [],
};
