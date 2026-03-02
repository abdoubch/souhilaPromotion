/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a5f',
          dark: '#152d47',
          light: '#2d5380',
        },
        accent: {
          DEFAULT: '#c41e3a',
          dark: '#a01830',
          light: '#d63851',
        },
      },
    },
  },
  plugins: [],
};
