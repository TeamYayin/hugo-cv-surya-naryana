const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5byj2n",
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },
});
