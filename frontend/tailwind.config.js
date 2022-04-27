module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pangolin: ["Pangolin", "cursive"],
      },
      width: {
        '128': '32rem',
        '1': '320px;',
      }, 
      height: {
        '21': '85px',
        '1': '213px',
      },
      padding: {
        '20': '20%',
      }
    },
  },
  plugins: [require("daisyui")],
}
