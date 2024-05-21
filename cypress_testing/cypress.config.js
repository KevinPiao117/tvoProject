const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n3ykeq',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  viewportWidth: 1024,
  viewportHeight: 768,
  reporter: 'cypress-mochawesome-reporter'
});
