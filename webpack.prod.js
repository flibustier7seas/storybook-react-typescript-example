const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

const common = require("./webpack.common.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = merge(common, {
    mode: "development",

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loaders: ["awesome-typescript-loader"],
                exclude: path.resolve(__dirname, "node_modules"),
                include: path.resolve(__dirname, "src"),
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[local]__[hash:base64:5]",
                            importLoaders: 0,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[local]__[hash:base64:5]",
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
});

// export default config;
module.exports = config;
