module.exports = {
  entry: './dist/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' }
    ]
  }
}