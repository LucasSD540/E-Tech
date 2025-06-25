import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // seu front-end React
    setupNodeEvents(on, config) {
      // aqui vai config de plugins, se quiser usar
    },
  },
});
