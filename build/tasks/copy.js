var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');

gulp.task('copy-jquery', function() {
	return gulp.src(paths.jquerySource)
		.pipe(gulp.dest(paths.jsOutput));
});

gulp.task('copy', function(callback) {
	return runSequence([
		'copy-jquery'
	], callback);
});
