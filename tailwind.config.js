export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        montessori: {
          beige: {
            50: "#faf8f5",
            100: "#f5f1ea",
            200: "#ebe3d5",
            300: "#dfd3bd",
            400: "#d4c3a5",
            500: "#c8b38d", // Warm beige
            600: "#b39977",
            700: "#8f7a5f",
            800: "#6b5b47",
            900: "#473c2f",
          },
          terracotta: {
            50: "#faf5f4",
            100: "#f5ebe9",
            200: "#e8d4ce",
            300: "#dbbdb3",
            400: "#cfa698",
            500: "#c28f7d", // Muted terracotta
            600: "#a87566",
            700: "#865d51",
            800: "#64463d",
            900: "#422f28",
          },
          sage: {
            50: "#f6f8f6",
            100: "#edf1ed",
            200: "#d8e2d8",
            300: "#c3d3c3",
            400: "#aec4ae",
            500: "#99b599", // Sage green
            600: "#7f9a7f",
            700: "#657b65",
            800: "#4c5c4c",
            900: "#323d32",
          },
          dusty: {
            50: "#f5f7f9",
            100: "#ebeff3",
            200: "#d3dde7",
            300: "#bacbdb",
            400: "#a2b9cf",
            500: "#89a7c3", // Dusty blue
            600: "#6f8ba6",
            700: "#596f85",
            800: "#435364",
            900: "#2c3743",
          },
          mustard: {
            50: "#faf8f3",
            100: "#f5f1e7",
            200: "#e9e0c7",
            300: "#ddcea7",
            400: "#d1bd87",
            500: "#c5ab67", // Soft mustard
            600: "#a78f54",
            700: "#857243",
            800: "#635532",
            900: "#423821",
          },
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Nunito"', "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "gentle-bounce": "gentleBounce 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        gentleBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
