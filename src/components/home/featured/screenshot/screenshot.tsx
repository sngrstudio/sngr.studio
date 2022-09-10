import type { FC } from 'react'
import useSWR from 'swr'
import getScreenshot, { getScreenshotUrl } from '~/lib/get-screenshot'

interface IScreenshot {
  url: string
  alt?: string
}

const Screenshot: FC<IScreenshot> = ({ url, alt }) => {
  const { data, error } = useSWR(getScreenshotUrl(url), getScreenshot)

  return (
    <div>
      <img src={data} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}

export default Screenshot
