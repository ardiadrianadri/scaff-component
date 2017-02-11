var helpers = require('./config/helpers');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        'index': './src/index.ts'
    },
    output: {
        path: helpers.root('dist'),
        publicPath:'/',
        filename: 'ngCard.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [{
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: helpers.root('tsconfig.json')
                }
            }, 'angular2-template-loader']
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[hash].[ext]'
        }, {
            test: /\.css$/,
            include: helpers.root('src', 'module'),
            loader: 'raw-loader'
        }]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),
    ]
};