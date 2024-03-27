const {defineConfig} = require('cypress')

module.exports = defineConfig({
  projectId: "qk2ko1",
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://ciceksepeti.com/',
    chromeWebSecurity: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
})
