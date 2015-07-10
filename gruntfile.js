module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
       
        concat: {
            dist: {
                src: [                    
                    'scripts/src/dm.border.js',                    
                ],
                dest: 'scripts/dist/dm.border.js',
            }
        },
        uglify: {
            dist: {
                files: {
                    'scripts/dist/dm.border.min.js': 'scripts/dist/dm.border.js'
                }
            }
        },               
        watch: {
            scripts: {
                files: ['scripts/**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                },
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');        
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['less','concat', 'uglify']);
};
