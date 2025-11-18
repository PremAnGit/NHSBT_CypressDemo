const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://automationexercise.com',
    homepageUrl:'https://automationexercise.com/',
    specPattern:'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    reporter:'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      reportFilename: 'NHSBT-CypressDemo_ExecutionReport_[datetime]_report',
      overwrite: false,
      html: false,
      json: true,
      charts: true
    },  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
