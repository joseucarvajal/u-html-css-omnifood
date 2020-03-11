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
          use: [
            MiniCssExtractPlugin.loader, 
            {
              loader: 'css-loader',
              options: {
                url: false,
              }
            },
          ]
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
              to: 'normalize.css'
            },
            { from: './src/Grid.css', to: 'Grid.css' },
            { from: './src/img', to: 'img' },
            {
              from: './src/vendors/css/',
              to: 'vendors/css'
            },
            {
              from: './src/vendors/fonts',
              to: 'vendors/fonts'
            }
        ])
    ]    
  };