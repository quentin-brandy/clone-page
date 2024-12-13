/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "hsl(var(--primary)/<alpha-value>)",
        secondary:"hsl(var(--secondary)/<alpha-value>)",
        "secondary-dark":"hsl(var(--secondary-dark)/<alpha-value>)",
        logo:"hsl(var(--logo)/<alpha-value>)",
        support:"hsl(var(--support)/<alpha-value>)",
        lightgrey: "hsl(var(--light-grey)/<alpha-value>)",
        lightblue: "hsl(var(--light-blue)/<alpha-value>)",
      },
      fontFamily: {
        custom: ['Museo-Sans', 'sans-serif'],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(20, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}
