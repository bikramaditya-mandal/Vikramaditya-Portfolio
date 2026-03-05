import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        bg:      '#0d0d0d',
        'bg-2':  '#141414',
        'bg-3':  '#1a1a1a',
        accent:  '#c8a96e',
        'accent-2': '#4a7fa5',
        muted:   '#8a8680',
        cream:   '#e8e4dc',
        white: '#ffffff'
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
}
export default config
