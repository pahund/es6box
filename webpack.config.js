var webpack = require("webpack"),
    numberOfBoxes = 6,
    idWidth = 3;

module.exports = {
    entry: (function () {
        var id,
            idGenerator = idGeneratorF(numberOfBoxes, idWidth),
            config = {};

        while (id = idGenerator()) {
            config["box" + id] = [
                "webpack/hot/dev-server",
                "./boxes/" + id + "/js/main.js"
            ];
        }
        return config;
    }()),
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
    ],
    devtool: "#source-map"
};

function zeroFill(number, width) {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join("0") + number;
    }
    return number + "";
}

function idGeneratorF(max, width) {
    var current = 1;
    return function () {
        if (current > max) {
            return undefined;
        }
        var id = zeroFill(current, width);
        current++;
        return id;
    };
}
