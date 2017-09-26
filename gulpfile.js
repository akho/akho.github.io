var gulp = require('gulp');
var sass = require('gulp-sass');
var bS = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src(['**/*.+(sass|scss)', '!node_modules/**' ])
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./'))
    .pipe(bS.reload({ stream: true }))
});

gulp.task('html', function() {
    gulp.src('**/*.html').pipe(bS.reload({ stream: true }));
});

gulp.task('browserSync', function() {
    bS.init({ server: { baseDir: '.' } });
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('**/*.+(scss|sass)', ['sass']);
});


