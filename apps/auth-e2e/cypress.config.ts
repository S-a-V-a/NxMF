import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run auth:serve',
        production: 'nx run auth:preview',
      },
      ciWebServerCommand: 'nx run auth:serve-static',
    }),
    baseUrl: 'http://localhost:4203',
  },
});
