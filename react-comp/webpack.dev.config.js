const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
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
            loader: MiniCssExtractPlugin.loader
          },
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
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new htmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
};
