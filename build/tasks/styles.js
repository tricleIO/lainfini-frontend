var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var paths = require('../paths');

gulp.task('styles', function() {
	return gulp.src(paths.sassSource)
		//.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		//.pipe(sourcemaps.write(paths.cssOutput))
		.pipe(concat(paths.cssFileName))
		.pipe(minify())
		.pipe(gulp.dest(paths.cssOutput));
});

gulp.task('styles:watch', function () {
	gulp.watch(paths.sassPath, ['styles']);
});
