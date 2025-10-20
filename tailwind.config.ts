import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        surface: 'var(--color-surface)',
        'surface-hover': 'var(--color-surface-hover)',
        accent: 'var(--color-accent)',
        primary: 'var(--color-primary)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
      boxShadow: {
        card: '0 4px 16px hsla(217, 91%, 10%, 0.24)',
        elevated: '0 8px 32px hsla(217, 91%, 10%, 0.32)',
        glow: '0 0 24px hsla(217, 91%, 60%, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
