var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

const options = {
    mode: 'production',
    module: {
        rules: [{
            test: /\.html$|\.pcss$/,
            use: ['raw-loader']
        }]
    },
}

module.exports = [
    webpackMerge(options, {
        entry: {
            bundle: './src/index.js',
            vendor: ['@polymer/polymer/polymer-element']
        },
        output: {
            filename: 'web/[name].js'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'all'
                    }
                }
            }
        },
    }),
    webpackMerge(options, {
        entry: './src/polymer-card.js',
        output: {
            filename: 'node/polymer-card.js',
        },
        target: 'node',
        externals: [nodeExternals()],        
        module: {
            rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            }]
        },
    }),
]