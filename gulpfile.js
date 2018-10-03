var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    source = require('vinyl-source-stream'),
    through2 = require('through2');

var appJsSrc = ['app/**/*.js'],
    stylesSrc = 'assets/styles/build.scss',
    buildSrc = 'app/build.js',
    outputDir = 'build';

//gulp.task('buildJs', function() {
//    // TODO: Add browserify to build with node modules
//    gulp.src(appJsSrc)
//        .pipe(concat('app.js'))
//        .on('error', gutil.log)
//        .pipe(gulp.dest('build'))
//});

gulp.task('buildJs', function() {
    // TODO: Add browserify to build with node modules
    gulp.src(buildSrc)
        .pipe(through2.obj(function(file, enc, next) {
            browserify(file.path).bundle(function(error, res) {
                file.contents = res;
                next(null, file);
            })
        }))
        .pipe(source('app.js'))
        .on('error', gutil.log)
        .pipe(gulp.dest('build'))
});


gulp.task('buildCss', function() {
    gulp.src(stylesSrc)
        .pipe(sass({style: 'expanded'}))
        .pipe(concat('app.css'))
        .on('error', gutil.log)
        .pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
  gulp.watch(appJsSrc, ['buildJs']);
  gulp.watch(stylesSrc, ['buildCss']);
});

gulp.task('default', ['buildJs', 'buildCss', 'watch']);