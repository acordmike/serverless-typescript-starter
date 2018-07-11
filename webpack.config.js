const slsw = require("serverless-webpack");

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  devtool: slsw.lib.webpack.isLocal ? 'cheap-eval-source-map' : 'source-map',
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  optimization: {
    minimize: true
  }
};
