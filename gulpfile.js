const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

// Compile Sass
gulp.task("sass", function() {
  return gulp
    .src(["src/scss/*.scss"])
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});
