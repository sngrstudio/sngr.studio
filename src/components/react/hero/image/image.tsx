import type { FC } from 'react'
import Loading from './loading'
import { motion } from 'framer-motion'
import useSWR from 'swr'
import getScreenshot, { getScreenshotUrl } from '~/lib/get-screenshot'
import style from './image.module.scss'

export interface IHeroImage {
  image: string
}

const Image: FC<IHeroImage> = ({ image }) => {
  const { data } = useSWR(getScreenshotUrl(image), getScreenshot)

  if (!data) return <Loading />
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={style.__window}
      key="heroImage"
    >
      <img className="w-full" src={data} width={463} height={260} alt="" />
    </motion.div>
  )
}

export default Image
