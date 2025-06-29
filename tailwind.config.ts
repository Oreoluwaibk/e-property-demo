import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        tablet: "700px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionProperty:{
        'max-height': 'max-height'
      },
      colors: {
        pBlue: "#2A4BA0",
        background: "#F2F4F7",
        buttons: "#FBBF24",
        success: "#10B981",
        headText: "#1F2937",
        paragraphText: "#6B7280",
        linkText: "#363E48",
        headerLink: "#373737",
        danger: "#EF4444",
        default: "#FAFAFA"
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      }
    },
  },
  plugins: [],
};
export default config;
