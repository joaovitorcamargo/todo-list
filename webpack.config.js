const path = require('path');

module.exports = {
  entry:["@babel/polyfill", path.resolve(__dirname,'./src/main.js')],
  output:{
    path: path.resolve(__dirname,'./docs'),
    filename:'bundle.js'
  },
  devServer:{
    static:{
      directory:path.resolve(__dirname,'./docs')
    }
  },
  module:{
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  }
}