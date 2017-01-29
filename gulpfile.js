'Use Strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/css'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['sass']);
});