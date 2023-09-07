const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path');
const ThreeMinifierPlugin = require("@yushijinhun/three-minifier-webpack");
const { CleanWebpackPlugin } =
    require("clean-webpack-plugin");
const threeMinifier = new ThreeMinifierPlugin();
module.exports = merge(common, {
    plugins: [
        threeMinifier, // Minifies our three.js code
        new CleanWebpackPlugin() // Between builds, it cleans up our 'dist' folder.
    ],
    resolve: {
        plugins: [
            threeMinifier.resolver,
        ]
    },
    mode: 'production', // Reduce the size of our output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[f_hash:8].js', // Our product would contain a one-of-a-kind hashing, forcing our users to download updates as soon when they become accessible. 
        sourceMapFilename: '[name].[f_hash:10].map',
        chunkFilename: '[id_number].[f_hash:10].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            // divide our code into smaller parts to assist caching for our clients
        },
    },
})