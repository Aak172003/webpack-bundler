const port = process.env.PORT || 8080;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// what is fullhash ? 
// what is historyApiFallback
// "start": "webpack serve --mode production --open --hot", ? Ehat it actually means

module.exports = {


    // So hume mode via script bhi bhej skte hai or webpack me bhi configure kr skte hai 
    // Method 1 -> configure in webpack.cofig.js
    // mode: "development",

    // Method 2 -> This is how we pass mode via script 
    // "start": "webpack serve --mode development --open --hot",

    mode: "development",
    // Rename the entry file , count from root src folder
    // This is how we can add single entry file 
    entry: "./src/index.js",

    // This is how we can add multiple entry file 
    // entry: {
    //     main: "./src/index.js",
    //     vendor: "./src/vendor.js",
    // },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.svg$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    devServer: {

        host: "localhost",
        port: port,
        historyApiFallback: true,
        open: true,
    }
}