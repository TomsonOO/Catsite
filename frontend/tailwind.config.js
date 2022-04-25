module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pangolin: ["Pangolin", "cursive"],
      },
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [require("daisyui")],
}
