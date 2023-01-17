const {defineConfig} = require('cypress')

module.exports = defineConfig({
    chromeWebSecurity: false,
    defaultCommandTimeout: 120000,
    experimentalFetchPolyfill: false,
    experimentalInteractiveRunEvents: false,
    experimentalSourceRewriting: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    numTestsKeptInMemory: 0,
    pageLoadTimeout: 30000,
    includeShadowDom: true,
    env: {
        baseUrl: 'https://landingpage.redplatform-dev.com/',
        username: 'andreeas.coroian@gmail.com',
        password: 'Test1234@'
    },
    reporterOptions: {
        charts: true,
        overwrite: false,
        json: true,
        reportDir: 'cypress/reports/mochawesome',
        html: false,
        filePrefix: '',
        fileSuffix: '.mochawesome',
    },
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/reports/screenshots',
    videosFolder: 'cypress/reports/videos',
    video: false,
    downloadsFolder: 'cypress/downloads',
    trashAssetsBeforeRuns: true,
    retries: {
        runMode: 0,
        openMode: 0,
    },
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {

        },
        reporterOptions: {
            reportDir: "./mochawesome-report"
        },
    }
})
