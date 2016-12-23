var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
	return runSequence(
		['copy', 'scripts', 'styles'],
		callback
	);
});
