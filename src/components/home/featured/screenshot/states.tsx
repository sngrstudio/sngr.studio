import type { FC, PropsWithChildren } from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import LoadingIcon from '~icons/mdi/loading'
import ErrorIcon from '~icons/mdi/error'
import style from './screenshot.module.scss'

const State: FC<PropsWithChildren> = ({ children }) => (
  <LazyMotion features={domAnimation}>
    <m.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative"
    >
      <div className={style.__state_size}>&nbsp;</div>
      <div className={style.__state}>{children}</div>
    </m.div>
  </LazyMotion>
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
