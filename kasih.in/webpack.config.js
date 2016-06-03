module.exports = {
    entry: [
    './app/assets/frontend/index.js'
    ],
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
          test: /\.js$/,
          loader: "babel-loader",
          query: {
            presets: ['es2015', 'react']
          }
      }]
    }
};
