const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', 
  
  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "lib"),
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader?presets[]=env&presets[]=react' 
      },
      { 
        test: /\.css$/, 
        use: ['style-loader','css-loader']
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

  plugins: [
    new CleanWebpackPlugin()
  ]
}