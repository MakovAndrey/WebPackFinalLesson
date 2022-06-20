const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: resolve(__dirname, "build"),
        filename: "main.[contenthash].js",
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3|mp4)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 50
                            }
                        }
                    }
                ],
            },
            {
                test: /\.mp4$/,
                use: "file-loader?name=video/[name].[ext]",
            },
            {
                test: /\.mp3$/,
                use: "file-loader?name=audio/[name].[ext]",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
    ],
    devServer: {
        port: 8080,
        watchFiles: ["./*"],
        open: true,
        hot: true,
    },
};
