module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            all: {
                options: {
                    livereload: true
                },
                files: [
                    '*.html',
                    'examples/**/*.html',
                    'tests/*.js'
                ],
                // tasks: ['jshint'],
            },
        },
        // Mocha
        mocha: {
          all: {
            src: ['tests/index.html'],
          },
          options: {
            run: true
          }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');


    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['mocha']);

};
