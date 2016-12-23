var gulp = require('gulp');
var webpack = require('webpack-stream');
var paths = require('../paths');
var path = require('path');

gulp.task('scripts', function() {
	var config = {
		entry: {
			app: path.resolve('./', paths.jsSource)
		},
		output: {
			path: __dirname,
			filename: path.join(paths.jsOutput, '[name].js'),
			chunkFilename: path.join(paths.jsOutput, '[name].common.js'),
			library: 'UniCore',
			publicPath: '/front/'
		},
		resolve: {
			extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
			modulesDirectories: [
				'./../node_modules'
			],
				alias: {

			}
		},
		module: {
			loaders: [
				{ test: /\.css$/, loader: "style-loader!css-loader" },
				{ test: /\.ts$/, loader: 'ts-loader' }
			]
		}
	};

	return gulp.src(paths.jsSource)
		.pipe(webpack(config))
		.pipe(gulp.dest('./'));
});

gulp.task('scripts:watch', function () {
	gulp.watch(paths.jsPath, ['scripts']);
});
