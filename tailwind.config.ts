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
        "dark-blue": "hsl(249, 10%, 26%)",
        "grayish-blue": "hsl(246, 25%, 77%)",
        blue: "hsl(248, 32%, 49%)",
        red: "hsl(0, 100%, 74%)",
        green: "hsl(154, 59%, 51%)"
      },
    },
    screens: {
      "900px": "900px",
      "680px": "680px",
      "580px": "580px"
    }
  },
  plugins: [],
};
export default config;
