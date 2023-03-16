import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import critters from 'astro-critters'

import Icons from 'unplugin-icons/vite'
import yaml from '@modyfi/vite-plugin-yaml'

// https://astro.build/config
export default defineConfig({
  site: 'https://sngr.studio',
  integrations: [react(), mdx(), sitemap(), compress(), critters()],
  vite: {
    plugins: [
      yaml(),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    ],
  },
})
