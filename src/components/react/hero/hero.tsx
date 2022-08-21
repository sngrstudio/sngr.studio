import type { FC } from 'react'
import site from '~/lib/site'
import style from './hero.module.scss'

const ssPlaceholder = 'https://placekitten.com/600/375'

const Hero: FC = () => (
  <section className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="mockup-window border bg-base-300 rounded-lg">
        <img src={ssPlaceholder} width={600} height={370} alt="placeholder" />
      </div>
      <div className="max-w-screen-md">
        <h1 className={style.h1}>{site.slogan}</h1>
        <p className="text-left text-lg md:text-xl">
          SNGR Studio membantu bisnis, UMKM, dan individual untuk meningkatkan
          presensi di dunia maya melalui tampilan website yang ringan, cepat dan
          aman.
        </p>
      </div>
    </div>
  </section>
)

export default Hero
