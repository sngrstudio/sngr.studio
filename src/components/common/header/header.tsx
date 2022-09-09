import type { FC } from 'react'
import site from '~/components/site/site'
import menu from '~/components/site/menu'
import MenuIcon from '~icons/mdi/menu'
import style from './header.module.scss'

const Header: FC = () => {
  return (
    <header className={style.__header}>
      <nav className="navbar w-full">
        <div className="flex-1">
          <a href="/" rel="prefetch" aria-label="Beranda">
            <site.logo.color className="w-max h-[36px]" />
          </a>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal text-secondary">
            {menu.map((item, i) => (
              <li key={`menu-${i}`}>
                <a href={item.link} rel="prefetch">
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none md:hidden">
          <label className="btn btn-square btn-ghost" htmlFor="main-menu">
            <MenuIcon />
          </label>
        </div>
      </nav>
    </header>
  )
}

export default Header
