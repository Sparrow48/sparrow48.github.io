import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        myFont: ['Yantramanav', 'sans-serif'],
        jetBrains: ['JetBrains Mono', 'monospace'],
        robotoSerif: ['Roboto Serif', 'serif'],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#0D001A',
            foreground: '#ffffff',
          },
        },
      },
    }),
  ],
};
export default config;
