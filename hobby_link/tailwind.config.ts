import type { Config } from "tailwindcss";

const config: Config = {
  content: ["**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
    },
    fontSize: {
      h1: [
        "44px",
        {
          lineHeight: "1.3",
          letterSpacing: "-1.272px",
          fontWeight: "700",
        },
      ],
      h2: [
        "32px",
        {
          lineHeight: "1.3",
          letterSpacing: "-0.787px",
          fontWeight: "700",
        },
      ],
      h3: [
        "24px",
        {
          lineHeight: "1.4",
          letterSpacing: "-0.552px",
          fontWeight: "700",
        },
      ],
      h4: [
        "20px",
        {
          lineHeight: "1.3",
          letterSpacing: "-0.024px",
          fontWeight: "700",
        },
      ],
      subtitle1: [
        "18px",
        {
          lineHeight: "1.35",
          letterSpacing: "-0.036px",
          fontWeight: "600",
        },
      ],
      subtitle2: [
        "16px",
        {
          lineHeight: "1.35",
          letterSpacing: "0.091px",
          fontWeight: "600",
        },
      ],
      subtitle3: [
        "14px",
        {
          lineHeight: "1.4",
          letterSpacing: "0.028px",
          fontWeight: "600",
        },
      ],
      subtitle4: [
        "12px",
        {
          lineHeight: "1.4",
          letterSpacing: "0.072px",
          fontWeight: "600",
        },
      ],
      body1: [
        "16px",
        {
          lineHeight: "1.6",
          letterSpacing: "-0.056px",
          fontWeight: "500",
        },
      ],
      body2: [
        "15px",
        {
          lineHeight: "1.6",
          letterSpacing: "0.054px",
          fontWeight: "400",
        },
      ],
      body3: [
        "14px",
        {
          lineHeight: "1.6",
          letterSpacing: "0.028px",
          fontWeight: "400",
        },
      ],
      body4: [
        "13px",
        {
          lineHeight: "1.6",
          letterSpacing: "0.078px",
          fontWeight: "400",
        },
      ],
      body5: [
        "12px",
        {
          lineHeight: "1.6",
          letterSpacing: "0.072px",
          fontWeight: "normal",
        },
      ],
      button1: [
        "15px",
        {
          lineHeight: "1.6",
          letterSpacing: "normal",
          fontWeight: "500",
        },
      ],
      button2: [
        "14px",
        {
          lineHeight: "1.6",
          letterSpacing: "normal",
          fontWeight: "500",
        },
      ],
      button3: [
        "12px",
        {
          lineHeight: "1.6",
          letterSpacing: "normal",
          fontWeight: "500",
        },
      ],
      caption1: [
        "12px",
        {
          lineHeight: "1.4",
          letterSpacing: "normal",
          fontWeight: "500",
        },
      ],
      caption2: [
        "11px",
        {
          lineHeight: "1.4",
          letterSpacing: "normal",
          fontWeight: "600",
        },
      ],
    },
    colors: {
      primary: {
        main: "#356EFB",
        contrastText: "#FFFFFF",
      },
      warning: {
        main: "#FF4853",
      },
      secondary: {
        main: "#F1F3F5",
        contrastText: "#7B848D",
      },
      gray: {
        "50": "#F8F9FA",
        "100": "#F1F3F5",
        "200": "#DFE4EA",
        "300": "#C9CFD6",
        "400": "#AAB2B9",
        "500": "#7B848D",
        "600": "#4D5359",
        "700": "#3A4046",
        "800": "#2C3136",
        "900": "#1F2124",
        "1000": "#17181A",
      },
      black: "#17181A",
      white: "#FFFFFF",
      blue: {
        "50": "#E8F3FF",
        "100": "#C9E2FF",
        "200": "#90C2FF",
        "500": "#356EFB",
        "600": "#2058D9",
        "800": "#1A367B",
      },
      green: {
        "500": "#2BDB56",
      },
      red: {
        "500": "#FF4853",
      },
      purple: {
        "300": "#9D7CFF",
        "500": "#6D24FF",
      },
    },
  },
  plugins: [],
};
export default config;
