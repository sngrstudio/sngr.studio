import type { FC, PropsWithChildren } from 'react'
import site from '~/lib/site'
import style from './hero.module.scss'

const Hero: FC<PropsWithChildren> = ({ children }) => (
  <section className="hero min-h-[90vh]">
    <div className="hero-content flex-col lg:flex-row-reverse">
      {children}
      <div className="max-w-screen-md">
        <h1 className={style.h1}>{site.slogan}</h1>
        <p className="text-left text-lg md:text-xl">{site.description}</p>
      </div>
    </div>
  </section>
)

export default Hero
