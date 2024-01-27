import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scale: {
        '-1': '-1',
      },
      colors: {
        primary: {
          700: '#344054',
          500: '#667085',
          400: '#98A2B3',
        },
      },
      backgroundImage: (theme) => ({
        'custom-gradient':
          'linear-gradient(to right, #2F5478 100%, #22405C 100%)',
      }),
    },
  },
  plugins: [],
}
export default config
