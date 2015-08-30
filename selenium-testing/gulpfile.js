var gulp = require('gulp');
var mochaSelenium = require('gulp-mocha-selenium');

gulp.task('default', function() {
  return gulp.src('test/index.js', {read: false})
    .pipe(mochaSelenium(
        {
          useChaining: true,
          timeout: 30e3,
          browserName: 'chrome'
        }
      ));
})
