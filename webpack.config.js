const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  return config;
};

module.exports = {
  // "src path folder"
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./main.js"],
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: optimization(),
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
  ],
  module: {
    rules: [
      // Loading CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Loading SCSS/SASS
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // Loading LESS
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // Loading images
      {
        test: /\.jpe?g$|\.gif$|\.png|\.ico|\.svg$/,
        use: ["file-loader"],
      },
      // Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: ["file-loader"],
      },
      // Loading XML
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      // Loading CSV
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
      // Loading Babel JS
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties", "lodash"],
          },
        },
      },
      // Loading Babel TS
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      // Loading Babel REACT
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
};
