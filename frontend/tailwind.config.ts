import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#51759D',
          dark: '#E6ECF2',
        },
        background: '#51759D',
        text: '#E6ECF2',
      },
    },
  },
  plugins: [],
};
export default config;