const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');

/*
tasks
 */

gulp.task('start', () => {
  nodemon({
    script: './bin/www',
    ext: 'js html',
    env: { NODE_ENV: 'development' },
    tasks: ['lint'],
  });
});

gulp.task('lint', () => (
  gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
));

/*
default
 */

gulp.task('default', ['start', 'lint']);
