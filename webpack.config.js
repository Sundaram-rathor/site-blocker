const HtmlWebpackPlugin = require("html-webpack-plugin");4
const path = require('path')
const webpack = require('webpack');



module.exports = {
    mode: "development",
    entry: {
       popup: path.resolve('./src/index.js'),
       background: path.resolve('./src/background/background.js'),
       blocked: path.resolve('./src/ui/blocked/blocked.jsx'),
       options: path.resolve('./src/ui/blocked/blocked.jsx')
    }, 
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/, // Match both .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('tailwindcss'),
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
              },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    plugins: [new HtmlWebpackPlugin({ template: 'src/hello.html' })],
    devtool: 'source-map',
};
