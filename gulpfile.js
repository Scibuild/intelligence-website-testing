var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    uglifyCSS = require('gulp-uglifycss');
gulp.task('js', function() {
  gulp.src('lib/**/*.js')
  .on('error', swallowError)
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('js'))
});
gulp.task('sass', function() {
  gulp.src('./sass/**/*.{scss,sass}')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(cleanCSS())
    .pipe(uglifyCSS())
    .pipe(gulp.dest('./css'));
});
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.{scss,sass}',['sass']);
  gulp.watch('./lib/**/*.js', ['js']);
});

function swallowError (error) {this.emit('end')}
