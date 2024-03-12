/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "index.html",
//     "./src/**/*.js,ts,jsx,tsx",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  purge: ["index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

