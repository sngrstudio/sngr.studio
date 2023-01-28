import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import prefetch from '@astrojs/prefetch'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import yaml from '@modyfi/vite-plugin-yaml'

// https://astro.build/config
import compress from 'astro-compress'
import critters from 'astro-critters'

// https://astro.build/config
export default defineConfig({
  site: 'https://sngr.studio',
  integrations: [
    react(),
    prefetch(),
    mdx(),
    image(),
    sitemap({
      filter: (page) => page !== 'https://sngr.studio/offline/',
      customPages: [
        'https://sngr.studio/image-api',
        'https://sngr.studio/github',
        'https://sngr.studio/instagram',
        'https://sngr.studio/twitter',
        'https://sngr.studio/owner',
      ],
    }),
    compress(),
    critters(),
  ],
  vite: {
    plugins: [
      yaml(),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
        customCollections: {
          'sngr-studio-brand': FileSystemIconLoader('./src/assets/icons'),
          illustrations: FileSystemIconLoader('./src/assets/illustrations'),
        },
      }),
    ],
  },
})
