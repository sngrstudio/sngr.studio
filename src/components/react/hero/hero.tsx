import type { FC } from 'react'
import site from '~/lib/site'
import getScreenshot from '~/lib/get-screenshot'
import style from './hero.module.scss'

interface IHero {
  screenshot: string
}

const Hero: FC<IHero> = ({ screenshot }) => (
  <section className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="mockup-window border bg-base-300 rounded-lg">
        <img
          src={getScreenshot(screenshot, 1280, 720)}
          width={600}
          height={370}
          alt="placeholder"
        />
      </div>
      <div className="max-w-screen-md">
        <h1 className={style.h1}>{site.slogan}</h1>
        <p className="text-left text-lg md:text-xl">{site.description}</p>
      </div>
    </div>
  </section>
)

export default Hero
