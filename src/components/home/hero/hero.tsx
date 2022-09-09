import type { FC } from 'react'
import Illustration from '~icons/illustrations/building-web'
import style from './hero.module.scss'

interface IHero {
  slogan?: string
  description?: string
}

const Hero: FC<IHero> = ({ slogan, description }) => {
  return (
    <section className={style.__section}>
      <div className={style.__container}>
        <div className={style.__screenshot}>
          <Illustration className="w-full h-full" />
        </div>
        <article className={style.__slogan_box}>
          <h1>{slogan}</h1>
          <p>{description}</p>
        </article>
      </div>
    </section>
  )
}

export default Hero
