var path = require("path");

module.exports = {
    entry:  "./views/client/home/home.js",
    output: {
        path: __dirname,
        filename: "./public/home.bundle.js",
    },
    module: {
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
    
}
