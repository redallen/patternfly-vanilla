const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'demo/index.js'),
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: 'bundle.js'
  }
};