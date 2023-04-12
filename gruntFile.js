module.export = function (grunt) {
    grunt.initConfig({
        taskOne: {
            option: {},
            targetOne: {},
            targetTwo: {
                options: {}
            }
        },
        taskTwo: {},
        randomProb: 'value',
        package: grunt.file.readJSON('package.json')
    })
}