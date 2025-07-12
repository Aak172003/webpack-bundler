const path = require("path");

module.exports = {
    mode: "development",
    // Rename the entry file , count from root src folder
    entry: "./src/app.js",

    output: {
        // __dirname is a global variable that contains the path to the current directory
        // create a dist folder in root folder
        // create a output.js file in dist folder
        path: path.resolve(__dirname, "dist"),
        filename: "dev-main-output.js",
    },

    // Loaders 

    // Loader is use to convert css file to js file
    module: {
        rules: [
            {
                // test is a regular expression that matches the file name
                // /\.css$/ is a regular expression that matches the file name
                // style-loader is use to convert css file to js file
                // css-loader is use to convert css file to js file
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
        open: true,
    },
}