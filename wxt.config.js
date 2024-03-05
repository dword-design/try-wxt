import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'wxt'

export default defineConfig({
  manifest: {
    action: {},
    permissions: ['storage'],
  },
  vite: () => ({
    plugins: [vue()],
  }),
  zip: {
    artifactTemplate: '{{browser}}.zip',
    sourcesTemplate: '{{browser}}-sources.zip',
  },
})
