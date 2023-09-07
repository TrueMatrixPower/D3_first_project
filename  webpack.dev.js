const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path');
module.exports = merge(common, {
    mode: 'development', // The source should not be minified.
    devtool: 'eval-source-map', // For easy development, use the source map.
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
            // From this location, static files are served.
        },
        hot: true, // Whenever the code changes, refresh the site.
    },
})