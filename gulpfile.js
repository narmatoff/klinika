"use strict";
////////////////////////////////////////vars
var gulp = require('gulp'),
    // less = require('gulp-less'),
    // concatCss = require('gulp-concat-css'),
    // minifyCss = require('gulp-minify-css'),
    rename = require("gulp-rename"),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    // notify = require("gulp-notify"),
    path = require('path'),
    // uncss = require('gulp-uncss'),
    // LessPluginCleanCSS = require('less-plugin-clean-css'),
    // cleancss = new LessPluginCleanCSS({
    //     advanced: true
    // }),
    // LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    // autoprefix = new LessPluginAutoPrefix({
    //     browsers: ["last 14 versions"]
    // }),
    jade = require('gulp-jade'),
    // coffee = require('gulp-coffee'),
    connect = require('gulp-connect'),
    gutil = require('gulp-util'),
    // coffeeStream = coffee({
    //     bare: true
    // }),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
<<<<<<< HEAD
    csso = require('gulp-csso'),
=======
    // csso = require('gulp-csso'),
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
    merge = require('gulp-merge'),
    svgmin = require('gulp-svgmin'),
    spritesmith = require('gulp.spritesmith'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    jsmin = require('gulp-jsmin'),
<<<<<<< HEAD
    wiredep = require('wiredep').stream;
// cmq = require('gulp-combine-media-queries'); //проверить работоспособность!
=======
    // svgSprite = require("gulp-svg-sprites"),
    wiredep = require('wiredep').stream,
    combineMq = require('gulp-combine-mq');
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53




// jade
gulp.task('jade', function() {
    var YOUR_LOCALS = {};

    gulp.src('src/jade/*.jade')
        .pipe(plumber())

    .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true,
            paths: [path.join(__dirname, 'src/jade/includes')]
        }).on('error', gutil.log))
        .pipe(connect.reload())
        .pipe(livereload())
        .pipe(gulp.dest('dist/'));
<<<<<<< HEAD
        // .pipe(notify("jade готов!"));
=======
    // .pipe(notify("jade готов!"));
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53

});

// css
// gulp.task('css', function() {
//     // gulp.src('dist/css/bundle.min.css')
//     gulp.src('src/css/noncompld/*.css')
//         .pipe(plumber())

//         .pipe(minifyCss({
//             compatibility: 'ie8'
//         }))

//     .pipe(autoprefixer({
//             browsers: ['last 14 versions'],
//             cascade: false
//         }))
//         //
//         // "delete unuseble selectors from scc file"
//         // .pipe(uncss({
//         //     html: ['dist/*.html']
//         // }))
//         // .pipe(cmq({
//         //     log: true
//         // })) // проверить работоспособность!
//         .pipe(rename('main.css'))
//         .pipe(gulp.dest('dist/css'))
//         .pipe(livereload())
//         .pipe(notify("Css готов!"));
// });

gulp.task('lint', function() {
    return gulp.src('src/js_src/*.js')
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('fail'))
        .pipe(connect.reload())
        .pipe(livereload())
        .pipe(jsmin())
<<<<<<< HEAD
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'));
        // .pipe(notify("js готов!"));
=======
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/js'));
    // .pipe(notify("js готов!"));
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
});

// sass
gulp.task('sass', function() {
    gulp.src('src/sass/main.scss')
        // .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({
            // paths: [path.join(__dirname, 'src/sass/includes')],
            includePaths: ['.'],
            outputStyle: 'compressed'
<<<<<<< HEAD
            // outputStyle: 'expanded'
=======
                // outputStyle: 'expanded'
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
        }).on('error', sass.logError))
        .pipe(rename('main.css'))
        .pipe(autoprefixer({
            browsers: ['last 14 versions'],
            cascade: false
        }))
<<<<<<< HEAD
        //.pipe(cmq({
        //  log: true
        //}))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
        .pipe(livereload());
        // .pipe(notify("sass готов!"));
=======
        // компановка медиа запросов
        .pipe(combineMq({
            beautify: false
        }))
        // .pipe(csso())

    .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
        .pipe(livereload());
    // .pipe(notify("sass готов!"));
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
});



// спрайты
gulp.task('sprite', function() {
<<<<<<< HEAD
    // Generate our spritesheet 
=======
    // Generate our spritesheet
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
    var spriteData = gulp.src('src/images/forsprts/*.png')
        .pipe(plumber())

    .pipe(spritesmith({
        imgName: 'sprite.png',
<<<<<<< HEAD
        imgPath:"/dist/img/sprite.png",
=======
        imgPath: "/dist/img/sprite.png",
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
        cssName: '_sprite.scss',
        cssFormat: "scss"
            // padding: "2",
            // algorithm: "binary-tree"
    }));

<<<<<<< HEAD
    // Pipe image stream through image optimizer and onto disk 
=======
    // Pipe image stream through image optimizer and onto disk
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
    var imgStream = spriteData.img
        // .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));

<<<<<<< HEAD
    // Pipe CSS stream through CSS optimizer and onto disk 
=======
    // Pipe CSS stream through CSS optimizer and onto disk
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
    var cssStream = spriteData.css
        // .pipe(csso())
        .pipe(gulp.dest('src/sass'));

<<<<<<< HEAD
    // Return a merged stream to handle both `end` events 
    return merge(imgStream, cssStream)
        .pipe(connect.reload())
        .pipe(livereload());
        // .pipe(notify("sprite готов!"));
});


// imagemin
gulp.task('imagemin', function() {
    return gulp.src('src/images/**')
=======
    // Return a merged stream to handle both `end` events
    return merge(imgStream, cssStream)
        .pipe(connect.reload())
        .pipe(livereload());
    // .pipe(notify("sprite готов!"));
});

// svgsprites
// gulp.task('svgsprites', function() {
//     return gulp.src('src/images/forsvgsprts/*.svg')
//         .pipe(svgSprite({
//             cssFile: "src/sass/_svgsprite.scss",
//             sprite: "svgsprite.svg"
//         }))
//         .pipe(gulp.dest("dist/img/svg"))
//         .pipe(connect.reload())
//         .pipe(livereload());

// });



// imagemin
gulp.task('imagemin', function() {
    return gulp.src('src/images/*')
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
        .pipe(plumber())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: true
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'))
        .pipe(connect.reload())
        .pipe(livereload());
<<<<<<< HEAD
        // .pipe(notify("imagemin готов!"));
=======
    // .pipe(notify("imagemin готов!"));
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
});

// svgmin
gulp.task('svgmin', function() {
    return gulp.src('src/images/svg/**/*.svg')
        .pipe(plumber())

    .pipe(svgmin({
            js2svg: {
                pretty: true
            },
            plugins: [{
                removeDoctype: true
            }, {
                removeComments: true
            }]
        }).on('error', gutil.log))
        .pipe(gulp.dest('dist/img/svg'));
<<<<<<< HEAD
        // .pipe(notify("svgmin готов!"));
=======
    // .pipe(notify("svgmin готов!"));
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53

});


// bower
gulp.task('bower', function() {
    return gulp
<<<<<<< HEAD
        .src('src/jade/*.jade')
        .pipe(plumber())

    .pipe(wiredep({
            directory: "dist/bower_components"
=======
        .src('src/jade/**/*.jade')
        .pipe(plumber())

    .pipe(wiredep({
            directory: "dist/bower_components/",
            // игнорируем путь для относительности путей
            ignorePath: '../../dist/'
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
        }).on('error', gutil.log))
        .pipe(gulp.dest('src/jade/'))
        .pipe(connect.reload())
        .pipe(livereload());
<<<<<<< HEAD
        // .pipe(notify("bower готов!"));
=======
    // .pipe(notify("bower готов!"));
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
});

// connect
gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});


// less
// gulp.task('less', function() {
//     return gulp
//         .src('src/less/main.less')
//         .pipe(plumber())
//         .pipe(less({
//             paths: [path.join(__dirname, 'src/less/includes')]
//         }).on('error', gutil.log))
//         .pipe(less({
//             plugins: [cleancss, autoprefix]
//         }))
//         .pipe(rename('bundle.min.css'))
//         .pipe(connect.reload())
//         .pipe(livereload())
//         .pipe(gulp.dest('dist/css'))
//         .pipe(notify("less готов!"));
// });


// coffee
// gulp.task('coffee', function() {
//     gulp.src('src/coffee/*.coffee')
// .pipe(plumber())
//         .pipe(coffee({
//             bare: true
//         }).on('error', gutil.log))
//         .pipe(connect.reload())
//         .pipe(livereload())
//         .pipe(gulp.dest('dist/js'))
//         .pipe(notify("coffee готов!"));
// });

// html
// gulp.task('html', function() {
//     gulp.src('*.html')
//         .pipe(connect.reload())
//         .pipe(livereload())
//         .pipe(notify("html готов!"));
// });

<<<<<<< HEAD


=======
// strip
gulp.task('strip', function() {
    gulp.src('dist/js/*.js')
        .pipe(strip())
        .pipe(gulp.dest('dist/js'));
});
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53


// Watch
gulp.task('watch', function() {
    gulp.watch('src/jade/**/*.jade', ['jade']);
    // gulp.watch('src/css/noncompld/*.css', ['css']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js_src/*.js', ['lint']);
    gulp.watch('src/images/forsprts/*.png', ['sprite']);
<<<<<<< HEAD
=======
    // gulp.watch('src/images/forsvgsprts/*.svg', ['svgsprites']);
>>>>>>> efcf49e66721fe96f71e81ff7130c9efb5e48c53
    gulp.watch('src/images/*', ['imagemin']);
    gulp.watch('src/images/svg/**/*.svg', ['svgmin']);
    gulp.watch('bower.json', ['bower']);
    // gulp.watch('src/less/**/*.less', ['less']);
    // gulp.watch('src/coffee/*.coffee', ['coffee']);
    livereload.listen();
});

// default
gulp.task('default', ['jade', 'sass', 'lint', 'sprite', 'imagemin', 'svgmin', 'bower', 'watch', 'connect']);
