import { defineConfig, sharpImageService } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import Icons from 'unplugin-icons/vite'
import yaml from '@modyfi/vite-plugin-yaml'
import svgr from 'vite-plugin-svgr'

// https://astro.build/config
export default defineConfig({
  site: 'https://sngr.studio',
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [
      yaml(),
      svgr(),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    ],
  },
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
})
