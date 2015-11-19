var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('lessCompile', function () {
  return gulp.src('./*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'includes') ]
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['lessCompile']);
