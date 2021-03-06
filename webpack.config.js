const path = require('path');

 module.exports = {
   mode: 'development',
   entry: {
     index: './src/index.js',
   },
   devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
   plugins: [
   ],
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };


