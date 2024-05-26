require('dotenv').config()
const { defineConfig } = require("cypress");
// const ServiceTokenServiceJwt = require('./cypress/pages/ServiceTokenServiceJwt.js')
// let serviceTokenServiceJwt = new ServiceTokenServiceJwt()

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const cypressSplit = require('cypress-split')
const registerReportPortalPlugin = require("@reportportal/agent-js-cypress/lib/plugin");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 60000,
  execTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  reporter: 'cypress-multi-reporters',
  viewportWidth: 1900,
  viewportHeight: 1080,
  waitForAnimation: true,
  videoUploadOnPasses : false,
  watchForFileChanges : false,
  videosFolder : './cypress/results/videos/',
  screenshotsFolder : './cypress/results/screenshots/',
  retries: {
    runMode :2
  },
  e2e: {
    async setupNodeEvents(on, config) {
      config.env = {
        ...process.env,
        ...config.env
      }
      cypressSplit(on, config)

      console.log(`-  -----------------------------------------------------`);
      console.log(`-  Tests are running on ${config.env.customer_env} environment`);
      console.log(`-  -----------------------------------------------------`);

      // on('task', {
      //   generateOTP: require("cypress-otp"),
      //   generateJWT(){
      //     return serviceTokenServiceJwt.jwtToken(config.env.operator_secretKey)
      //   },
      //   // to log attempts count in run mode
      //   log: param => console.log(...(Array.isArray(param) ? param : [param])) || true
      // });

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      await registerReportPortalPlugin(on, config);

      return config;
    },
    specPattern: 'cypress/e2e/features/*.feature',
  }
})