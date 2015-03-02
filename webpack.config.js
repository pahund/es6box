var webpack = require("webpack");

module.exports = {
    entry: {
        box001: [
            "webpack/hot/dev-server",
            "./boxes/001/js/main.js"
        ],
        box002: [
            "webpack/hot/dev-server",
            "./boxes/002/js/main.js"
        ]
    },
    output: {
        path: __dirname,
        filename: "dist/[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
