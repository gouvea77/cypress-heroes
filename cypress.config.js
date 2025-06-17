const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // Configure event listeners if needed
        },
        specPattern: 'cypress/tests/e2e/**/*.js',
        baseUrl: 'http://localhost:3000', // ou o endereço da sua aplicação
        supportFile: false // ou 'cypress/support/e2e.js' se usar suporte
    }
});
