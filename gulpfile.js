var gulp = require('gulp')
var $ = require('gulp-load-plugins')()

gulp.task('styles', function () {
    return gulp
        .src('*.scss')
        .pipe($.sass({ outputStyle: 'compressed' }))
        .pipe($.autoprefixer('last 2 version'))
        .pipe(gulp.dest(''))
})

gulp.task('watch', ['default'], function () {
    gulp.watch('*.scss', ['styles'])
})

gulp.task('default', ['styles'])