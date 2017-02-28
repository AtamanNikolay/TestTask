var path = require('path');
//var webpack = require('webpack');

var config = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index'
	],
	
   output: {
      path: __dirname,
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
			loader: 'babel-loader',
			include: [
				path.resolve(__dirname, "src"),
			],
            test: /\.jsx?$/,
            exclude: /node_modules/,
				
            query: {
               presets: ['es2015', 'react', 'stage-0']
            }
         },
		{
			test:   /\.css$/,
			loader: "style-loader!css-loader"
		}
      ]
   }
}

module.exports = config;