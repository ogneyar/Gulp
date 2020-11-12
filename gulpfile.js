let project_folder = "./public";
let source_folder = ".";

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: source_folder + "/*.html",
        css: source_folder + "/scss/style.scss",
        js: source_folder + "/js/script.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: source_folder + "/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp');

var gulp = require('gulp');
/*
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');
*/

function watchFiles() {
    gulp.watch([path.watch.html], html);
}

function html() {
    return src(path.src.html)
        .pipe(gulp.dest(path.build.html))
}

let build = gulp.series(html);
let watch = gulp.parallel(build, watchFiles, nodeM);

exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;