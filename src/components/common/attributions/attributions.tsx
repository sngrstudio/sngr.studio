import type { FC } from 'react'
import style from './attributions.module.scss'

interface IAttributionLink {
  url: string
  text: string
}

const AttributionLink: FC<IAttributionLink> = ({ url, text }) => (
  <a href={url} className={style.__attribution} rel="nofollow" target="_blank">
    {text}
  </a>
)

export default AttributionLink
