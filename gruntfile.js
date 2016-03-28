/**
 * Created by warlock on 18/03/16.
 */
module.exports = function(grunt){
    grunt.initConfig({
        simplemocha:{
            options: {
                globals: ['expect'],
                timeout: 3000,
                ignoreLeaks: true,
                ui: 'bdd',
                reporter: 'tap'
            },
            all: { src: ['Test/*.js'] }
        },
        jshint: {
            ignore_warning: {
                options: {
                    '-W034': true
                }
            },
            files: ['gruntfile.js', 'server/*.js','app.js','Test/*.js','Routes/*.js','public/js/*.js'],
            options: {
                reporter:'./server/Grunt/htmlReporter.js',
                reporterOutput:'staticAnalysis.html',
                maxlen: 80,
                quotmark: 'single'
            }
        }
    });
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.registerTask('dev',['jshint','simplemocha']);
};
