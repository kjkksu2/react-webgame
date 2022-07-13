const path = require("path");
const webpack = require("webpack");

module.exports = {
  name: "WordRelay",
  mode: "development", // production
  devtool: "eval", // hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          // -> plugin들의 모음이 preset
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["> 5% in KR", "last 2 chrome versions"] },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
};
