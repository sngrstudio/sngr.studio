import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import prefetch from '@astrojs/prefetch'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://astro.build/config
export default defineConfig({
  site: 'https://sngr.studio',
  integrations: [react(), prefetch(), mdx(), image()],
  vite: {
    plugins: [
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
