import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefaff',
          100: '#d6f1ff',
          200: '#b0e4ff',
          300: '#79d1ff',
          400: '#38b6ff',
          500: '#0097ea',
          600: '#0077c4',
          700: '#075f99',
          800: '#0e4e79',
          900: '#103f61',
        },
        dark: '#0b1220'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1024px',
          xl: '1200px',
          '2xl': '1400px'
        }
      }
    },
  },
  plugins: [],
}
export default config
