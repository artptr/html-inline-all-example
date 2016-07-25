const gulp         = require('gulp');
const sass         = require('gulp-sass');
const postcss      = require('gulp-postcss');
const url          = require('postcss-url');
const livescript   = require('gulp-livescript');
const pug          = require('gulp-pug');
const inlineSource = require('gulp-inline-source');

gulp.task('css', () =>
  gulp.src('./src/sass/*')
    .pipe(sass())
    .pipe(postcss([
      url({ url: 'inline' }),
    ]))
    .pipe(gulp.dest('./tmp/css/'))
);

gulp.task('js', () =>
  gulp.src('./src/live/*')
    .pipe(livescript())
    .pipe(gulp.dest('./tmp/js/'))
);

gulp.task('default', ['css', 'js'], () =>
  gulp.src('./src/pug/*')
    .pipe(pug())
    .pipe(inlineSource())
    .pipe(gulp.dest('./dist/'))
);
