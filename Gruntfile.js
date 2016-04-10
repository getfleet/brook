// Generated on 2016-03-22 using generator-angular 0.15.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates',
        ngconstant: 'grunt-ng-constant',
        cdnify: 'grunt-google-cdn',
        i18nextract: 'grunt-angular-translate'
    });

    var modRewrite = require('connect-modrewrite');

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'src',
        dist: 'dist',
        temp: '.tmp'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= yeoman.app %>/app/{,*/}*.js'],
                tasks: ['newer:jshint:all', 'newer:jscs:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
            },
            sass: {
                files: ['<%= yeoman.app %>/**/*.{scss,sass}'],
                tasks: ['sass:server', 'autoprefixer']
            },
            translate: {
                files: ['<%= yeoman.app %>/**/*.js', '<%= yeoman.app %>/**/*.html'],
                tasks: ['i18nextract']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/**/*.html',
                    '<%= yeoman.temp %>/assets/css/{,*/}*.css',
                    '<%= yeoman.app %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.app %>/resources/{,*/}*.json'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            modRewrite(['^[^\\.]*$ /index.html [L]']),
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect().use(
                                '/src/assets/scss',
                                connect.static('./src/assets/scss')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Make sure there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/app/{,*/}*.js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Make sure code styles are up to par
        jscs: {
            options: {
                config: '.jscsrc',
                verbose: true
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/app/{,*/}*.js'
                ]
            },
            test: {
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.temp %>',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git{,*/}*'
                    ]
                }]
            },
            server: '<%= yeoman.temp %>'
        },

        // Add vendor prefixed styles
        postcss: {
            options: {
                processors: [
                    require('autoprefixer-core')({browsers: ['last 1 version']})
                ]
            },
            server: {
                options: {
                    map: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.temp %>/assets/css/',
                    src: '{,*/}*.css',
                    dest: '<%= yeoman.temp %>/assets/css/'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.temp %>/assets/css/',
                    src: '{,*/}*.css',
                    dest: '<%= yeoman.temp %>/assets/css/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath: /\.\.\//
            },
            test: {
                devDependencies: true,
                src: '<%= karma.unit.configFile %>',
                ignorePath: /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            },
            sass: {
                src: ['<%= yeoman.app %>/assets/scss/{,*/}*.{scss,sass}'],
                ignorePath: /(\.\.\/){1,2}bower_components\//
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        sass: {
            options: {
                includePaths: [
                    'bower_components'
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/assets/scss',
                    src: ['*.scss'],
                    dest: '<%= yeoman.temp %>/assets/css',
                    ext: '.css'
                }]
            },
            server: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/assets/scss',
                    src: ['*.scss'],
                    dest: '<%= yeoman.temp %>/assets/css',
                    ext: '.css'
                }]
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/assets/js/{,*/}*.js',
                    '<%= yeoman.dist %>/assets/css/{,*/}*.css',
                    '<%= yeoman.dist %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.dist %>/assets/fonts/*'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/**/*.html'],
            css: ['<%= yeoman.dist %>/assets/css/{,*/}*.css'],
            js: ['<%= yeoman.dist %>/assets/js/{,*/}*.js'],
            options: {
                assetsDirs: [
                    '<%= yeoman.dist %>',
                    '<%= yeoman.dist %>/assets/images',
                    '<%= yeoman.dist %>/assets/css'
                ],
                patterns: {
                    js: [[/(assets\/images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
                }
            }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/assets/css/main.css': [
        //         '<%= yeoman.temp %>/assets/css/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/assets/js/scripts.js': [
        //         '<%= yeoman.dist %>/assets/js/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/assets/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/assets/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/assets/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/assets/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        ngtemplates: {
            dist: {
                options: {
                    module: 'app',
                    htmlmin: '<%= htmlmin.dist.options %>',
                    usemin: 'assets/js/scripts.js'
                },
                cwd: '<%= yeoman.app %>',
                src: 'app/**/*.html',
                dest: '<%= yeoman.temp %>/templateCache.js'
            }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.temp %>/concat/assets/js',
                    src: '*.js',
                    dest: '<%= yeoman.temp %>/concat/assets/js'
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            '*.{ico,png,txt}',
                            '*.html',
                            'assets/images/{,*/}*.{webp}',
                            'assets/fonts/{,*/}*.*',
                            'resources/{,*/}*.*'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '<%= yeoman.temp %>/assets/images',
                        dest: '<%= yeoman.dist %>/assets/images',
                        src: ['generated/*']
                    },
                    {
                        expand: true,
                        cwd: '.',
                        src: 'bower_components/font-awesome/fonts/*',
                        dest: '<%= yeoman.dist %>'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/angular-i18n/',
                        src: '*.js',
                        dest: '<%= yeoman.dist %>/bower_components/angular-i18n'
                    }
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/assets/scss',
                dest: '<%= yeoman.temp %>/assets/css/',
                src: '{,*/}*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'sass:server',
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'sass',
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        },

        // App configuration
        ngconstant: {
            options: {
                name: 'app.config',
                dest: 'src/app/app.config.js'
            },
            dev: {constants: {CONFIG: grunt.file.readJSON('src/config/config_dev.json')}},
            pre: {constants: {CONFIG: grunt.file.readJSON('src/config/config_pre.json')}},
            prod: {constants: {CONFIG: grunt.file.readJSON('src/config/config_prod.json')}}
        },

        // Translation strings extraction
        i18nextract: {
            default_options: {
                src: ['<%= yeoman.app %>/**/*.js', '<%= yeoman.app %>/**/*.html'],
                lang: ['en', 'es'],
                suffix:  '.json',
                prefix: 'locale-',
                dest: '<%= yeoman.app %>/resources'
            }
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });


    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'ngconstant:dev',
            'i18nextract',
            'clean:server',
            'wiredep',
            'concurrent:server',
            'postcss:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'wiredep',
        'concurrent:test',
        'postcss',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'i18nextract',
        'clean:dist',
        'wiredep',
        'useminPrepare',
        'concurrent:dist',
        'postcss',
        'ngtemplates',
        'concat',
        'ngAnnotate',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('build:dev', [
        'ngconstant:dev',
        'build'
    ]);
    grunt.registerTask('build:pre', [
        'ngconstant:pre',
        'build'
    ]);
    grunt.registerTask('build:prod', [
        'ngconstant:prod',
        'build'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'newer:jscs',
        'test',
        'build'
    ]);
};
