var path = require("path");

module.exports = {
    entry:  "./views/client/home/home.js",
    output: {
        path: __dirname,
        filename: "views/client/home.bundle.js",
    },
    loaders: [
      { 
	test: /.jsx?$/, 
	exclude: /node_modules/,
	loader: 'babel-loader',
	query:{
	  presets:['es2015', 'react']
	}
      }
    ]
}
