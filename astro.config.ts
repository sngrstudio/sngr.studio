import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import prefetch from '@astrojs/prefetch'
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://sngr.studio',
  integrations: [react(), prefetch()],
  vite: {
    plugins: [
      Icons({
        compiler: 'jsx',
        jsx: 'react',
        autoInstall: true,
      }),
    ],
  },
})
