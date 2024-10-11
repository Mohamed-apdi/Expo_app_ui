/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Include your main App file
    "./components/**/*.{js,jsx,ts,tsx}", // Include all files in the components folder
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

