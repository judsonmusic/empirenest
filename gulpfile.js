var gulp = require('gulp');
var replace = require('gulp-string-replace');
var p = require('./package.json');
var version = p.version;
gulp.task('serve:after', ['version']);

console.log('Task init!!!');
gulp.task('version', function() {
  gulp.src(["./src/index.html"])
  .pipe(replace(/VERSION/g, p.version))
    .pipe(gulp.dest('./www/'));
});