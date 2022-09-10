import type { FC } from 'react'
import useSWR from 'swr'
import getScreenshot, { getScreenshotUrl } from '~/lib/get-screenshot'
import { Loading, Error } from './states'

interface IScreenshot {
  url: string
  alt?: string
}

const Screenshot: FC<IScreenshot> = ({ url, alt }) => {
  const { data, error } = useSWR(getScreenshotUrl(url), getScreenshot)

  if (!data) return <Loading />
  if (error) return <Error />

  return (
    <img
      className="w-full"
      src={data}
      alt={alt}
      width={728}
      height={410}
      loading="lazy"
      decoding="async"
    />
  )
}

export default Screenshot
