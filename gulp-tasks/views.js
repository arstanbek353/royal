"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import include from "gulp-file-include";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("views", () => {
    return gulp.src(paths.views.src)
        .pipe(include({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulpif(production, replace("main.css", "main.min.css")))
        .pipe(gulpif(production, replace("main.js", "main.min.js")))
        .pipe(gulpif(production, replace("vendor.js", "vendor.min.js")))
        .pipe(gulp.dest(paths.views.dist))
        .pipe(browsersync.stream());
});