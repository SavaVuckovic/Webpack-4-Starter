const path = require('path');

module.exports = {
  entry: {
    main: './src/js/index.js'
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist'
  }
};
