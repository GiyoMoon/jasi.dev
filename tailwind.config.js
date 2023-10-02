import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Onest', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              fontWeight: '500',
            },
            h1: {
              fontSize: '24px',
              fontWeight: '900',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
