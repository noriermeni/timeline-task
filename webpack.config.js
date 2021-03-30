const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: { 
        path: path.join(__dirname, "dist"), 
        filename: "main.js" 
    },
    mode: process.env.NODE_ENV || "development",
    resolve: { 
        extensions: ['.css', '.scss'],
        modules: [path.resolve(__dirname, "src"), "node_modules"] 
    },
    devServer: { contentBase: path.join(__dirname, "src") },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    // Creates style nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join( __dirname, 'public/index.html' ),
        }),
    ],
};