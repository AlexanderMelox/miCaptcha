const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

// Compile Sass
gulp.task("sass", function() {
  return gulp
    .src("src/scss/*.scss")
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

// Watch Sass & Server
gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./src"
  });

  gulp.watch(["src/scss/*.scss"], ["sass"]);
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);
