const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('default', ['start', 'lint']);

gulp.task('start', () => {
  nodemon({
    script: './bin/www',
    ext: 'js html',
    env: { NODE_ENV: 'development' },
    tasks: ['lint'],
  });
});

const eslint = require('gulp-eslint');

gulp.task('lint', () => (
  gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
));
