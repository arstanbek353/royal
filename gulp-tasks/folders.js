"use strict";

import gulp from "gulp";
import debug from "gulp-debug";
import { paths } from "../gulpfile.babel";


gulp.task("folders", () => {
    return gulp.src(paths.folders.src, { base: "src/assets" })
        .pipe(gulp.dest(paths.folders.dist))
        .pipe(debug({ title: "Copied:" }));
});
