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
                    '_css-src/styles/style.css': '_css-src/sass/style.scss'
                }
            }

        },

        postcss: {
            options: {

                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: '_css-src/styles/' // ...to the specified directory
                },

                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                    ]
                },

                dist: {
                    src: '_css-src/styles/*.css'
                }

        },

        // JAVASCRIPT

        uglify: {

            compile: {
                files: {
                    'scripts/main.min.js': ['_js-src/uncompressed/*.js']
                }
            }

        },

        // IMAGES

        imagemin: {
            
            optimise: {
                files: [{
                    expand: true,
                    cwd: '_img-src/uncompressed',
                    src: ['*.{png,jpg,gif,svg}'],
                    dest: 'images'
                }]
            }

        },

        // COPY

        copy: {

            css: {
                files: [
                  {expand: true, flatten: true, src: ['_css-src/styles/*'], dest: 'css/', filter: 'isFile'}
                ],
            },

            img: {
                files: [
                  {expand: true, flatten: true, src: ['_img-src/*'], dest: 'www/wp-content/themes/vivid/images/', filter: 'isFile'}
                ],
            },

            js: {
                files: [
                  {expand: true, flatten: true, src: ['_js-src/*'], dest: 'www/wp-content/themes/vivid/scripts/', filter: 'isFile'}
                ],
            },

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

                files: ['index.html', '_layouts/*.html', '_includes/*.html', '_posts/*.md'],
                tasks: ['shell:jekyll_build'],
                    options: {
                        spawn: false,
                        livereload:35729,
                        event: ['added', 'changed']
                    },

            },

            css: {

                files: ['_css-src/sass/**/*.scss'],
                tasks: ['css', 'shell:jekyll_build'],
                    options: {
                        spawn: false,
                        livereload:35729,
                        event: ['added', 'changed']
                    },

            },

            js: {

                files: ['_js-src/uncompressed/*.js'],
                tasks: ['js', 'shell:jekyll_build'],
                    options: {
                        spawn: false,
                        livereload:35729,
                        event: ['added', 'changed']
                    },
                    
            },

            img: {

                files: ['_img-src/uncompressed/**'],
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

    grunt.registerTask('css', ['sass', 'postcss', 'copy:css']);
    grunt.registerTask('js', ['uglify', 'copy:js']);
    grunt.registerTask('img', ['imagemin', 'copy:img']);
    grunt.registerTask('move', ['copy']);


};