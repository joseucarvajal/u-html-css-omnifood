const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: './src/index.js',

    watch: true,
    watchOptions: {
        ignored: ['dist', 'node_modules']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'  
        }),
        new CopyPlugin([
            {
              from: 'node_modules/normalize.css/normalize.css',
              to: '[path]/normalize.css'
            }
        ])
    ]    
  };