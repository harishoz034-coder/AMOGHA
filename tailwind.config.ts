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
        // Luxury White / Light Backgrounds
        alabaster: {
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F5EFE6',
          300: '#EFE5D7',
          400: '#E5D6C2',
        },
        ivory: {
          50: '#FAF7F2',
          100: '#F5EBDD',
          200: '#EADBCA',
          300: '#D8C5AE',
          400: '#C5AF93',
        },
        // Deep Espresso & Charcoal Text
        charcoal: {
          950: '#140F0E',
          900: '#1A1412',
          850: '#231B18',
          800: '#2C221E',
          700: '#3D312C',
          600: '#54443E',
          500: '#6E625C',
          400: '#8C8079',
          300: '#AEA49D',
          200: '#D1C9C3',
          100: '#EBE6E2',
        },
        // Rich Burgundy / Wine-Red Brand Accent (inspired by Amogha signage)
        burgundy: {
          50: '#FDF2F3',
          100: '#FBE4E6',
          200: '#F7CBD0',
          300: '#F0A5AF',
          400: '#E37382',
          500: '#9B1B2D',
          600: '#7E1725',
          700: '#63111C',
          800: '#4D0C15',
          900: '#38080E',
        },
        // Warm Terracotta Accent
        terracotta: {
          400: '#C45747',
          500: '#A63B2E',
          600: '#8A2D22',
          700: '#6F2118',
        },
        // Antique Gold Accent
        gold: {
          100: '#F7EED9',
          200: '#EEDBAB',
          300: '#E5C77D',
          400: '#D4AF37',
          500: '#C5A05A',
          600: '#A6823F',
          700: '#80622C',
        },
        // Pure Veg Green Leaf
        pureVeg: {
          50: '#EBF7EE',
          100: '#D2EFD7',
          500: '#1B8738',
          600: '#136B2B',
          700: '#0E501F',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 10px 30px -5px rgba(126, 23, 37, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        card: '0 4px 20px -2px rgba(44, 34, 30, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        cardHover: '0 16px 36px -4px rgba(126, 23, 37, 0.12), 0 6px 16px -2px rgba(0, 0, 0, 0.04)',
        glow: '0 0 25px -5px rgba(197, 160, 90, 0.25)',
        burgundyGlow: '0 0 25px -5px rgba(126, 23, 37, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
