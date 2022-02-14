module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: '#f5f6ff',
          100: '#c9ccef',
          200: '#a1a6e0',
          300: '#7e85d0',
          400: '#5f68c1',
          500: '#3640a0',
          600: '#1c2580',
          700: '#0c1460',
          800: '#03093f',
          900: 'var(--color-primary)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: '#fff8e5',
          100: '#ffebb7',
          200: '#ffde89',
          300: '#ffd15c',
          400: '#ffc42e',
          500: 'var(--color-secondary)',
          600: '#d39700',
          700: '#a67700',
          800: '#7a5700',
          900: '#4d3700',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
