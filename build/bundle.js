var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('webpack', function(){
  return gulp.src('./app/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:dev', ['webpack:dev'], function() {
  gulp.watch(['app/**/*'], ['webpack:dev']);
});

gulp.task('webpack:dev', function(callback) {

  // modify some webpack config options
  var devConfig = Object.create(webpackConfig);
  devConfig.devtool = 'sourcemap';
  devConfig.debug = true;
  return gulp.src('./app/app.js')
    .pipe(webpack(devConfig))
    .pipe(gulp.dest('./dist'));
});
