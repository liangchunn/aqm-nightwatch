const gulp = require('gulp');
const jshint = require('gulp-jshint');
const nightwatch = require('gulp-nightwatch');
const runSequence = require('run-sequence');

gulp.task('lint', () => {
    return gulp.src('./tests/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('nightwatch', () => {
    return gulp.src('')
    .pipe(nightwatch({
      configFile: './nightwatch.conf.js',
      cliArgs: ['--env default']
    }))
})

gulp.task('test', (callback) => {
    runSequence('lint', 'nightwatch', callback);
});
