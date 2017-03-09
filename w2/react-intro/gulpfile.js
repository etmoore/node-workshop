const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('build', ['lint'], () => {
  gulp.src(['src/**/*.js']) // 'gulp!' the javascript files to be transpiled
    .pipe(babel()) // run the code through babel transpiler
    .pipe(gulp.dest('lib')); // write the transpiled code to the lib folder
});

gulp.task('lint', () => {
  gulp.src([ // gulp the gulpfile and any js files in src
    'gulpfile.js',
    'src/**/*js',
    'src/**/*jsx',
  ])
    .pipe(eslint()) // run it through eslint linter
    .pipe(eslint.format()) // outputs the lint results to the console
    .pipe(eslint.failAfterError()); // stop if any errors have been found
});
