import type { FC } from 'react'
import { Loading } from '../placeholder'
import useSWR from 'swr'
import site from '~/lib/site'
import getScreenshot, { getScreenshotUrl } from '~/lib/get-screenshot'
import style from './hero.module.scss'
import imgStyle from '../placeholder/placeholder.module.scss'

interface IHero {
  screenshot: string
}

const HeroImage: FC = ({ image }) => {
  const { data } = useSWR(getScreenshotUrl(image), getScreenshot)

  if (!data) return <Loading />
  return (
    <div className={imgStyle.__window}>
      <img className="w-full" src={data} width={463} height={260} alt="" />
    </div>
  )
}

const Hero: FC<IHero> = ({ screenshot }) => (
  <section className="hero min-h-[90vh]">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <HeroImage image={screenshot} />
      <div className="max-w-screen-md">
        <h1 className={style.h1}>{site.slogan}</h1>
        <p className="text-left text-lg md:text-xl">{site.description}</p>
      </div>
    </div>
  </section>
)

export default Hero
