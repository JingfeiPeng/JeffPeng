var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
    return gulp.src('./src/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'))
})

gulp.task('watch', function () {
    gulp.watch('src/assets/scss/*.scss', ['default']);
});
  