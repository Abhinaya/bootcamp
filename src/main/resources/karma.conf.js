module.exports = function(config) {
    config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    files : [
        'main/resources/assets/user.js',
        'test/jasmine/spec/*.js'
    ],
    reporters: ['junit'],
    junitReporter : {
        outputFile: '../target/test-results.xml'
    },
    colors : true,
    browsers: ["PhantomJS"],
    singleRun : false
})
}