const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    resolve: {
        alias: {
            views: path.resolve(__dirname, "./views"),
            models: path.resolve(__dirname, "./models"),
            services: path.resolve(__dirname, "./services"),
            controllers: path.resolve(__dirname, "./controllers")
        },
        extensions: [".ts"]
    },
    entry: ['babel-polyfill', "./app.ts"],
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        inline: true,
        host: "localhost",
        port: 8080,
        stats: "errors-only"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                options: {
                    useBabel: true,
                    useCache: true,
                    babelCore: "@babel/core"
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "assets/img/[name].[ext]?[hash]"
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: "all",
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true
                }
            }
        }
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html"
        }),
        new CheckerPlugin()
    ]
};