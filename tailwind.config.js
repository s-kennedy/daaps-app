module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
     '96': '24rem',
    },
    colors: {
      transparent: 'transparent',
      yellow: '#F1E297',
      pink: '#FCEEF4',
      green: '#004B55',
      purple: '#7860f7',
      black: '#000',
      white: '#fff',
      gray: '#C4C4C4',
      light: '#f2f6f6',
    },
    fontFamily: {
      'sans': ['Jost Var', 'Jost', 'ui-sans-serif', 'system-ui'],
      'serif': ['Plastic Var', 'Plastic', 'ui-serif', 'Georgia'],
      'sans-bold': ['Jost Bold', 'ui-sans-serif', 'system-ui'],
    },
    boxShadow: {
      tabs: '0 2px 6px rgba(0,0,0,0.35)',
      none: 'none',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
