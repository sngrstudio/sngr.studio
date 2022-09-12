import type { ElementType } from 'react'
import Trophy from '~icons/mdi/trophy'
import Check from '~icons/mdi/clipboard-check'
import Chat from '~icons/mdi/chat'

export interface IMenu {
  title: string
  link: string
  icon?: ElementType
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
  },
  {
    title: 'Instagram',
    link: '/instagram',
  },
  {
    title: 'Twitter',
    link: '/twitter',
  },
]

export const footerMenu: IMenu[] = [
  {
    title: 'Owner',
    link: '/radenpioneer',
  },
  {
    title: 'Legal',
    link: '/legal',
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
  },
  {
    title: 'Peta Situs',
    link: '/sitemap',
  },
]

export default mainMenu
