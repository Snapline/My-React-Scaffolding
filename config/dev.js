const { DefinePlugin } = require("webpack");
module.exports  = {
  plugins: [
    new DefinePlugin({
      "process.env.BASE_URL": JSON.stringify('https://catfact.ninja'),
    }),
  ]
};
