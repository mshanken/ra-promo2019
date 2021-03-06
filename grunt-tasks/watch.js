'use strict';

module.exports = {
  gruntfile: {
    files: 'Gruntfile.js',
    tasks: ['jshint'],
  },
	js: {
    files: 'www/js/**/*.js',
    tasks: ['jshint'],
    options: {
      debounceDelay: 250,
    },
  },
  css: {
    files: 'www/css/**/*.css',
    tasks: ['csslint'],
    options: {
      livereload: true,
    },
  }
};