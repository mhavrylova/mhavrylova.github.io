var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    browser      = require('browser-sync'),
    sourcemaps   = require('gulp-sourcemaps'),
    iconfont = require("gulp-iconfont"),
    consolidate = require("gulp-consolidate");
    spritesmith = require('gulp.spritesmith');
    sourcemaps   = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        // .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(browser.stream({match: '**/*.css'}));
});
gulp.task('sprite', function () {
  var spriteData = gulp.src('./images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss'
  }));
  return spriteData.pipe(gulp.dest("./scss/sprites/"));
});
gulp.task('autoprefixer', function () {
    return gulp.src('./css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions',   "Android 2.3",
  "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});
gulp.task("build:icons", function() {
    return gulp.src(["./icons/*.svg"]) //path to svg icons
      .pipe(iconfont({
        fontName: "myicons",
        formats: ["ttf", "eot", "woff", "svg"],
        centerHorizontally: true,
        fixedWidth: true,
        normalize: true
      }))
      .on("glyphs", (glyphs) => {
        gulp.src("./icons/util/*.scss") // Template for scss files
            .pipe(consolidate("lodash", {
                glyphs: glyphs,
                fontName: "myicons",
                fontPath: "../fonts/"
            }))
            .pipe(gulp.dest("./scss/icons/")); // generated scss files with classes
      })
      .pipe(gulp.dest("./fonts/")); // icon font destination
});
// Starts a BrowerSync instance
gulp.task('serve', ['sass'], function(){
  browser.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['serve'], function() {
  gulp.watch(['scss/**/*.scss', 'sass/**/*.scss'], ['sass']);
  gulp.watch(['./css/*.css'], ['autoprefixer']);
  gulp.watch('./**/*.html').on('change', browser.reload);
});
