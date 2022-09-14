import type { ElementType } from 'react'
import Trophy from '~icons/mdi/trophy'
import Check from '~icons/mdi/clipboard-check'
import Chat from '~icons/mdi/chat'

export interface IMenu {
  title: string
  link: string
  icon?: ElementType
  isExternal?: boolean
  noPrefetch?: boolean
}

const mainMenu: IMenu[] = [
  {
    title: 'Karya',
    link: '/projects',
    icon: Trophy,
  },
  {
    title: 'Layanan',
    link: '/services',
    icon: Check,
  },
  {
    title: 'Hubungi Kami',
    link: '/contact',
    icon: Chat,
  },
]

export const externalMenu: IMenu[] = [
  {
    title: 'Screenshot',
    link: '/image-api',
    isExternal: true,
  },
  {
    title: 'Pesantren & Sekolah Islam',
    link: '/program-pesantren',
  },
]

export const socialMenu: IMenu[] = [
  {
    title: 'Github',
    link: '/github',
    isExternal: true,
  },
  {
    title: 'Instagram',
    link: '/instagram',
    isExternal: true,
  },
  {
    title: 'Twitter',
    link: '/twitter',
    isExternal: true,
  },
]

export const footerMenu: IMenu[] = [
  {
    title: 'Tentang SNGR Studio',
    link: '/about',
  },
  {
    title: 'Owner',
    link: '/owner',
    isExternal: true,
  },
  {
    title: 'Atribusi',
    link: '/atribusi',
  },
  {
    title: 'Syarat dan Ketentuan',
    link: '/terms',
  },
  {
    title: 'Kebijakan Privasi',
    link: '/privacy',
  },
  {
    title: 'Umpan',
    link: '/rss',
    noPrefetch: true,
  },
  {
    title: 'Peta Situs',
    link: '/sitemap',
    noPrefetch: true,
  },
]

export default mainMenu
