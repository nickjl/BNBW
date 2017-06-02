module.exports = function (grunt) {
    grunt.initConfig({

        // WATCH task config
        watch: {
            sass: {
                files: ['source/**/*.sass', 'source/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },

            css: {
                files: ['source/**/*.sass', 'source/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },

            pug: {
                files: ['source/**/*.pug'],
                tasks: ['pug']
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
                    'app/css/app.css':			'source/sass/styles.scss',
                    // other casnos
                    'app/css/amphome.css':			'source/sass/ampstyles.scss',
                    'app/css/ampcasino.css':			'source/sass/casinoampstyles.scss',
                    'app/css/ampgame.css':			'source/sass/gameampstyles.scss',
                    'app/css/casinos/betfair.css':	'source/sass/partials/casinos/betfair.scss',
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
                    'app/css/app.css': 'app/css/app.css'
                }
            }
        },

        // PUG
        pug: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [ {
                    cwd: 'source',
                    src: '**/*.pug',
                    dest: 'app/',
                    expand: true,
                    ext: '.html'
                }]
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'app/assets/js/bxSlider.min.js': ['source/assets/js/bxSlider.js']
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']);
};