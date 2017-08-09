var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    uglifyCSS = require('gulp-uglifycss');
gulp.task('js', function() {
  gulp.src('lib/**/*.js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('js'))
});
gulp.task('sass', function() {
  gulp.src('./sass/**/*.{scss,sass}')
    .pipe(sass({
      errLogToConsole: true,
      includePaths: ['node_modules/susy/sass']
      }))
    // Writes sourcemaps into the CSS file
    .pipe(uglifyCSS())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'));
});
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.{scss,sass}',['sass']);
  gulp.watch('./lib/**/*.js', ['js']);
});
