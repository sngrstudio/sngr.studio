import type { FC } from 'react'
import type { IHeroImage } from './image'
import ImageComp from './image'
import { AnimatePresence } from 'framer-motion'

const Image: FC<IHeroImage> = ({ image, link }) => (
  <AnimatePresence mode="wait">
    <ImageComp image={image} link={link} />
  </AnimatePresence>
)

export default Image
