import type { FC } from 'react'
import LoadingIcon from '~icons/mdi/loading'
import style from './placeholder.module.scss'

const Loading: FC = () => (
  <div className={style.__window}>
    <img
      className="w-max"
      src="https://placekitten.com/462/260"
      width={462}
      height={260}
      alt="loading"
    />
  </div>
)

export default Loading
