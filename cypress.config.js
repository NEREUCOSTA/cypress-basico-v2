const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: '5tgkj6',
      reporter: 'cypress-mochawesome-reporter',
      reporterOptions: {
        charts: true,
        reportTitle: 'Automação',
        reportPageTitle: 'Automação',
  
      },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
