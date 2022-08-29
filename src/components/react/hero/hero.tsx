import type { FC } from 'react'
import { Suspense } from 'react'
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
  const { data } = useSWR(getScreenshotUrl(image), getScreenshot, {
    suspense: true,
  })

  return (
    //<Loading />
    <Suspense fallback={<Loading />}>
      <div className={imgStyle.__window}>
        <img className="w-full" src={data} width={462} height={260} alt="" />
      </div>
    </Suspense>
  )
}

const Hero: FC<IHero> = ({ screenshot }) => (
  <section className="hero min-h-screen">
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
