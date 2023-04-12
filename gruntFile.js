module.exports = function (grunt) {
    grunt.initConfig({
        // taskOne: {
        //     option: {},
        //     targetOne: {},
        //     targetTwo: {
        //         options: {}
        //     }
        // },
        // taskTwo: {},
        // randomProb: 'value',
        package: grunt.file.readJSON('package.json'),
        uglify: {
            targetFirst: {
                files: [
                    {
                        src: 'src/index.js',
                        dest: 'build/indix.min.js'
                    },
                    {
                        src: ['src/indexFirst.js', 'src/indexSecond.js'],
                        dest: 'build/indixFinal.min.js'
                    }
                ]
            },
            targetSecond: {
                files: [
                    {
                        src: 'src/*.js',
                        dest: 'build/finalBuild.min.js'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('compressJS', 'uglify');
}