var gulp = require('gulp');
var imagemin = require('gulp-imagemin')
var pngquant = require('imagemin-pngquant')

gulp.task('css', function () {
  return gulp.src('src/**/**.css')
    .pipe(gulp.dest('lib/'))
})

gulp.task('image', function () {
  return gulp.src('src/**/**.{png,jpg,gif,jpeg,ico,eot,svg,ttf,woff}')
    .pipe(imagemin({
      progressive: false,
      svgoPlugins: [
        {removeViewBox: false},
        {cleanupIDs: false}
      ],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('lib/'))
})

// Default task
gulp.task('default', ['css', 'image']);
