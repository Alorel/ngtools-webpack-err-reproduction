const {join} = require('path');
const {AngularCompilerPlugin} = require('@ngtools/webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcDir = join(__dirname, 'src');

module.exports = {
  target: 'web',
  devtool: '(none)',
  mode: 'development',
  entry: join(srcDir, 'index.ts'),
  output: {
    path: join(__dirname, 'dist'),
    chunkFilename: '[name].js',
    filename: 'bundle.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: {
          priority: -5
        },
        vendor: {
          priority: -4,
          test: /node_modules/
        }
      },
      chunks: 'all',
      maxAsyncRequests: Number.MAX_VALUE,
      maxInitialRequests: Number.MAX_VALUE,
      minChunks: 1,
      minSize: 1
    },
  },
  plugins: [
    new AngularCompilerPlugin({
      tsConfigPath: join(__dirname, 'tsconfig.json')
    }),
    new CopyWebpackPlugin(
      [
        {
          from: '.gitignore',
          to: '.',
          toType: 'dir',
          cache: true
        }
      ],
      {context: 'src/'}
    )
  ],
  resolve: {
    mainFields: ['fesm5', 'esm5', 'module', 'browser', 'main'],
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        use: ['@ngtools/webpack']
      }
    ]
  }
};
