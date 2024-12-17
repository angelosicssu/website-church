import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'blue': {
          950: '#292B4B',
          900: '#1D0072',
          800: '#381B8E',
          700: '#1E00FF',
          600: '#0435E7',
          500: '#466EFF',
          300: '#77CAF8',
        },
        'orange': {
          500: '#FDA402'
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
      
    },
  },
  plugins: [],
} satisfies Config;
