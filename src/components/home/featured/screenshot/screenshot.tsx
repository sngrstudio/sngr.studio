import type { FC } from 'react'
import type { IScreenshot } from './screenshot.type'
import { Loading, Error } from './states'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import useSWR from 'swr'
import getScreenshot, { getScreenshotUrl } from '~/lib/get-screenshot'

const Screenshot: FC<IScreenshot> = ({ url, alt }) => {
  const { data, error } = useSWR(getScreenshotUrl(url), getScreenshot)

  if (!data) return <Loading />
  if (error) return <Error />

  return (
    <LazyMotion features={domAnimation}>
      <m.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full"
        src={data}
        alt={alt}
        width={728}
        height={410}
        loading="lazy"
        decoding="async"
      />
    </LazyMotion>
  )
}

export default Screenshot
