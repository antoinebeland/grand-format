'use strict';

const CONSTANTS = {
  DIST_DIRECTORY: 'dist',
  FILE_HEADER: '/*! grand-format | (c) Antoine Béland | MIT License */',
  STYLES_DIRECTORY: 'scss'
};

const gulp = require('gulp');
const concat = require('gulp-concat');
const header = require('gulp-header');
const sass = require('gulp-sass');
const scssLint = require('gulp-scss-lint');

/**
 * SCSS Lint Task
 */
gulp.task('scss-lint', function() {
  return gulp.src(`${CONSTANTS.STYLES_DIRECTORY}/*.scss`)
    .pipe(scssLint({
      config: 'lint.yml',
      reporterOutputFormat: 'Checkstyle'
    }));
});

/**
 * SCSS Task
 */
gulp.task('scss', () => {
  return gulp.src(`${CONSTANTS.STYLES_DIRECTORY}/*.scss`)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('grand-format.css'))
    .pipe(header(CONSTANTS.FILE_HEADER))
    .pipe(gulp.dest(`./${CONSTANTS.DIST_DIRECTORY}`));
});

/**
 * Default Task
 */
gulp.task('default', gulp.series('scss', () => {
  const watcher = gulp.watch(`${CONSTANTS.STYLES_DIRECTORY}/*.scss`, gulp.series('scss'));
  watcher.on('change', (event) => {
    console.log(`File ${event.path} was ${event.type}, running tasks...`);
  });
}));
