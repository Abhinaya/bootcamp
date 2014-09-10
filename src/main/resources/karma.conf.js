// Sample Testacular configuration file, that contain pretty much all the available options
// It's used for running client tests on Travis (http://travis-ci.org/#!/karma-runner/karma)
// Most of the options can be overriden by cli arguments (see karma --help)
//
// For all available config options and default values, see:
// https://github.com/karma-runner/karma/blob/stable/lib/config.js#L54


// base path, that will be used to resolve files and exclude
module.exports = function(config) {
    config.set({
        basePath: '../..',

// list of files / patterns to load in the browser
    frameworks: ['jasmine'],

    files : [
        'main/resources/assets/user.js',
        'test/jasmine/spec/*.js'
    ],

    reporters: ['junit'],


    junitReporter : {
        // will be resolved to basePath (in the same way as files/exclude patterns)
        outputFile: '../target/test-results.xml'
    },
//
//// web server port
//// CLI --port 9876
//    port = 9876;
//
//// cli runner port
//// CLI --runner-port 9100
//    runnerPort = 9100;
//
//// enable / disable colors in the output (reporters and logs)
//// CLI --colors --no-colors
    colors : true,
//
    browsers: ["PhantomJS"],

//// If browser does not capture in given timeout [ms], kill it
//// CLI --capture-timeout 5000
//    captureTimeout = 5000;
//
//// Auto run tests on start (when browsers are captured) and exit
//// CLI --single-run --no-single-run
    singleRun : false
//
//// report which specs are slower than 500ms
//// CLI --report-slower-than 500
//    reportSlowerThan = 500;
}
)
}
