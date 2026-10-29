module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', surface: 'var(--surface)', 'surface-2': 'var(--surface-2)', ink: 'var(--ink)', muted: 'var(--muted)', line: 'var(--line)',
        brand: 'var(--brand)', 'brand-text': 'var(--brand-text)', 'brand-soft': 'var(--brand-soft)',
        accent: 'var(--accent)', 'accent-soft': 'var(--accent-soft)', gold: 'var(--gold)', 'gold-soft': 'var(--gold-soft)', ok: 'var(--ok)', 'ok-soft': 'var(--ok-soft)', warn: 'var(--warn)', 'warn-soft': 'var(--warn-soft)', danger: 'var(--danger)', 'danger-soft': 'var(--danger-soft)',
      },
      fontFamily: { sans: ['ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'] },
      boxShadow: { card: '0 1px 2px rgba(15,31,51,.06), 0 4px 16px rgba(15,31,51,.05)' },
    },
  },
  plugins: [],
};
