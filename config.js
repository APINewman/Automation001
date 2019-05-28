var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    //ignoreUncaughtExceptions: true,
        framework: 'jasmine',
        seleniumAddress: 'http://localhost:4444/wd/hub',
        //directConnect: true,
        specs: ['FirstSpec.js'],
        multiCapabilities:[ {
            'browserName': 'chrome',
            },
            {
                'browserName': 'firefox',
            },],
        //useAllAngular2AppRoots: true,

            onPrepare:function(){

            jasmine.getEnv().addReporter(

                new Jasmine2HtmlReporter({
                    savePath: 'target/screenshots'
                })
            )


    }
};
