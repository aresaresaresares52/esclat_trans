import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#f2dd20',
          blue: '#29abe2',
          purple: '#7b2fbf',
          green: '#58b61f',
          black: '#111111',
        },
      },
    },
  },
} satisfies Config;
