import type { FC } from 'react'
import type { IScreenshot } from './screenshot.type'
import { AnimatePresence } from 'framer-motion'
import ScreenshotBeforeAnimation from './screenshot'

const Screenshot: FC<IScreenshot> = ({ url, alt }) => (
  <AnimatePresence mode="wait">
    <ScreenshotBeforeAnimation url={url} alt={alt} />
  </AnimatePresence>
)

export default Screenshot
