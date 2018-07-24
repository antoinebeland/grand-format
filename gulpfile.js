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

/**
 * SASS Task
 */
gulp.task('sass', () => {
  return gulp.src(`${CONSTANTS.STYLES_DIRECTORY}/*.scss`)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('grand-format.css'))
    .pipe(header(CONSTANTS.FILE_HEADER))
    .pipe(gulp.dest(`./${CONSTANTS.DIST_DIRECTORY}`));
});

/**
 * Default Task
 */
gulp.task('default', gulp.series('sass', () => {
  const watcher = gulp.watch(`${CONSTANTS.STYLES_DIRECTORY}/*.scss`, gulp.series('sass'));
  watcher.on('change', (event) => {
    console.log(`File ${event.path} was ${event.type}, running tasks...`);
  });
}));
