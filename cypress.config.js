const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://automationexercise.com',
    homepageUrl:'https://automationexercise.com/',
    specPattern: [
      'cypress/e2e/**/*.cy.js',               // your existing e2e tests
      'cypress/integrationTests/**/*.cy.js',  // your “integrationTests” folder
    ],
    supportFile: 'cypress/support/e2e.js',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    reporter:'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      reportFilename: 'NHSBT-CypressDemo_ExecutionReport_[datetime]_report',
      overwrite: false,
      html: false,
      json: true,
      charts: true
    },
    env:
    {
      apiUrl:'https://automationexercise.com/api',
      productList:'/productsList'
    },  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
