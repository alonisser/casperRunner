module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        watch:{
            files:['run.json'],
            options:{},
            tasks:['test']
        },
        casperjs:{
            options:{},
            files:['./tests/*.js']
        }
        //TODO: add the connect server
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-casperjs-plugin');

    grunt.registerTask('test',['casperjs']);
};
