module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express : {
            dev: {
                options: {
        script: 'app.js'
      }
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/style.css' : 'src/sass/style.sass',
                    'dist/style_tablet.css' : 'src/sass/style_tablet.sass',
                    'dist/style_desktop.css' : 'src/sass/style_desktop.sass'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.sass',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-express-server');
    grunt.registerTask('dev',['sass','watch']);
}