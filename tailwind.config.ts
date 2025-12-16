import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        accent: '#4F46E5',
        'accent-hover': '#4338CA',
      },
      screens: {
        mac: { min: "1280px", max: "1440px" },
      },
    },
  },
};
