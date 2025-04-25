import type { Config } from 'tailwindcss';

const isProd = process.env.NODE_ENV === 'production';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Option purge legacy pour Tailwind v2, activé en production
  // Si vous utilisez Tailwind v3+, cette option est ignorée
  purge: isProd
    ? {
        enabled: true,
        content: [
          './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
          './src/components/**/*.{js,ts,jsx,tsx,mdx}',
          './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        ],
        options: {
          safelist: [],
        },
      }
    : false,
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#090E34',
        dark: '#1D2144',
        primary: '#4A6CF7',
        yellow: '#FBB040',
        'body-color': '#959CB1',
        stroke: '#D7DFFF',
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        image: '0px 3px 30px rgba(9, 14, 52, 0.1)',
        pricing: '0px 34px 68px rgba(0, 0, 0, 0.06)',
        testimonial: '0px 8px 40px -10px rgba(9, 14, 52, 0.1)',
        service: '0px 11px 41px -11px rgba(9, 14, 52, 0.1)',
        blog: '0px 40px 150px -35px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
