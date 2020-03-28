const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
    entry: "./src/index.js", 
   
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
            }
          },
	        {
           test: /\.js$/,
           use: ["source-map-loader"],
           enforce: "pre"
      	  },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'calculator',
                template: './src/index.html'
            }
        )
    ]
}
