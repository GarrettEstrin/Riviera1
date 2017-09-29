module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            tinypng: {
                files: ['images-src/*.jpg'],
                tasks: ['tinypng']
            },
            cssmin: {
                files: ['css/*.css', '!style.min.css'],
                task: ['cssmin']
            },
            uglify: {
                files: ['js/*.js', '!assets/js/built.min.js'],
                tasks: ['uglify']
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
              files: [{
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
              }]
            }
          },
        tinypng: {
            options: {
                apiKey: 'xTu7SaKDKg4kvslEkohp8GKQFrWUzKlQ',
                checkSigs: true,
                sigFile: 'images-src/tiny_sigs.json',
                summarize: true,
                showProgress: true,
                stopOnImageError: true
           },
            compress: {
                expand: true,
                cwd: 'images-src/',
                src: '*.jpg',
                dest: 'images/',
                ext: '.jpg'
            }
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapName: 'js/built.min.js.map'
              },
            my_target: {
              files: {
                'js/built.min.js': ['js/*.js', '!assets/js/built.min.js']
              }
            }
          }
    });
    grunt.registerTask('default', ['watch']);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-tinypng');
};