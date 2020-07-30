const gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
const webpack = require('webpack');
const webpackConf = require('./build/build.js');
// 构建webpack配置
gulp.task('webpack', function(done) {
  webpack(webpackConf, function(err, stats) {
    if (err) {
      console.log(err);
    }
  });
  done();
});

// 处理样式的配置
gulp.task('compile', function() {
  return gulp
    .src('./styles/index.scss')
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        browsers: ['ie > 9', 'last 2 versions'],
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/'));
});
// 打包文件
gulp.task('build', gulp.series('webpack', 'compile'), function(done) {
  done();
});

// 监听文件变化
/* gulp.task('watch', ['webpack', 'compile'], function () {
  gulp.watch(['./src/!**', './packages/!**'], ['webpack']);
  gulp.watch(['./styles/!**'], ['compile']);
});*/
gulp.task('watch', gulp.series('webpack', 'compile', function() {
  gulp.watch(['./src/**', './packages/**'], gulp.series('webpack', function(cb) {
    cb();
  }));
  gulp.watch(['./styles/**'], gulp.series('compile', function(cb) {
    cb();
  }));
}));

