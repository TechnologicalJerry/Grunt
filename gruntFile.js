module.export = function (grunt) {
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
                files:[
                    {
                        src: 'src/index.js',
                        dest: 'build/indix.main.js'
                    }
                ]
            }
        }
    });

    grunt.loadNPMTasks('grunt-contrib-uglify');
}