const path = require("path");

module.exports = (_baseConfig, _env, config) => {
    config.resolve.extensions.push(".ts", ".tsx");

    // #region loaders

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            require.resolve("awesome-typescript-loader"),
            require.resolve("react-docgen-typescript-loader"),
        ],
    });

    config.module.rules.push({
        test: /\.scss$/,
        loaders: [
            {
                loader: "style-loader",
            },
            {
                loader: "typings-for-css-modules-loader",
                options: {
                    banner:
                        "// This file is automatically generated by typings-for-css-modules.\n// Please do not change this file!",
                    //css-loader options
                    modules: true,
                    localIdentName: "[local]__[hash:base64:5]",
                    importLoaders: 1,
                },
            },
            {
                loader: "sass-loader",
            },
        ],
        include: path.resolve(__dirname, "../"),
    });

    //#endregion

    return config;
};
