var gulp = require('gulp')
var $ = require('gulp-load-plugins')()

gulp.task('styles', function () {
    return gulp
        .src('scss/*.scss')
        .pipe($.sass({ outputStyle: 'compressed' }))
        .pipe($.autoprefixer('last 2 version'))
        .pipe(gulp.dest('./src/'))
})

gulp.task('watch', ['default'], function () {
    gulp.watch('scss/*.scss', ['styles'])
})

gulp.task('default', ['styles'])