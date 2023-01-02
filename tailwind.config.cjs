/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    colors: {
      primary: "#D0D6F9",
      white: "#FFFFFF",
      black: "#0B0D17",
    },
    extend: {
      backgroundImage: {
        "home-desktop": "url('./assets/home/background-home-desktop.jpg')",
        "home-tablet": "url('./assets/home/background-home-tablet.jpg')",
        "home-mobile": "url('./assets/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('./assets/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('./assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('./assets/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('./assets/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('./assets/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('./assets/crew/background-crew-mobile.jpg')",
        "technology-desktop":
          "url('./assets/technology/background-technology-desktop.jpg')",
        "technology-tablet":
          "url('./assets/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('./assets/technology/background-technology-mobile.jpg')",
      },
      fontSize: {
        "150px": ["150px", "172px"],
        "100px": ["100px", "115px"],
        "56px": ["56px", "64px"],
        "32px": ["32px", "37px"],
        "28px": ["28px", "32px"],
        sm: [
          "14px",
          {
            letterSpacing: "2.35px",
            lineHeight: "17px",
          },
        ],
        base: [
          "16px",
          {
            letterSpacing: "2.7px",
            lineHeight: "19px",
          },
        ],
      },
      fontFamily: {
        "barlow-Condensed": ["Barlow Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
