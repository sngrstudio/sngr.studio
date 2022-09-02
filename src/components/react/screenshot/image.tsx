import type { FC, PropsWithChildren } from 'react'
import { Loading, Error } from './state'
import { motion } from 'framer-motion'
import useSWR from 'swr'
import getScreenshot, { getScreenshotUrl } from '~/lib/get-screenshot'
import style from './screenshot.module.scss'

export interface IHeroImageWrapper {
  link?: string
}

export interface IHeroImage extends IHeroImageWrapper {
  image: string
}

const ImageWrapper: FC<PropsWithChildren<IHeroImageWrapper>> = ({
  link,
  children,
}) => {
  if (link)
    return (
      <motion.a
        href={link}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={style.__window}
        key="heroImage"
      >
        {children}
      </motion.a>
    )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={style.__window}
      key="heroImage"
    >
      {children}
    </motion.div>
  )
}

const Image: FC<IHeroImage> = ({ image, link }) => {
  const { data, error } = useSWR(getScreenshotUrl(image), getScreenshot)

  if (!data) return <Loading />
  if (error) return <Error />
  return (
    <ImageWrapper link={link}>
      <img className="w-full" src={data} width={463} height={260} alt="" />
    </ImageWrapper>
  )
}

export default Image
