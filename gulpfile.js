var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    minify = require('gulp-minifier');

var plumberOptions = {
    errorHandler: function(err) {
        console.log(err.toString());
        this.emit('end');
    }
};

var project_data = {
        project: 'eshop-outlet'
    },
    templates_options = {
        batch: 'templates'
    };


gulp.task('html', function() {
    var handlebars = require('gulp-compile-handlebars'),
        data = require('gulp-data'),
        htmlmin = require('gulp-htmlmin'),
        gulpif = require('gulp-if'),
        rename = require('gulp-rename');

    var opts = {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: false
    };

    return gulp.src(['templates/*.html'])
        .pipe(plumber(plumberOptions))
        .pipe(gulpif('*.hbs', handlebars(data,templates_options)))
        .pipe(rename({ extname: '.html' }))
        .pipe(htmlmin(opts))
        .pipe(gulp.dest('dist/'));
});

gulp.task('server', function() {
    var webserver = require('gulp-webserver');

    return gulp.src('')
        .pipe(webserver({
            open: 'dist/index.html',
            livereload: {
                enable: true,
                filter: function(fileName) {
                    return !fileName.match(/\.map$/); // ignorace sourcemap
                }
            },
            directoryListing: {
                enable: false,
                path: ''
            }
        }));
});


gulp.task('default', ['html'], function() {
    var livereload = require('gulp-livereload');

    livereload.listen();

    gulp.watch(['templates/*.html'], ['html']);

    gulp.watch(['dist/*.html','dist/build/**']).on('change', livereload.changed);

});