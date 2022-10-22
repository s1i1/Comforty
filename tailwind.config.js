/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter'],
      dmSans: ['DM Sans'],
      poppins: ['Poppins'],
    },
    colors: {
      black: '#272343',
      white: '#ffffff',
      offWhiteF: '#F0F2F3',
      offWhiteE: '#E1E3E5',
      gray: '#9A9CAA',
      darkGray: '#636270',
      darkAccents: '#007580',
      accents: '#029FAE',
      green: '#01AD5A',
      orange: '#F5813F',
      red: '#F05C52',
    },
    extend: {},
  },
  plugins: [],
};
