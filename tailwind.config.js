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
    extend: {
      spacing: {
        4.5: '1,125rem',
      },
      padding: {
        3.5: '0.875rem',
      },
      dropShadow: {
        '1md': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        '1md': '0 4px 4px rgba(0, 0, 0, 0.25)',
        '2green': '0 2px 0px #038053',
        '2md': '0px 8px 40px rgba(39, 35, 67, 0.08)',
        '3green': 'inset 2px 0px 0px #029FAE',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        '.underlineAccents': {
          textDecoration: 'underline',
          'text-decoration-color': '#029FAE', //accents color
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
