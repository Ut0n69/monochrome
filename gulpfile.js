var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

// sass
gulp.task('sass', function () {
  gulp.src(['sass/*.scss'])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(autoprefixer({
      browsers: ["last 2 versions", 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
      cascade: false
    }))
    .pipe(gulp.dest('css'));

  gulp.src(['demo/sass/*.scss'])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(rename({
      extname: '.css'
    }))
    .pipe(autoprefixer({
      browsers: ["last 2 versions",  'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
      cascade: false
    }))
    .pipe(gulp.dest('demo/css'));
});

// minify
gulp.task('minify-css', function() {
  return gulp.src('css/monochrome.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('css'));
});

// watch
gulp.task('sass:watch', function () {
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('demo/sass/*.scss', ['sass']);
  gulp.watch('sass/monochrome/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch', 'minify-css']);