

// call common config file 
const common = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main-dev-file.js",
        chunkFilename: "[name].bundle.js",
    },

})