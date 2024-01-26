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
        },
      },
    },
  },
  plugins: [],
}
export default config
