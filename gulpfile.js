const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssnano');
const babel = require('gulp-babel');

gulp.task('minify-css', () => {
    gulp.src([
        'assets/css/main.css',
    ])
        .pipe(concat('styles.min.css'))
        .pipe(autoprefixer())
        .pipe(cssmin({
            discardComments: {removeAll: true},
            safe: true
        }))
        .pipe(gulp.dest('assets/css/min'));
});

gulp.task('minify-js', () => {
    return gulp.src('assets/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/min'))
});

gulp.task('default', ['minify-css', 'minify-js'], function () {
    gulp.watch(['assets/css/main.css'], ['minify-css']);
    gulp.watch(['assets/js/scripts.js'], ['minify-js']);
});
