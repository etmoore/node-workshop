const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', () => {
  gulp.src(['src/**/*.js']) // 'gulp!' the javascript files to be transpiled
    .pipe(babel()) // run the code through babel transpiler
    .pipe(gulp.dest('lib')); // write the transpiled code to the lib folder
});
