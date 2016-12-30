require('babel-polyfill');
var path = require('path');
var webpack = require('webpack');
var assetsDir = path.join(__dirname, 'src/assets/');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    devtool: 'source-map',
    entry: {
        webStyles: [
            path.join(assetsDir, 'sass/styles.scss')
        ],
        webPrintStyles: [
            path.join(assetsDir, 'sass/print.scss')
        ],
        webScripts: [
            path.join(assetsDir, 'js/scripts.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/build/'),
        publicPath: '/build/',
        filename: '[name].js'
    },
    resolve: {
        root: [
            path.join(__dirname, 'bower_components'),
            path.join(__dirname, 'node_modules'),
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new ExtractTextPlugin('[name].css'),
        new WebpackNotifierPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.woff2?(\?v=[\d\.]+)?$/, loader: 'url-loader?limit=1024&minetype=application/font-woff'},
            {test: /\.(ttf|eot|svg)(\?v=[\d\.]+)?$/, loader: 'file-loader'},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=1024'},
            {test: /\.css$/,  loader: ExtractTextPlugin.extract('style', 'css?sourceMap')},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!postcss!' + 'sass?sourceMap')},
            {test: /\.hbs/,   loader: "handlebars-template-loader"},
            {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules|bower_components/},
            {test: /\.html$/, loader: 'raw!html-minify'}
        ]
    },
    postcss: [ autoprefixer({ browsers: ['> 1%', 'ie 8', 'ie 9'] }) ]
};