const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

function styles(){
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
}

function watch(){
    
     browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    
    gulp.watch('./src/sass/**/*.scss', styles)
    gulp.watch("public/*.html").on('change', browserSync.reload);
}


gulp.task('styles', styles);
gulp.task('watch', watch);