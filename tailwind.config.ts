import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        dark: '#000000',
        whitesecond: '#f9f9f9',
        secondblack: '#171717',
        textwhite: '#ffffff', 
        textblack: '#000000',
      },
      screens: {
        'tb': '800px',
        'mob': '560px',
        'mini': '460px',
      },
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      addUtilities({
        '.scrollbar-none': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
        '.scrollbar-none::-webkit-scrollbar': {
          'display': 'none',
        },
      })
    },
  ],
};
export default config;
