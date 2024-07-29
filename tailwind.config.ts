import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      theme: "#f8f7f6",
      rose: "#fda4af",
      blue: "#60a5fa",
    },
    extend: {
      fontFamily: {
        dance: ["var(--font-dance)"],
        open: ["var(--font-open)"],
      },
      backgroundImage: {
        flowers: "url('/images/gipsowka.jpg')",
        mrmrs: "url('/images/mrmrs.jpg')",
        photos: "url('/images/photos.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
