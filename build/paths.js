var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
	root: appRoot,
	output: outputRoot,
	lessSource: appRoot + 'less/app.less',
	sassSource: appRoot + 'scss/app.scss',
	sassPath: appRoot + 'scss/**/*.scss',
	cssFileName: 'app.css',
	cssOutput: outputRoot + 'css/',
	jquerySource: appRoot + '../../node_modules/jquery/dist/jquery.js',
	jsSource: appRoot + 'js/App.ts',
	jsPath: appRoot + 'js/**/*.ts',
	jsOutput: outputRoot + '/js/'
};
