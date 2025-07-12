

// call common config file 
const common = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main-prod-file.[fullhash].js",
        chunkFilename: "[name].bundle.[fullhash].js",
    },

})