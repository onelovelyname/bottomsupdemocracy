var path = require("path");

module.exports = {
    entry: {
      home: "./views/client/home/home.js",
      data: "./views/client/data/data.js"
    },
    output: {
        path: __dirname,
        filename: "./public/[name].bundle.js",
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
