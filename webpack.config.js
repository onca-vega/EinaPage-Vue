const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./app/app.js"
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"    // Setting vue mode
    }
  },
  devServer: {
    contentBase: "./app",
    port: 4200
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [ "vue-loader" ]
      },
      {
        test: /\.js$/,
        exclude: [
          /\.spec\.js$/,
          /node_modules/
        ],
        use: [
          {
            loader: 'istanbul-instrumenter-loader',
            query: { esModules: true }
          },
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ]
};
