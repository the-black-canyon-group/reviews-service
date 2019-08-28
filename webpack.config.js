const path = require('path')


module.exports = {
  entry: './client/index.jsx',
  module: {
    rules: [{
      test: [/\.jsx$/, /\.js$/],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}
