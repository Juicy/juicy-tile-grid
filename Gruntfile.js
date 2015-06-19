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
                    'tests/*.*',
                    'tests/**/*.html'
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
        },
        bump: {
          options: {
            files: ['package.json', 'bower.json', 'src/*'],
            commit: true,
            commitMessage: '%VERSION%',
            commitFiles: ['package.json', 'bower.json', 'src/*'],
            createTag: true,
            tagName: '%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: false,
            // pushTo: 'origin',
            globalReplace: false,
            prereleaseName: false,
            regExp: false
          }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-bump');


    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['mocha']);

};
