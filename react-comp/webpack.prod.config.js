const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './src/ReactComp.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: path.join(__dirname, './components'),
      utils: path.join(__dirname, './utils'),
      styles: path.join(__dirname, './styles'),
      pages: path.join(__dirname, './pages'),
      store: path.join(__dirname, './store')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,

        use: {
          loader: 'babel-loader',

          options: {
            // cacheDirectory: path.join(
            //   __dirname,
            //   '.honeypack_cache/babel-loader'
            // ),
            presets: ['@babel/preset-env','@babel/preset-react'],

            plugins: [
              'add-module-exports',
              ['@babel/plugin-proposal-decorators', { 'legacy': true }],
              'transform-class-properties',
              'transform-object-rest-spread'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(less|css)$/,

        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',

            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  externals: [nodeExternals()]
};
