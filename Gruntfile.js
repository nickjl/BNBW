module.exports = function (grunt) {
    grunt.initConfig({

        // WATCH task config
        watch: {
            sass: {
                files: ['source/**/*.sass', 'source/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'concat']
            },

            css: {
                files: ['source/**/*.sass', 'source/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },

            pug: {
                files: ['source/**/*.pug'],
                tasks: ['pug']
            },

            js: {
                files: ['source/assets/js/*.js'],
                tasks: ['concat', 'uglify']
            },

            // browserSync: {
            //     files: ['app/**/*.css', 'app/**/*.html'],
            //     tasks: ['pug']
            //  },

        },

        // SASS task config
        sass: {
            dev: {
                files: {
                    // destination				// source file
                    'source/assets/css/app.min.css':			'source/sass/styles.scss',
                    // other casnos
                    //'app/css/amphome.css':			'source/sass/ampstyles.scss',
                    //'app/css/ampcasino.css':			'source/sass/casinoampstyles.scss',
                    //'app/css/ampgame.css':			'source/sass/gameampstyles.scss',
                    //'app/css/casinos/betfair.css':	'source/sass/partials/casinos/betfair.scss',
                    //'app/casino02/css/app.css':	'source/casino02/sass/styles.sass'

                },
                options: {
                    style: 'compressed',
                }
            }
        },

        // AUTOPREFIXER
        autoprefixer: {
            dev: {
                files: {
                    'app/assets/css/bnbs.min.css': 'app/assets/css/bnbs.min.css'
                }
            }
        },

        // PUG
        pug: {
            compile: {
                options: {
                    client: false,
                    pretty: true,
                    data: {
                        data: grunt.file.readJSON('./source/data/data.json')
                    }
                },
                files: [ {
                    cwd: 'source',
                    src: '*.pug',
                    dest: 'app/',
                    expand: true,
                    ext: '.html'
                }]
            }
        },

        concat: {

            js: {
                // the files to concatenate
                src: ['source/assets/js/jquery.bxslider.min.js', 'source/assets/js/tether.min.js', 'source/assets/js/bootstrap.min.js', 'source/assets/js/bxSliderHome.js', 'source/assets/js/filter.js'],
                // the location of the resulting JS file
                dest: 'app/assets/js/bnbs.js',
                options: {
                    // define a string to put between each file in the concatenated output
                    separator: ';'
                }

            },

            css: {
                src: ['source/assets/css/jquery.bxslider.min.css', 'source/assets/css/app.min.css'],
                dest: 'app/assets/css/bnbs.min.css'
            }

        },

        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    'app/assets/js/bnbs.min.js': ['app/assets/js/bnbs.js']
                }
            }
        },


        copy: {
            //app: {
            //	files: [{
            //			src: [ 'js/*','style/**/*.css', '!**/*.jade', 'img/**/*'],
            //			dest: './app'
            //		}]
            //}
            app: {
                cwd: 'sources',
                src: [ 'js/*','style/**/*.css', '!**/*.jade', 'img/**/*' ],
                dest: 'app',
                expand: true
            }
        },


        clean: {
            app: ['./app/**']
        },



        // Using the BrowserSync Server for your static .html files.
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        'app/css/*.css',
                        'app/*.html'
                        // '*.pug',
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './app'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']);
};