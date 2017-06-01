module.exports = grunt => {

    grunt.initConfig({

        // For ES6 lols
        babel: {
            options: {
                babelrc: '.babelrc'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['*.js'],
                    dest: 'src/js/compiled',
                    ext: '.js'
                }]
            }
        },
        // For SCSS lols
        compass: {
            index: {
                options: {
                    sassDir: 'src/scss',
                    specify: 'src/scss/index.scss',
                    cssDir:  'src/scss/compiled',
                    raw: 'preferred_syntax = :sass\n'
                }
            }
        },
        // Assemble.io loveliness
        assemble: {
            options: {
                assets: 'dist/images',
                partials: ['src/templates/partials/*.hbs'],
                layout: ['src/templates/layouts/main.hbs'],
                data: ['src/data/*.{json,yml}'],
                removeHbsWhitespace: true,
                ext: '.html'
            },
            static: {
                expand: true,
                cwd: 'src/templates/pages/',
                src: ['**/*.hbs'],
                dest: 'dist/'
            }
        },
        // Prettify HTML
        prettify: {
            options: {
                indent: 4,
                unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u', 'em']
            },
            all: {
                expand: true,
                cwd: 'dist/',
                ext: '.php',
                src: ['*.php'],
                dest: 'dist/'
            }
        },
        // Concatenating
        concat: {
            app_js: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'src/js/compiled/**/*.js'
                ],
                dest: 'dist/scripts.js'
            },
            app_css: {
                src: ['src/scss/compiled/index.css'],
                dest: 'dist/styles.css'
            }
        },
        // Clean out jank
        clean: {
            clean: ['dist/*', 'src/js/compiled/*', 'src/scss/compiled/*', '!dist/fonts', '!dist/images']
        },
        // Watch mandem
        watch: {
            scss: {
                files: 'src/scss/**/*.scss',
                tasks: ['compass', 'concat:app_css']
            },
            js: {
                files: ['!src/js/compiled/**/*.js', 'src/js/**/*.js'],
                tasks: ['babel', 'concat:app_js']
            },
            hbs: {
                files: ['src/templates/**/*.hbs'],
                tasks: ['assemble']
            },
            data: {
                files: 'src/data/**/*.json',
                tasks: ['assemble']
            }
        }
    })

    grunt.loadNpmTasks('grunt-assemble')
    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-compass')
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-prettify')

    grunt.registerTask('basic', ['compass', 'babel', 'concat', 'assemble'])
    grunt.registerTask('default', ['basic', 'watch'])
    grunt.registerTask('rebuild', ['clean', 'default'])
}