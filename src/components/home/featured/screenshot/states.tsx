import type { FC, PropsWithChildren } from 'react'
import LoadingIcon from '~icons/mdi/loading'
import ErrorIcon from '~icons/mdi/error'
import style from './screenshot.module.scss'

const State: FC<PropsWithChildren> = ({ children }) => (
  <div className={style.__state}>{children}</div>
)

export const Loading: FC = () => (
  <State>
    <span className="animate-spin">
      <LoadingIcon className="text-6xl" />
    </span>
  </State>
)

export const Error: FC = () => (
  <State>
    <div className="flex flex-col items-center gap-1">
      <ErrorIcon className="text-6xl" />
      <span className="text-lg italic">Ada kesalahan.</span>
    </div>
  </State>
)
