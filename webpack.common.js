const HtmlWebpackPlugin = require("HTML-wepack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    plugins: [
        // Build an index.html file that contains the appropriate package identifier and links to our scripting..
        new HtmlWebpackPlugin({
            template: 'html/index.html'
        }),
        // Copy gameplay components to the webpack results from our fixed folder.
        new CopyPlugin({
            patterns: [
                { from: 'static', to: 'statics' }
            ]
        }),
    ],
    // Our game's starting point
    entry: './Spacegame.ts',
    module: {
        rules: [
            {
                // Insert our GLSL shaders as HTML.
                test: /.(glsl|vs|fs|vert|frag)$/, exclude: /node_modules/, use: ['raw-loader']
            },
            {
                // Analyze our typescript and transport it to Javascript with this loader.
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}