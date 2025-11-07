import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Frontend runs on port 3001
    baseUrl: "http://localhost:3001",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
