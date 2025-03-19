const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.spec.js",  // Definindo o padrão para arquivos .spec.js dentro de e2e
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
