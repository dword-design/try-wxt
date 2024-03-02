import { defineConfig } from 'wxt';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  manifest: {
    action: {},
    permissions: ['storage'],
  },
  zip: {
    artifactTemplate: '{{browser}}.zip',
    sourcesTemplate: '{{browser}}-sources.zip',
  },
  vite: () => ({
    plugins: [vue()],
  }),
});