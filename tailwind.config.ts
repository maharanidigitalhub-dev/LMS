import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mdh: {
          dark:    '#3B3A39',
          blush:   '#EDD7D2',
          terra:   '#D8A299',
          gold:    '#CBB279',
          rose:    '#C4907F',
          cream:   '#FAF7F4',
          warm:    '#F5EDE8',
          mid:     '#8A8785',
          border:  '#E0D8D5',
        },
        meta: {
          blue:  '#1877F2',
          dark:  '#0D47A1',
          light: '#E8F0FE',
        },
        tiktok: {
          black: '#010101',
          pink:  '#FE2C55',
          cyan:  '#25F4EE',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
