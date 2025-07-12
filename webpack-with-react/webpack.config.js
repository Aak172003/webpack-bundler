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
        // chunkFilename: "[name].bundle.[fullhash].js",
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
                // here css - loader is used to convert css to commonjs module (or we can say it helps to remove parse error)
                // style-loader is used to inject css into the DOM
                use: [
                    "style-loader", // 1. Inject styles into DOM
                    "css-loader", // 2. Turns css into commonjs module
                    // "sass-loader" // 3. Converts sass to css

                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }, {
                test: /\.(svg|png|jpg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        // Here we don't need to change image name using fullhash because we are using file-loader , this could be static things
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/images"
                    }
                }
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