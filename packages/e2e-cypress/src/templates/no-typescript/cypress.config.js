import { defineConfig } from 'cypress';
import { injectQuasarDevServerConfig } from '@quasar/quasar-app-extension-testing-e2e-cypress/cct-dev-server';

export default defineConfig({
  fixturesFolder: 'test/cypress/fixtures',
  screenshotsFolder: 'test/cypress/screenshots',
  videosFolder: 'test/cypress/videos',
  video: true,
  e2e: {
    // setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:<%= devServerPort %>/',
    supportFile: 'test/cypress/support/e2e.ts',
    specPattern: 'test/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
  },
  component: {
    // setupNodeEvents(on, config) {},
    supportFile: 'test/cypress/support/component.ts',
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    indexHtmlFile: 'test/cypress/support/component-index.html',
    devServer: injectQuasarDevServerConfig(),
  },
});
