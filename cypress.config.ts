import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    retries: { runMode: 2 },
    pageLoadTimeout: 90000,
    reporter: "mochawesome",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      return config;
    },
    blockHosts: [
      "*.googletagmanager.com", 
      "*.google-analytics.com"
    ]
  },
});
