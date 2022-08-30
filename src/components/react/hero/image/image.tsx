import type { FC } from 'react'
import Loading from './loading'
import useSWR from 'swr'
import getScreenshot, { getScreenshotUrl } from '~/lib/get-screenshot'
import style from './image.module.scss'

const Image: FC = ({ image }) => {
  const { data } = useSWR(getScreenshotUrl(image), getScreenshot)

  if (!data) return <Loading />
  return (
    <div className={style.__window}>
      <img className="w-full" src={data} width={463} height={260} alt="" />
    </div>
  )
}

export default Image
