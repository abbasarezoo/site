module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //=========================
        // INDIVIDUAL TASKS
        //=========================

        // SASS AND COMPASS

        sass: {
            
            options: {
                sourceMap: false
            },
            
            dist: {
                files: {
                    'style.css': '_css-src/style.scss'
                }
            }

        },

        postcss: {
            options: {

                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: '' // ...to the specified directory
                },

                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                    ]
                },

                dist: {
                    src: '*.css'
                }

        },

        // JAVASCRIPT

        uglify: {

            compile: {
                files: {
                    'main.min.js': ['_js-src/*.js']
                }
            }

        },

        // IMAGES

        imagemin: {
            
            optimise: {
                files: [{
                    expand: true,
                    cwd: '_img-src',
                    src: ['*.{png,jpg,gif,svg}'],
                    dest: 'images'
                }]
            }

        },

        // JEKYLL

        shell : {

            jekyll_build : {
                command : 'jekyll build'
            },

            jekyll_serve : {
                command : 'jekyll serve'
            }

        },


        //=========================
        // WATCH TASK
        //=========================

        watch: {

            html: {

                files: ['index.html', '_layouts/*.html', '_includes/*.html', '_posts/*.md', '*.md', '*.html'],
                tasks: ['build'],
                    options: {
                        spawn: false,
                        livereload:35729,
                        event: ['added', 'changed']
                    },

            },

            css: {

                files: ['_css-src/**/*.scss'],
                tasks: ['css', 'shell:jekyll_build'],
                    options: {
                        spawn: false,
                        livereload:35729,
                        event: ['added', 'changed']
                    },

            },

            js: {

                files: ['_js-src/*.js'],
                tasks: ['js', 'shell:jekyll_build'],
                    options: {
                        spawn: false,
                        livereload:35729,
                        event: ['added', 'changed']
                    },
                    
            },

            img: {

                files: ['_img-src/**'],
                tasks: ['img', 'shell:jekyll_build'],
                    options: {
                        spawn: false,
                        livereload:35729,
                        event: ['added', 'changed']
                    },
                    
            },

        },



    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('css', ['sass', 'postcss']);
    grunt.registerTask('js', ['uglify']);
    grunt.registerTask('img', ['imagemin']);
    grunt.registerTask('build', ['shell:jekyll_build']);


};