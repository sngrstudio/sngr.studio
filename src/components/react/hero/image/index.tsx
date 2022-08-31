import type { FC } from 'react'
import type { IHeroImage } from './image'
import ImageComp from './image'
import { AnimatePresence } from 'framer-motion'

const Image: FC<IHeroImage> = ({ image }) => (
  <AnimatePresence mode="wait">
    <ImageComp image={image} />
  </AnimatePresence>
)

export default Image
