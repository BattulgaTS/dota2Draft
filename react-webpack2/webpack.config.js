/*eslint-disable */

const path = require('path');
const webpack = require('webpack');

var config = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './app.jsx',
	},
	module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: { 
              presets: ['react', 'es2015'],
              plugins: ["react-hot-loader/babel"],
            },
          },
          {
            loader: 'eslint-loader'
          }
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],

  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: '[name].bundle.js',
    publicPath: '/assets',
	},
	devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },

  devtool: "eval-source-map" // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";

  // Can do more here
  // JSUglify plugin
  // Offline plugin
  // Bundle styles seperatly using plugins etc,
};

module.exports = config;