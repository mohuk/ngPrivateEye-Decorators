var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true,
    port: 8000
  });
});
 
gulp.task('all', function () {
  gulp.src('./src/*.*')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./src/*.*'], ['all']);
});
 
gulp.task('default', ['connect', 'watch']);