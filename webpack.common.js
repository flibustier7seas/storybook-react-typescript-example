const webpack = require("webpack");
const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    entry: {
        app: ["./src/index"],
    },

    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[chunkhash].js",
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        modules: [path.resolve(__dirname, "src"), "node_modules"],
    },

    optimization: {
        // webpack runtime code and chunk manifest
        runtimeChunk: {
            name: "manifest",
        },
        splitChunks: {
            cacheGroups: {
                // libs
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true,
                },
                // shared functionality
                commons: {
                    chunks: "initial",
                    minChunks: 2, // Minimum number of chunks that must share a module before splitting
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0, // This is example is too small to create commons chunks
                },
            },
        },
    },

    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "Production",
            template: "index.html",
        }),
    ],
};

// export default config;
module.exports = config;
