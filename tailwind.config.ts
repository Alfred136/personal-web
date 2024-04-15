import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        heading: 'Pixelify Sans, sans-serif',
        subHeading: 'VT323, sans-serif'
      },
      colors: {
        midnight: '#272744',
        night: '#494d7e',
        evening: '#8b6d9c',
        sunset: '#c69fa5',
        afternoon: '#f2d3ab',
        morning: '#fbf5ef'
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1440px',
        xxl: '1700px'
      }
    }
  },
  plugins: []
};
export default config;
