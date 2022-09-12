import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { LazyMotion, domAnimation, m, useScroll } from 'framer-motion'
import site from '~/components/site/site'
import menu from '~/components/site/menu'
import MenuIcon from '~icons/mdi/menu'
import style from './header.module.scss'

const Header: FC = () => {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  const handleScroll = () => {
    if (scrollY.get() > scrollY.getPrevious() && scrollY.get() > 100) {
      setHidden(true)
    } else if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false)
    }

    console.log(scrollY)
  }

  useEffect(() => {
    return scrollY.onChange(() => handleScroll())
  })

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -80,
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.header
        variants={variants}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className={style.__header}
      >
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
            <label
              className="btn btn-square btn-ghost text-accent"
              htmlFor="main-menu"
            >
              <MenuIcon />
            </label>
          </div>
        </nav>
      </m.header>
    </LazyMotion>
  )
}

export default Header
