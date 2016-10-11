var gulp        = require('gulp'),
 browser      = require('browser-sync');



gulp.task('browser-sync', function() {
    browser.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch('*.html').on('change', browser.reload);
});
