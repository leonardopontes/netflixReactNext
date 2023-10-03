/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      inset: {
        '5px': '5px',
        '10px': '10px',
        '15px': '15px',
        '30px': '30px',
        '60px': '60px',
        '580px': '580px',
      },
      screens: {
        sx: "1px",
        fx: "410px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        ms: "960px",
        md: "1060px",
        lg: "1260px",
        xl: "1700px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
