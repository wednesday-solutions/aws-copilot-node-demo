// Important modules this config uses
const path = require('path');

module.exports = require('./webpack.server.config')({
  mode: 'production',
  entry: [path.join(process.cwd(), 'index.js')],

  plugins: []
});
