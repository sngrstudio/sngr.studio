import type { FC } from 'react'
import LoadingIcon from '~icons/mdi/loading'
import style from './placeholder.module.scss'

const Loading: FC = () => (
  <div className={style.__window}>
    <div className="aspect-w-16 aspect-h-9 relative">
      <div
        className="min-w-[320px] pb-[52.65%]"
        dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="animate-spin">
          <LoadingIcon />
        </span>
      </div>
    </div>
  </div>
)

export default Loading
