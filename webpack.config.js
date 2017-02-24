var webpack = require('webpack');

module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname+'/dist/js/',
        publicPath: "js/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /dist/],
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /dist/]
            }, {
                test: /\.scss$/,
                loader: "style-loader!css-loader!autoprefixer-loader!sass-loader",
                exclude: [/node_modules/, /dist/]
            }, {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            }, {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            }, {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            }, {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            }, {
                test: /\.jsx$/,
                loader: "react-hot-loader!babel-loader",
                exclude: [/node_modules/, /dist/]
            }, {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}