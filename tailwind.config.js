module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray:{
          "mw-50":"#181921",
          "mw-100":"#393A4B",
          "mw-200":"#858699",
          "mw-300":"#313248",
          "mw-400":"#292B41",
          "mw-500":"#2F303A",
          "mw-600":"#21232E",
          "mw-700":"#292A35",
          "mw-800":"#212234",
        },
        blue:{
          "mw-100": "#575BC7"
        }
      },
      fontSize: {
        '13': '13px',  
      },
    },
  },
  plugins: [],
};
