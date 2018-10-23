const {join} = require('path');
const {AngularCompilerPlugin} = require('@ngtools/webpack');

const srcDir = join(__dirname, 'src');

module.exports = {
  target: 'web',
  devtool: '(none)',
  mode: 'development',
  entry: join(srcDir, 'index.ts'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new AngularCompilerPlugin({
      tsConfigPath: join(__dirname, 'tsconfig.json')
    })
  ],
  resolve: {
    mainFields: ['fesm5', 'esm5', 'module', 'browser', 'main'],
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [{
      test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
      // test: /\.[jt]s$/,
      use: ['@ngtools/webpack']
    }]
  }
};
