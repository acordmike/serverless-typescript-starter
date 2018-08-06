const slsw = require("serverless-webpack");
/**
 * Webpack is used to bundle, minimize and transpile the functions
 */

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  devtool: slsw.lib.webpack.isLocal ? 'cheap-eval-source-map' : 'source-map',
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  optimization: {
    // minimizing the output reduces size of function and speeds cold starts
    minimize: true
  }
};
