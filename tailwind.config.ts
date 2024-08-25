import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#39DC53",
        secondary: "#F4F4F4",
        subText: "#686868",
        secondaryButton: "#E5E5E5",
        footer: "#373737",
        starPrimary: " #FF971D",
        starSecondary: "#DEDEDE",
        imageBg: "#F2F2F2",
        darkGreen: "#108422",
        pagination_button: "#F5F5F5",
        pagination_disable_button: "#D9D9D9",
        footerText: "#7B7B7B",
      },
    },
  },
  plugins: [],
};
export default config;
